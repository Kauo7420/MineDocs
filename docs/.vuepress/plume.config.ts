/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar.ts'

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/Kauo7420/docs' },
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    copyright: 'CC-BY-NC-4.0',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/theme/#profile
   */
  // profile: {
    // avatar: 'https://theme-plume.vuejs.press/plume.png',
    // name: 'My Vuepress Site',
    // description: 'My Vuepress Site Description',
    // circle: true,
    // location: '',
    // organization: '',
  // },

  navbar,
  collections: [ 
    {
      type: 'doc',
      dir: 'guide',
      title: '指南',
      sidebar: 'auto', // 自动生成导航结构
      sidebarCollapsed: undefined, // 折叠状态：true-折叠 false-展开
      meta: {
        tags: true, // 是否显示标签
        /**
         * 是否显示创建时间，或设置时间格式
         * - 'short': 显示为 `2022-01-01`，默认
         * - 'long': 显示为 `2022-01-01 00:00:00`
         */
        createTime: true, // boolean | 'short' | 'long'
        readingTime: true, // 是否显示阅读时间估算
        wordCount: true, // 是否显示字数统计
      },
      autoFrontmatter: {
        title: true, // 自动生成标题
        createTime: true, // 自动生成创建时间
        permalink: true, // 自动生成永久链接
        transform: (data, context, locale) => { // 自定义转换
          data.foo ??= 'foo'
          return data
        }
      }
    },
    {
      type: 'post',
      dir: 'blog',
      title: '博客',
      include: ['**/*.md'], // 包含所有 .md 文件
      exclude: ['**/*.snippet.md'] // 排除代码片段文件
      postList: true, // 启用文章列表页
      link: '/blog/', // 列表页链接
      linkPrefix: '/blog/', // 文章链接前缀
      tags: true, // 启用标签页
      tagsLink: '/blog/tags/', // 标签页链接
      tagsTheme: 'colored', // 标签主题 colored|gray|brand
      tagsText: '标签', // 标签页标题
      archives: true, // 启用归档页
      archivesLink: '/blog/archives/', // 归档页链接
      archivesText: '归档', // 归档页标题
      categories: true, // 启用分类页
      categoriesLink: '/blog/categories/', // 分类页链接
      categoriesText: '分类', // 分类页标题
      categoriesExpand: 'deep', // 分类展开层级 number|'deep'
      categoriesTransform: categories => categories, // 分类转换函数
      autoFrontmatter: {
        title: true, // 自动生成标题
        createTime: true, // 自动生成创建时间
        permalink: true, // 自动生成永久链接
        transform: (data, context, locale) => { // 自定义转换
          data.foo ??= 'foo'
          return data
        }
      },
      profile: {
          avatar: '/avatar.jpg', // 头像路径
          name: '卡沃Kauo', // 显示名称
          description: '体温36.5°，但人生恒温-7°C', // 简介文本
          circle: true, // 圆形头像
          location: '湖南', // 所在地
          organization: 'BlockVerse', // 所属组织
          layout: 'right', // 布局位置 left|right
      },
      social: [
        // 使用 iconify name
          { icon: 'github', link: 'https://github.com/Kauo7420' },
          { icon: 'bilibili ', link: 'https://space.bilibili.com/375148183' },
      ],
      meta: {
          tags: true, // 是否显示标签
          /**
           * 是否显示创建时间，或设置时间格式
           * - 'short': 显示为 `2022-01-01`，默认
           * - 'long': 显示为 `2022-01-01 00:00:00`
           */
          createTime: true, // boolean | 'short' | 'long'
          readingTime: true, // 是否显示阅读时间估算
          wordCount: true, // 是否显示字数统计
      }
    }
  ]

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/theme/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

})
