const withAntdLess = require('next-plugin-antd-less')

const nextConfig = withAntdLess ({
   lessLoaderOptions: {},
   lessVarsFilePath: './src/styles/antd.less',
   eslint: {
      ignoreDuringBuilds: true,
      dirs: ['pages', 'components', 'lib']
   },
   env: {},
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/i,
         issuer: /\.[jt]sx?$/,
         use: ['@svgr/webpack']
      })
      return config
   }
})

module.exports = nextConfig
