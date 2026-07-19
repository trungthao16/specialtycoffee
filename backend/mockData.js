export const mockCategories = [
  { _id: 'cat1', name: 'Single Origin', slug: 'single-origin', description: 'Cà phê đơn nguồn gốc chất lượng cao', type: 'product' },
  { _id: 'cat2', name: 'Espresso Blend', slug: 'espresso-blend', description: 'Hỗn hợp cà phê phối trộn cân bằng', type: 'product' },
  { _id: 'cat3', name: 'Tin tức & Chia sẻ', slug: 'tin-tuc-chia-se', description: 'Thông tin, kiến thức về cà phê specialty', type: 'post' },
];

export const mockProducts = [
  {
    _id: 'prod1',
    name: 'Ethiopia Yirgacheffe Kochere',
    slug: 'ethiopia-yirgacheffe-kochere',
    description: 'Hương hoa nhài tinh tế, vị chua sáng của chanh vàng, hậu ngọt trà đào thanh khiết. Lựa chọn tuyệt vời cho phương pháp pha Drip.',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    coffeeType: 'Arabica',
    roastLevel: 'Light',
    category: mockCategories[0],
    inStock: true,
    rating: 4.9,
    reviewsCount: 24,
  },
  {
    _id: 'prod2',
    name: 'Kenya Nyeri Peaberry',
    slug: 'kenya-nyeri-peaberry',
    description: 'Hương quả mọng đậm đà, lý chua đen ngọt lịm kèm hậu vị mật ong kéo dài. Phù hợp cho những ai thích vị chua trái cây phong phối.',
    price: 380000,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600',
    coffeeType: 'Arabica',
    roastLevel: 'Light',
    category: mockCategories[0],
    inStock: true,
    rating: 4.8,
    reviewsCount: 18,
  },
  {
    _id: 'prod3',
    name: 'Robusta Honey Gia Lai',
    slug: 'robusta-honey-gia-lai',
    description: 'Hạt Robusta sơ chế Honey chất lượng cao, đậm đà vị chocolate đắng ngọt dịu, hậu vị hạt dẻ rang và caramel béo ngậy. Thích hợp pha phin truyền thống.',
    price: 220000,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
    coffeeType: 'Robusta',
    roastLevel: 'Medium',
    category: mockCategories[0],
    inStock: true,
    rating: 4.7,
    reviewsCount: 32,
  },
  {
    _id: 'prod4',
    name: 'Premium House Blend No.1',
    slug: 'premium-house-blend-no1',
    description: 'Sự kết hợp hoàn hảo giữa Arabica Cầu Đất chua thanh và Robusta Honey Gia Lai đầm ấm. Cân bằng tuyệt đối cho tách Espresso hàng ngày.',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600',
    coffeeType: 'Blend',
    roastLevel: 'Medium',
    category: mockCategories[1],
    inStock: true,
    rating: 4.9,
    reviewsCount: 45,
  },
  {
    _id: 'prod5',
    name: 'Dark Roast Blend Espresso',
    slug: 'dark-roast-blend-espresso',
    description: 'Đặc trưng rang đậm cho gu cà phê mạnh mẽ. Hương vị sô-cô-la đen, hạt rang cháy nhẹ, hậu vị sâu lắng, hoàn hảo để pha Latte/Cappuccino béo ngậy.',
    price: 260000,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600',
    coffeeType: 'Blend',
    roastLevel: 'Dark',
    category: mockCategories[1],
    inStock: true,
    rating: 4.6,
    reviewsCount: 29,
  },
];

export const mockPosts = [
  {
    _id: 'post1',
    title: 'Cẩm Nang Pha V60 Pour Over Cho Người Mới Bắt Đầu',
    slug: 'cam-nang-pha-v60-pour-over-cho-nguoi-moi-bat-dau',
    excerpt: 'Học cách pha V60 Pour Over chuẩn vị cà phê specialty tại nhà. Hướng dẫn chi tiết về tỷ lệ vàng, nhiệt độ nước và kỹ thuật rót nước đỉnh cao.',
    content: `
      <h2>Tại sao phễu lọc V60 Pour Over được yêu thích đến thế?</h2>
      <p>Phương pháp pha chế bằng phễu lọc <strong>V60 Pour Over</strong> luôn là lựa chọn hàng đầu của các barista chuyên nghiệp khi muốn khai thác hết những nốt hương hoa quả tinh khiết nhất của hạt cà phê Specialty. Thiết kế phễu hình nón góc 60 độ với các đường gân xoắn ốc độc đáo giúp điều phối dòng chảy nước tối ưu, mang lại một tách cà phê có <em>body sạch, chua thanh sáng và hậu ngọt thanh dịu</em>.</p>
      
      <h2>Dụng cụ cần chuẩn bị để pha chế chuẩn Barista</h2>
      <ul>
        <li><strong>Phễu lọc Hario V60</strong> bằng sứ hoặc nhựa chịu nhiệt chất lượng cao.</li>
        <li>Giấy lọc Hario V60 tương ứng loại xịn đã được tráng nước sôi để khử mùi giấy.</li>
        <li>Ấm rót nước chuyên dụng cổ ngỗng giúp kiểm soát dòng nước chảy đều đặn.</li>
        <li>Hạt cà phê Specialty chất lượng cao (ưu tiên dòng Arabica sơ chế ướt hoặc honey).</li>
        <li>Cân điện tử đo gram chính xác kèm bộ đếm thời gian pha chế.</li>
      </ul>

      <h2>Quy trình pha chế chi tiết theo tỷ lệ vàng 1:15</h2>
      <p>Chúng tôi khuyên dùng tỷ lệ pha chế tiêu chuẩn <strong>1:15</strong> (15g cà phê hạt xay thô vừa tương ứng với 225g nước nóng ở nhiệt độ 92°C - 94°C). Thời gian chiết xuất lý tưởng nhất nên nằm trong khoảng 2 phút 30 giây đến 3 phút.</p>
      <ol>
        <li><strong>Bước 1: Ủ cà phê (Blooming):</strong> Rót khoảng 45g nước nóng ban đầu để làm ướt đều bột cà phê. Chờ 30 - 40 giây cho khí CO2 thoát hết ra ngoài giúp hương vị chiết xuất sau đó mượt mà hơn.</li>
        <li><strong>Bước 2: Rót nước lần thứ nhất:</strong> Rót từ từ thêm 100g nước nóng theo vòng tròn đồng tâm từ trong ra ngoài để hòa quyện bột cà phê. Chờ dòng chảy rút bớt.</li>
        <li><strong>Bước 3: Rót nước lần cuối:</strong> Rót nốt 80g nước nóng còn lại vào trung tâm phễu lọc để hoàn tất quy trình chiết xuất tách cà phê hoàn hảo.</li>
      </ol>
      <p><strong>Lời khuyên hữu ích:</strong> Hãy thưởng thức tách cà phê Pour Over khi nhiệt độ giảm xuống khoảng 60°C để cảm nhận rõ nhất vị chua ngọt trái cây đa dạng của hạt Single Origin.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800',
    author: 'Nguyễn Specialty',
    category: mockCategories[2],
    isPublished: true,
    createdAt: '2026-07-19T06:00:00Z',
  },
  {
    _id: 'post2',
    title: 'Bí Quyết Chọn Hạt Cà Phê Robusta Honey Gia Lai Đậm Đà',
    slug: 'bi-quyet-chon-hat-ca-phe-robusta-honey-gia-lai-dam-da',
    excerpt: 'Khám phá hương vị Robusta Honey Gia Lai chế biến mật ong cao cấp. Bí quyết chọn hạt chuẩn giúp pha phin truyền thống thơm ngon đậm đà khó cưỡng.',
    content: `
      <h2>Cà phê Robusta Honey Gia Lai là gì?</h2>
      <p>Cà phê hạt <strong>Robusta Honey Gia Lai</strong> là sản phẩm đột phá đại diện cho hạt cà phê chất lượng cao của Việt Nam. Khác với phương pháp sơ chế khô thông thường, chế biến mật ong (Honey Process) giữ lại một phần lớp chất nhầy ngọt bao quanh hạt thóc trong quá trình phơi phóng, tạo ra <em>vị ngọt sâu chocolate, caramel béo ngậy và giảm độ đắng gắt truyền thống</em>.</p>
      
      <h2>Lợi ích tuyệt vời của quy trình sơ chế Honey đối với hạt Robusta</h2>
      <p>Nhờ lượng đường tự nhiên được thẩm thấu sâu trong quá trình lên men tự nhiên, Robusta Honey sở hữu độ ngọt đậm đà vượt trội cùng body dày dặn thích hợp cho cả pha phin lẫn Espresso.</p>
      <ul>
        <li><strong>Độ chua:</strong> Chua nhẹ tự nhiên, mượt mà tinh tế.</li>
        <li><strong>Hương thơm:</strong> Mùi hạt dẻ rang cháy, sô-cô-la đen hòa quyện mật ong rừng.</li>
        <li><strong>Hậu vị:</strong> Ngọt hậu kéo dài, không để lại cảm giác đắng nghét ở cổ họng.</li>
      </ul>

      <h2>Cách lựa chọn mua hạt cà phê đạt tiêu chuẩn cao</h2>
      <p>Hãy chú ý các tiêu chí sau khi lựa chọn mua hạt cà phê để đảm bảo chất lượng tách cà phê tốt nhất:</p>
      <ol>
        <li>Chọn hạt cà phê có ngày rang mới trong vòng 1 tháng trở lại để giữ trọn vẹn hương khí thơm nồng.</li>
        <li>Hạt rang đồng đều màu sắc trung bình hoặc rang đậm vừa (Medium/Medium-Dark), không bị vụn vỡ hay lẫn nhiều tạp chất.</li>
        <li>Bao bì đóng gói có van một chiều thoát khí CO2 bảo vệ hạt cà phê khỏi oxy hóa mất mùi.</li>
      </ol>
      <p><strong>Lời khuyên từ chuyên gia:</strong> Robusta Honey Gia Lai phối trộn cùng 30% Arabica Cầu Đất sẽ tạo ra tách Espresso cực kỳ cân bằng và thơm quyến rũ.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    author: 'Trần PourOver',
    category: mockCategories[2],
    isPublished: true,
    createdAt: '2026-07-19T05:30:00Z',
  },
  {
    _id: 'post3',
    title: 'Nghệ Thuật Thưởng Thức Cà Phê Specialty Single Origin',
    slug: 'nghe-thuat-thuong-thuc-ca-phe-specialty-single-origin',
    excerpt: 'Trải nghiệm văn hóa cà phê specialty single origin đích thực. Khám phá hương vị bản nguyên đại diện cho từng vùng trồng nổi tiếng trên thế giới.',
    content: `
      <h2>Cà phê Single Origin đại diện cho bản sắc vùng trồng</h2>
      <p>Khái niệm <strong>Single Origin</strong> ám chỉ loại cà phê đơn nguồn gốc, được thu hoạch từ một nông hộ hoặc một vùng trồng địa lý duy nhất (như Yirgacheffe ở Ethiopia hay Nyeri ở Kenya). Việc thưởng thức loại cà phê này giống như một chuyến du lịch vị giác đưa bạn khám phá đặc điểm thổ nhưỡng, khí hậu và nguồn nước bản địa.</p>

      <h2>Đặc trưng hương vị độc bản của các vùng trồng nổi tiếng</h2>
      <p>Mỗi vùng trồng cà phê Specialty trên bản đồ thế giới đều mang một cá tính hương vị riêng biệt độc đáo:</p>
      <ul>
        <li><strong>Ethiopia (Đông Phi):</strong> Nổi bật với hương hoa nhài thanh lịch, vị chua chanh vàng sáng cùng hậu vị trà đào thanh mát.</li>
        <li><strong>Kenya (Đông Phi):</strong> Đậm vị quả mọng berry, lý chua đen ngọt lịm với thể chất dày dặn.</li>
        <li><strong>Colombia (Nam Mỹ):</strong> Hương vị cân bằng tuyệt vời của hạt phỉ rang, caramel và táo đỏ ngọt dịu.</li>
      </ul>

      <h2>Quy tắc vàng để thưởng thức trọn vẹn hương vị nguyên bản</h2>
      <p>Để đánh giá đầy đủ các nốt hương vị phong phú của hạt Single Origin, hãy uống cà phê nguyên chất **không đường và không sữa**. Sử dụng các phương pháp pha giấy lọc như V60 hoặc Kalita Wave để giữ cho tách cà phê có màu hổ phách trong trẻo và hương thơm lan tỏa tự nhiên nhất.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    author: 'Nguyễn Specialty',
    category: mockCategories[2],
    isPublished: true,
    createdAt: '2026-07-19T05:00:00Z',
  },
  {
    _id: 'post4',
    title: 'So Sánh Cà Phê Arabica Và Robusta: Khác Biệt Hương Vị',
    slug: 'so-sanh-ca-phe-arabica-va-robusta-khac-biet-huong-vi',
    excerpt: 'Phân tích điểm khác biệt giữa cà phê Arabica và Robusta về hương vị, lượng caffeine và điều kiện canh tác giúp bạn lựa chọn gu cà phê hoàn hảo.',
    content: `
      <h2>Hai giống cà phê thống trị thị trường thế giới</h2>
      <p>Mặc dù cùng thuộc họ thiến thảo, giống cà phê <strong>Arabica</strong> và <strong>Robusta</strong> sở hữu những đặc tính sinh học và hương vị hoàn toàn trái ngược nhau. Việc thấu hiểu sự khác biệt này giúp bạn định hình chính xác gu thưởng thức cà phê hàng ngày của bản thân.</p>

      <h2>Bảng so sánh chi tiết các chỉ số cốt lõi</h2>
      <p>Dưới đây là so sánh trực quan về các yếu tố cấu thành hương vị của hai loại hạt:</p>
      <ul>
        <li><strong>Hàm lượng Caffeine:</strong> Hạt Robusta chứa lượng caffeine cao gấp đôi Arabica (2.2% - 2.7% so với 1.2% - 1.5%), mang lại tác dụng tỉnh táo mạnh mẽ hơn.</li>
        <li><strong>Độ ngọt và Axit chua:</strong> Arabica chứa lượng đường và chất béo cao hơn 60%, tạo nên vị chua thanh sáng và hậu vị ngọt sâu phong phú. Robusta đậm chất đắng tự nhiên với độ axit cực thấp.</li>
        <li><strong>Hương vị đặc trưng:</strong> Arabica thoảng hương hoa, quả mọng và sô-cô-la nhẹ. Robusta đậm đà vị ngũ cốc, gỗ mục và hạt rang đầm ấm.</li>
      </ul>

      <h2>Lựa chọn gu cà phê nào phù hợp cho bạn?</h2>
      <p>Nếu bạn thích một tách cà phê thanh nhẹ, thơm nồng và chua dịu trái cây, hạt Arabica là lựa chọn lý tưởng. Ngược lại, nếu bạn là tín đồ của gu cà phê truyền thống đậm đà, đắng đậm và thích kết hợp sữa đặc béo ngậy, Robusta chính là chân ái của bạn.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    author: 'Trần PourOver',
    category: mockCategories[2],
    isPublished: true,
    createdAt: '2026-07-19T04:30:00Z',
  },
  {
    _id: 'post5',
    title: 'Hướng Dẫn Cách Chọn Máy Xay Cà Phê Phù Hợp Cho Gia Đình',
    slug: 'huong-dan-cach-chon-may-xay-ca-phe-phu-hop-cho-gia-dinh',
    excerpt: 'Máy xay cà phê là chìa khóa quyết định hương vị tách cà phê hàng ngày. Hướng dẫn chọn máy xay đĩa phẳng, đĩa nón chuẩn xác cho gia đình bạn.',
    content: `
      <h2>Tầm quan trọng hàng đầu của máy xay cà phê</h2>
      <p>Cà phê ngon nhất khi được xay ngay trước lúc pha chế. Do đó, sở hữu một chiếc <strong>máy xay cà phê</strong> chất lượng là khoản đầu tư quan trọng nhất quyết định hương vị tách cà phê gia đình của bạn, thậm chí còn quan trọng hơn cả chiếc máy pha đắt tiền.</p>

      <h2>Các tiêu chuẩn lựa chọn máy xay đạt chuẩn cao</h2>
      <p>Khi chọn mua máy xay, hãy tránh xa các dòng máy dùng lưỡi dao chém (blade grinder) vì chúng làm hạt cà phê bị vỡ vụn không đồng đều và sinh nhiệt làm khét bột cà phê. Thay vào đó, hãy chọn máy dùng đĩa xay (burr grinder):</p>
      <ul>
        <li><strong>Đĩa xay nón (Conical Burr):</strong> Tạo ra bột xay đều, ít sinh nhiệt, giữ trọn vẹn hương khí cà phê specialty thanh nhẹ.</li>
        <li><strong>Đĩa xay phẳng (Flat Burr):</strong> Phù hợp cho pha chế Espresso cần độ mịn hoàn hảo tuyệt đối và chiết xuất đồng đều.</li>
      </ul>

      <h2>Kích thước hạt xay phù hợp cho các phương pháp pha chế</h2>
      <p>Mỗi phương pháp pha đòi hỏi một kích thước hạt xay riêng biệt để tránh tình trạng chiết xuất thiếu hoặc quá mức:</p>
      <ol>
        <li>Xay thô (Coarse): Thích hợp cho French Press, Cold Brew.</li>
        <li>Xay thô vừa (Medium): Thích hợp cho phễu lọc V60, Chemex.</li>
        <li>Xay mịn (Fine): Phù hợp hoàn hảo cho pha phin truyền thống và máy pha Espresso chuyên nghiệp.</li>
      </ol>
    `,
    coverImage: 'https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&q=80&w=800',
    author: 'Nguyễn Specialty',
    category: mockCategories[2],
    isPublished: true,
    createdAt: '2026-07-19T04:00:00Z',
  },
  {
    _id: 'post6',
    title: 'Cold Brew Là Gì? Hướng Dẫn Cách Pha Cà Phê Ủ Lạnh Tại Nhà',
    slug: 'cold-brew-la-gi-huong-dan-cach-pha-ca-phe-u-lanh-tai-nha',
    excerpt: 'Học cách làm Cold Brew cà phê ủ lạnh thanh mát, ít chua ít đắng cực kỳ dễ pha chế tại nhà. Hướng dẫn chi tiết tỷ lệ ủ lạnh hoàn hảo nhất.',
    content: `
      <h2>Xu hướng thưởng thức cà phê ủ lạnh thanh mát</h2>
      <p>Cà phê ủ lạnh <strong>Cold Brew</strong> không phải là cà phê đá thông thường. Đây là phương pháp chiết xuất cà phê hoàn toàn bằng nước lạnh trong thời gian dài từ 16 - 24 tiếng. Quá trình chiết xuất chậm ở nhiệt độ thấp giúp giữ lại độ ngọt tự nhiên của cà phê đồng thời giảm tới 60% lượng axit chua và chất đắng có hại cho dạ dày.</p>

      <h2>Công thức pha chế Cold Brew cam chua ngọt thanh dịu</h2>
      <p>Để tự pha chế bình Cold Brew ngon chuẩn vị tại nhà, bạn thực hiện theo công thức sau:</p>
      <ul>
        <li><strong>Tỷ lệ pha chế khuyến nghị:</strong> Tỷ lệ 1:10 (50g cà phê xay thô vừa tương ứng với 500ml nước lọc mát lạnh).</li>
        <li><strong>Thời gian ủ lý tưởng:</strong> Ủ kín trong ngăn mát tủ lạnh từ 16 đến 18 tiếng.</li>
        <li><strong>Lọc bã:</strong> Dùng giấy lọc hoặc phễu lọc lưới để lọc sạch bã cà phê sau khi ủ. Thêm lát cam vàng tươi để tăng hương vị cam sả thư thái.</li>
      </ul>

      <h2>Cách bảo quản và kết hợp hương vị độc đáo</h2>
      <p>Nước cốt Cold Brew sau khi lọc bã có thể bảo quản kín trong tủ lạnh dùng dần trong vòng 7 - 10 ngày. Bạn có thể thưởng thức nguyên chất, kết hợp với nước tonic mát lạnh hoặc sữa tươi không đường tạo nên thức uống giải khát tuyệt đỉnh ngày hè.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800',
    author: 'Trần PourOver',
    category: mockCategories[2],
    isPublished: true,
    createdAt: '2026-07-19T03:30:00Z',
  },
  {
    _id: 'post7',
    title: 'Espresso Là Gì? Cách Cân Chỉnh Espresso Đậm Đà Đạt Chuẩn',
    slug: 'espresso-la-gi-cach-can-chinh-espresso-dam-da-dat-chuan',
    excerpt: 'Tìm hiểu Espresso là gì và hướng dẫn các bước cân chỉnh Espresso chuẩn barista chuyên nghiệp. Đạt lớp crema dày, hương vị cân bằng.',
    content: `
      <h2>Espresso - Linh hồn của văn hóa cà phê hiện đại</h2>
      <p>Một ly <strong>Espresso</strong> chuẩn mực là nền tảng cốt lõi của hầu hết các thức uống cà phê Ý nổi tiếng như Latte, Cappuccino, Flat White hay Americano. Chiết xuất dưới áp suất nước cực cao (9 bar) và thời gian ngắn mang lại một tách cà phê siêu đậm đặc với lớp bọt xốp dày màu cánh gián quyến rũ gọi là Crema.</p>

      <h2>Các thông số kỹ thuật vàng cần kiểm soát chặt chẽ</h2>
      <p>Để pha chế một shot Espresso cân bằng hương vị, Barista cần ghi nhớ công thức cân chỉnh vàng sau:</p>
      <ul>
        <li><strong>Lượng bột đầu vào (Dose):</strong> 18g - 20g bột cà phê xay mịn chuyên dụng.</li>
        <li><strong>Lượng nước đầu ra (Yield):</strong> 36g - 40g nước cốt Espresso (Tỷ lệ chiết xuất 1:2).</li>
        <li><strong>Thời gian chiết xuất (Time):</strong> Dao động từ 25 đến 30 giây tính từ lúc bấm nút khởi động.</li>
        <li><strong>Nhiệt độ nước:</strong> 91°C - 93°C đảm bảo hương vị sô-cô-la caramel ngọt ngào không bị khét đắng.</li>
      </ul>

      <h2>Nhận biết ly Espresso hoàn hảo qua lớp bọt Crema</h2>
      <p>Một ly Espresso đạt chuẩn phải có lớp bọt Crema dày ít nhất 2mm, mịn màng và có những vệt vằn hổ hổ phách đặc trưng. Vị cà phê phải cân bằng ngọt đắng và chua dịu, không bị đắng chát khó chịu ở hậu vị.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    author: 'Nguyễn Specialty',
    category: mockCategories[2],
    isPublished: true,
    createdAt: '2026-07-19T03:00:00Z',
  },
  {
    _id: 'post8',
    title: 'Tác Dụng Của Cà Phê Đối Với Sức Khỏe Bạn Nên Biết',
    slug: 'tac-dung-cua-ca-phe-doi-voi-suc-khoe-ban-nen-biet',
    excerpt: 'Cà phê nguyên chất mang lại nhiều lợi ích bất ngờ cho não bộ và tim mạch. Khám phá tác dụng sức khỏe và liều lượng sử dụng khoa học mỗi ngày.',
    content: `
      <h2>Cà phê nguyên chất: Siêu thực phẩm giàu chất chống oxy hóa</h2>
      <p>Nhiều nghiên cứu khoa học hiện đại đã chứng minh uống <strong>cà phê nguyên chất</strong> với liều lượng hợp lý mang lại những tác động tích cực to lớn cho cả thể chất lẫn tinh thần của con người nhờ lượng hợp chất chống oxy hóa tự nhiên vô cùng dồi dào.</p>

      <h2>Top 3 lợi ích nổi bật nhất đã được chứng minh khoa học</h2>
      <p>Dưới đây là những tác dụng tuyệt vời của thói quen uống cà phê khoa học:</p>
      <ul>
        <li><strong>Tăng cường trí nhớ và tập trung:</strong> Caffeine kích thích giải phóng dopamine và norepinephrine, cải thiện khả năng ghi nhớ ngắn hạn, phản xạ nhanh và sự tỉnh táo tinh thần.</li>
        <li><strong>Hỗ trợ đốt cháy chất béo thừa:</strong> Caffeine thúc đẩy quá trình trao đổi chất tăng từ 3% - 11%, kích thích chuyển hóa mỡ thừa thành năng lượng hoạt động thể thao tốt hơn.</li>
        <li><strong>Bảo vệ tim mạch lâu dài:</strong> Uống 2 - 3 tách cà phê mỗi ngày giảm thiểu nguy cơ đột quỵ và các bệnh liên quan đến hệ tim mạch.</li>
      </ul>

      <h2>Liều lượng sử dụng thông minh và lưu ý sức khỏe</h2>
      <p>Để tránh các tác dụng phụ tiêu cực như mất ngủ hay nhịp tim nhanh, người trưởng thành khỏe mạnh chỉ nên tiêu thụ tối đa 400mg caffeine mỗi ngày (tương đương khoảng 3 - 4 tách cà phê phin hoặc Espresso). Nên uống cà phê trước 3 giờ chiều để không ảnh hưởng đến giấc ngủ ban đêm.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=800',
    author: 'Trần PourOver',
    category: mockCategories[2],
    isPublished: true,
    createdAt: '2026-07-19T02:30:00Z',
  },
  {
    _id: 'post9',
    title: 'Tìm Hiểu Về Quy Trình Sơ Chế Cà Phê Khô (Natural Process)',
    slug: 'tim-hieu-ve-quy-trinh-so-che-ca-phe-kho-natural-process',
    excerpt: 'Quy trình sơ chế khô tự nhiên (Natural) tạo ra những nốt hương trái cây ngọt lịm đặc trưng cho hạt cà phê. Khám phá quy trình chế biến cổ xưa này.',
    content: `
      <h2>Phương pháp sơ chế cổ xưa nhất hành tinh</h2>
      <p>Sơ chế khô tự nhiên <strong>Natural Process</strong> là phương pháp lâu đời và đơn giản nhất trong lịch sử ngành cà phê. Toàn bộ quả cà phê chín mọng sau khi thu hoạch sẽ được phơi nắng nguyên quả trên các giàn cao phơi cho đến khi lớp vỏ se lại đen bóng, tạo điều kiện cho hạt nhân bên trong hấp thụ trọn vẹn vị ngọt mật ngọt của thịt quả.</p>

      <h2>Đặc trưng hương vị đậm vị trái cây chín nhiệt đới</h2>
      <p>Cà phê sơ chế khô thường mang những nốt hương vị vô cùng phong phú và cá tính mạnh mẽ:</p>
      <ul>
        <li><strong>Thể chất (Body):</strong> Cực kỳ dày dặn, đầm ấm và béo ngậy.</li>
        <li><strong>Hương trái cây:</strong> Rõ nét vị của dâu tây chín, việt quất, xoài chín, mít mật hoặc thoảng nhẹ mùi rượu vang lên men hảo hạng.</li>
        <li><strong>Độ ngọt:</strong> Cực kỳ cao, hậu vị ngọt lịm kéo dài sảng khoái.</li>
      </ul>

      <h2>Yêu cầu kỹ thuật phơi phóng vô cùng khắt khe</h2>
      <p>Để hạt cà phê Natural không bị ẩm mốc hay lên men quá đà hỏng hương vị, Barista và nông dân phải đảo quả cà phê liên tục 30 phút một lần trên giàn phơi dưới ánh nắng mặt trời và che chắn cẩn thận vào ban đêm tránh sương muối.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800',
    author: 'Nguyễn Specialty',
    category: mockCategories[2],
    isPublished: true,
    createdAt: '2026-07-19T02:00:00Z',
  },
  {
    _id: 'post10',
    title: '5 Lỗi Thường Gặp Khi Pha Cà Phê Bằng Phễu Lọc V60',
    slug: '5-loi-thuong-gap-khi-pha-ca-phe-bang-pheu-loc-v60',
    excerpt: 'Tránh các lỗi cơ bản làm hỏng tách cà phê V60 Pour Over của bạn. Barista chuyên nghiệp chỉ ra lỗi nhiệt độ nước, hạt xay và kỹ thuật rót nước.',
    content: `
      <h2>Lỗi nhỏ làm thay đổi lớn hương vị tách Pour Over</h2>
      <p>Pha chế giấy lọc V60 là một bộ môn nghệ thuật tinh tế. Chỉ một sai lệch nhỏ trong nhiệt độ nước, kích thước xay hạt hay cách rót ấm cổ ngỗng cũng có thể khiến tách cà phê hảo hạng của bạn trở nên đắng ngắt hoặc nhạt nhẽo vô vị.</p>

      <h2>Chi tiết 3 lỗi phổ biến nhất bạn cần khắc phục ngay</h2>
      <p>Hãy cùng điểm qua các lỗi Barista khuyên bạn nên tránh khi thực hành tại nhà:</p>
      <ul>
        <li><strong>Lỗi 1: Xay hạt cà phê quá mịn hoặc quá thô:</strong> Xay quá mịn làm tắc dòng chảy gây đắng khét (Over-extraction). Xay quá thô nước chảy qua quá nhanh làm cà phê nhạt nhẽo, chua loãng (Under-extraction).</li>
        <li><strong>Lỗi 2: Sử dụng nước sôi sùng sục 100°C:</strong> Nhiệt độ quá cao sẽ làm cháy hạt cà phê bột, sinh ra chất đắng chát. Hãy dùng nước lọc đạt chuẩn ở 92°C - 94°C.</li>
        <li><strong>Lỗi 3: Không tráng nước sôi cho giấy lọc trước khi pha:</strong> Việc này làm bột giấy ngấm thẳng mùi gỗ giấy khó chịu vào tách cà phê thơm ngon của bạn.</li>
      </ul>

      <h2>Hãy luôn ghi chép thông số pha chế hàng ngày</h2>
      <p>Cách duy nhất để tiến bộ là hãy ghi lại tỷ lệ hạt xay, nhiệt độ và thời gian pha chế mỗi ngày để tự cân chỉnh và tìm ra hương vị hoàn hảo nhất phù hợp gu của bạn.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=800',
    author: 'Trần PourOver',
    category: mockCategories[2],
    isPublished: true,
    createdAt: '2026-07-19T01:30:00Z',
  },
];
