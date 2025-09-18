/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // GitHub Pages serves from a subdirectory if using project pages
  // Remove this line if using user/org pages (username.github.io)
  basePath: process.env.NODE_ENV === 'production' ? '/personal-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-website/' : '',
}

export default nextConfig
