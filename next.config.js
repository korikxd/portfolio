/** @type {import('next').NextConfig} */
const nextConfig = {
   eslint: {
      ignoreDuringBuilds: true,
      dirs: ['pages', 'components', 'lib']
   },
   env: {}
}

module.exports = nextConfig
