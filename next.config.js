/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'lamachinecommerciale.umso.co', 'i.postimg.cc'],
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: '.',
}

module.exports = nextConfig
