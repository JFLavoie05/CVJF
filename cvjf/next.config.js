/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/CVJF',
  images: {
    unoptimized: true
  },
  trailingSlash: true 
}
module.exports = nextConfig;
