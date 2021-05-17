// https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-file
const CracoLessPlugin = require('craco-less')
// 引入步骤2安装的依赖们
//const postcssImport = require('postcss-import')
//const postcssUrl = require('postcss-url')
//const postcssAspectRatioMini = require('postcss-aspect-ratio-mini')
//const postcssWriteSvg = require('postcss-write-svg')
//const postcsscssnext = require('postcss-cssnext')
//const pxToViewPort = require('postcss-px-to-viewport')
//const cssnano = require('cssnano')
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A'
            },
            javascriptEnabled: true,
          },
        },
//        postcssLoaderOptions: {
//          ident: 'postcss',
//          plugins: [
//            require('postcss-px-to-viewport')(
//              postcssImport({}),
//              postcssUrl({}),
//              postcssAspectRatioMini({}),
//              postcssWriteSvg({ utf8: false }),
//              postcsscssnext({}),
//              pxToViewPort({
//                exclude: [/node_modules/],
//                viewportWidth: 750, // (Number) The width of the viewport.
//                viewportHeight: 1334, // (Number) The height of the viewport.
//                unitPrecision: 8, // (Number) The decimal numbers to allow the REM units to grow to.
//                viewportUnit: 'vw', // (String) Expected units.
//                selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
//                minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
//                mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
//              }),
//              cssnano({
//                preset: 'advanced',
//                autoprefixer: false,
//                'postcss-zindex': false,
//                zindex: false
//              }),
//            ),
//          ],
//        },
      },
    },
  ],
  babel: {
    plugins: [
      [
        'import',
        {
          'libraryName': 'antd',
          'libraryDirectory': 'es',
          'style': true //设置为true即是less
        }
      ]
    ]
  },
  devServer: {
    port: 7001,
  }
}
