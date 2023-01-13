module.exports = {
  title: "Johnny Zhu's blog",
  description: "Johnny Zhu's blog",
  base: '/zhulin3141.github.io/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: "Johnny Zhu's blog", 
                items: [
                    { text: 'Github', link: 'https://github.com/zhulin3141' }
                ]
            }
        ],
        sidebar: [
            {
              title: "PHP",
              collapsable: false,
            }
          ]
    }
}