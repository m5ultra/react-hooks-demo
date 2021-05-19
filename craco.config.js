// https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-file
// carco 配置 https://blog.csdn.net/guozhicaice/article/details/109593964
// https://stackoverflow.com/questions/47846209/webpack-with-less-and-postcss-autoprefixer webpack with less and postcss autoprefixer
// craco https://cloud.tencent.com/developer/article/1749704

// 移动端适配方案 https://bubble93.github.io/2021/03/11/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%80%82%E9%85%8D%E6%96%B9%E6%A1%88/
const CracoLessPlugin = require('craco-less')
// 引入步骤2安装的依赖们
const postcssImport = require('postcss-import')
const postcssUrl = require('postcss-url')
const postcssAspectRatioMini = require('postcss-aspect-ratio-mini')
const postcssWriteSvg = require('postcss-write-svg')
const postcsscssnext = require('postcss-cssnext')
const px2ViewPort = require('postcss-px-to-viewport')
const cssnano = require('cssnano')
const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
// const px2rem = require('postcss-px2rem-exclude')
// 通过其他合适的方式判断是否为本地调试环境也一样，自由选择。
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//   .ant-btn {
//   margin-right: 10px;
//   margin-bottom: 30px;
// }

//   .ant-btn {
//   margin-right: 3.125vw;
//   margin-bottom: 9.375vw;
// }
module.exports = {
  style: {
    postcss: {
      loaderOptions: {
        ident: 'postcss',
        plugins: () => [
          px2ViewPort(
            // postcssImport({}),
            // postcssUrl({}),
            // postcssAspectRatioMini({}),
            // postcssWriteSvg({ utf8: false }),
            // postcsscssnext({}),
            // cssnano({
            //   preset: 'advanced',
            //   autoprefixer: false,
            //   'postcss-zindex': false,
            //   zindex: false
            // }),
            {

              unitToConvert: 'px', // 默认值`px`，需要转换的单位

              viewportWidth: 750, // 视窗的宽度,对应设计稿宽度

              viewportHeight: 1334, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置

              unitPrecision: 16, // 指定`px`转换为视窗单位值的小数位数

              propList: ['*'], // 转化为vw的属性列表

              viewportUnit: 'vw', // 指定需要转换成视窗单位

              fontViewportUnit: 'vw', // 字体使用的视窗单位

              selectorBlaskList: ['.ignore-'], // 指定不需要转换为视窗单位的类

              mediaQuery: false, // 允许在媒体查询中转换`px`

              minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位

              replace: true, // 是否直接更换属性值而不添加备用属性

              exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件

              landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)

              landscapeUnit: 'vw', // 横屏时使用的单位

              landscapeWidth: 1134 // 横屏时使用的视窗宽度
            }
          ),
        ],
      },
    }
  },
  webpack: {
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@common': pathResolve('src/common'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@pages': pathResolve('src/pages'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils'),
    },
    // 修改webpack配置
    configure: (webpackConfig, { env, paths }) => {
      // paths.appPath='public'
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        // ...{
        //   filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
        //   chunkFilename: 'static/js/[name].js'
        // },
        path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
        publicPath: '/'
      }
      return webpackConfig
    }
  },
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
