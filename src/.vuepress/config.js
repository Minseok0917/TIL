const sidebar = require('./sidebar.js');
const path = require('path');
const { description } = require('../../package')


module.exports = {
  title: 'Vuepress Docs Boilerplate',
  base:'/TIL/',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig:{
    displayAllHeaders:true,
    sidebar
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-smooth-scroll',
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
    ['vuepress-plugin-container', {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示'
        }
      }],
      ['vuepress-plugin-container', {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING',
          '/zh/': '注意'
        }
      }],
      ['vuepress-plugin-container', {
        type: 'danger',
        defaultTitle: {
          '/': 'DANGER',
          '/zh/': '警告'
        }
      }],
      ['vuepress-plugin-container', {
        type: 'details',
        before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
        after: () => '</details>\n'
      }],
  ],
  configureWebpack:{
    resolve:{
      alias:{
        '@image': path.join(__dirname,'./public')
      }
    }
  }
}
