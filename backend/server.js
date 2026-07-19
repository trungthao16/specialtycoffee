import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import connectDB from './config/db.js';
import Product from './models/Product.js';
import Category from './models/Category.js';
import Post from './models/Post.js';
import Order from './models/Order.js';
import MetaSEO from './models/MetaSEO.js';
import { mockProducts, mockPosts } from './mockData.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

// POST: Upload base64 image
app.post('/api/upload', async (req, res) => {
  try {
    const { file, filename } = req.body;
    if (!file || !filename) {
      return res.status(400).json({ message: 'Missing file data or filename' });
    }

    // Split extension and base64 prefix
    const matches = file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({ message: 'Invalid base64 format' });
    }

    const fileBuffer = Buffer.from(matches[2], 'base64');
    
    // Create uploads folder if not exists
    const uploadDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const cleanFilename = `${Date.now()}-${filename.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
    const filePath = path.join(uploadDir, cleanFilename);
    
    fs.writeFileSync(filePath, fileBuffer);
    
    const backendUrl = process.env.BACKEND_URL || `http://localhost:${process.env.PORT || 5000}`;
    const fileUrl = `${backendUrl}/uploads/${cleanFilename}`;
    
    return res.json({ url: fileUrl });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ message: error.message });
  }
});

// Database connection
let isDbConnected = false;
connectDB()
  .then(() => {
    isDbConnected = true;
  })
  .catch((err) => {
    console.warn('MongoDB connection failed. Operating with mock data fallbacks.', err.message);
  });

// API Routes

// GET: Products (with optional coffeeType and roastLevel filters)
app.get('/api/products', async (req, res) => {
  const { coffeeType, roastLevel } = req.query;
  
  if (isDbConnected) {
    try {
      const query = {};
      if (coffeeType && coffeeType !== 'All') query.coffeeType = coffeeType;
      if (roastLevel && roastLevel !== 'All') query.roastLevel = roastLevel;

      const products = await Product.find(query).populate('category').lean();
      if (products && products.length > 0) {
        return res.json(products);
      }
    } catch (error) {
      console.error('Error fetching products from DB:', error.message);
    }
  }

  // Fallback to mock data with filter logic
  let filtered = [...mockProducts];
  if (coffeeType && coffeeType !== 'All') {
    filtered = filtered.filter(p => p.coffeeType === coffeeType);
  }
  if (roastLevel && roastLevel !== 'All') {
    filtered = filtered.filter(p => p.roastLevel === roastLevel);
  }
  return res.json(filtered);
});

// GET: Posts (published)
app.get('/api/posts', async (req, res) => {
  if (isDbConnected) {
    try {
      const posts = await Post.find({ isPublished: true }).populate('category').sort({ createdAt: -1 }).lean();
      if (posts && posts.length > 0) {
        return res.json(posts);
      }
    } catch (error) {
      console.error('Error fetching posts from DB:', error.message);
    }
  }
  return res.json(mockPosts);
});

// GET: Single Product by slug
app.get('/api/products/:slug', async (req, res) => {
  const { slug } = req.params;

  if (isDbConnected) {
    try {
      const product = await Product.findOne({ slug }).populate('category').lean();
      if (product) {
        return res.json(product);
      }
    } catch (error) {
      console.error('Error fetching product from DB:', error.message);
    }
  }

  const mockProduct = mockProducts.find(p => p.slug === slug);
  if (mockProduct) {
    return res.json(mockProduct);
  }
  return res.status(404).json({ message: 'Product not found' });
});

// GET: Single Post by slug
app.get('/api/posts/:slug', async (req, res) => {
  const { slug } = req.params;
  
  if (isDbConnected) {
    try {
      const post = await Post.findOne({ slug, isPublished: true }).populate('category').lean();
      if (post) {
        return res.json(post);
      }
    } catch (error) {
      console.error('Error fetching post from DB:', error.message);
    }
  }

  const mockPost = mockPosts.find(p => p.slug === slug);
  if (mockPost) {
    return res.json(mockPost);
  }
  return res.status(404).json({ message: 'Post not found' });
});

// POST: Add Blog Post
app.post('/api/posts', async (req, res) => {
  try {
    const { title, slug, content, excerpt, coverImage, author } = req.body;
    if (!title || !slug || !content || !excerpt || !coverImage) {
      return res.status(400).json({ message: 'Missing required post fields' });
    }

    const postData = {
      title,
      slug: slug.toLowerCase().trim(),
      content,
      excerpt,
      coverImage,
      author: author || 'Coffee Specialist',
      isPublished: true,
      createdAt: new Date(),
    };

    if (isDbConnected) {
      const newPost = await Post.create(postData);
      return res.status(201).json(newPost);
    }

    // Dynamic mock fallback
    const mockNewPost = { _id: `mock_post_${Date.now()}`, ...postData };
    mockPosts.unshift(mockNewPost); // Prepend to mock list
    return res.status(201).json(mockNewPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// POST: Add Product
app.post('/api/products', async (req, res) => {
  try {
    const { name, slug, description, price, image, coffeeType, roastLevel, categorySlug } = req.body;
    if (!name || !slug || !description || !price || !image) {
      return res.status(400).json({ message: 'Missing required product fields' });
    }

    // Default category lookup
    let categoryId = null;
    let categoryObj = null;

    if (isDbConnected) {
      try {
        let cat = await Category.findOne({ slug: categorySlug || 'single-origin' });
        if (!cat) {
          cat = await Category.create({
            name: categorySlug === 'espresso-blend' ? 'Espresso Blend' : 'Single Origin',
            slug: categorySlug || 'single-origin',
            type: 'product',
          });
        }
        categoryId = cat._id;
        categoryObj = cat;
      } catch (err) {
        console.error('Error handling category query in product post:', err.message);
      }
    }

    const productData = {
      name,
      slug: slug.toLowerCase().trim(),
      description,
      price: Number(price),
      image,
      coffeeType: coffeeType || 'Arabica',
      roastLevel: roastLevel || 'Medium',
      category: categoryId,
      inStock: true,
      rating: 5.0,
      reviewsCount: 0,
      createdAt: new Date(),
    };

    if (isDbConnected) {
      const newProduct = await Product.create(productData);
      return res.status(201).json(newProduct);
    }

    // Dynamic mock fallback
    const mockNewProduct = {
      _id: `mock_prod_${Date.now()}`,
      ...productData,
      category: categoryObj || { name: 'Single Origin', slug: 'single-origin' },
    };
    mockProducts.unshift(mockNewProduct);
    return res.status(201).json(mockNewProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// GET: Meta SEO
app.get('/api/seo', async (req, res) => {
  const { path } = req.query;
  
  if (isDbConnected && path) {
    try {
      const seo = await MetaSEO.findOne({ path: path.toLowerCase() }).lean();
      if (seo) {
        return res.json(seo);
      }
    } catch (error) {
      console.error('Error fetching MetaSEO from DB:', error.message);
    }
  }

  // Fallback default meta
  return res.json({
    path: path || '/',
    title: 'Specialty Coffee Space - Cà Phê Specialty Thượng Hạng',
    description: 'Cửa hàng cà phê specialty tinh khiết. Trải nghiệm hương vị bản nguyên.',
    keywords: 'cà phê, specialty coffee, arabica, robusta',
  });
});

// POST: Place Order
app.post('/api/orders', async (req, res) => {
  try {
    const { customerName, customerEmail, customerPhone, shippingAddress, items, totalAmount } = req.body;
    
    if (!customerName || !customerEmail || !customerPhone || !shippingAddress || !items || !totalAmount) {
      return res.status(400).json({ message: 'Missing required order details' });
    }

    if (isDbConnected) {
      const newOrder = await Order.create({
        customerName,
        customerEmail,
        customerPhone,
        shippingAddress,
        items,
        totalAmount,
      });
      return res.status(201).json({ message: 'Order created successfully', orderId: newOrder._id });
    }

    // Mock response on disconnected DB
    return res.status(201).json({ message: 'Order simulated successfully (Mock mode)', orderId: 'mock_order_123' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
