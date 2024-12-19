/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/CareerHub' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CareerHub/' : '',
  trailingSlash: true,
}

export default nextConfig