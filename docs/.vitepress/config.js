module.exports = {
    title: '卑以自牧',
    base: '/',
    description: 'Just playing around. 我的笔记博客',
    themeConfig: {
        nav: [
			{ text: '首页', link: '/' },
			{ text: '笔记', link: '/notes/' },
            {
                text: '关于',
                items: [
                    { text: '关于页面1', link: '/about/about1' },
                    { text: '关于页面2', link: '/about/about2/' }
                ]
            }
        ],
        // sideber以对象的形式配置的话每个sidebar都是独立的 如果以数组的形式配置那么侧边栏是公共的 进入其他子页面都可以看到
        sidebar: {
            '/about/': [
                {
                    text: '关于侧边栏',
                    items: [
                        { text: '关于1', link: '/about/about1/' },
                        { text: '关于2', link: '/about/about2/' }
                    ]
                },
 
            ]
        }
    }
}
