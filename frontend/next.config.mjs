/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/cua-hang',
        destination: '/',
        permanent: true, // 301 Redirect
      },
    ];
  },
  allowedDevOrigins: ['192.168.56.1'],
};

export default nextConfig;
