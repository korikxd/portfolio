/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess ({
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['pages', 'components', 'lib']
  },
  env: {},
})