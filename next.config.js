/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: true,
  images: {
    domains: [
      'www.yamanashi-kankou.jp',
      'lh3.googleusercontent.com'
    
    ],
  }
}

module.exports = nextConfig
