/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'iconify carbon:home' },
  { text: '文档', link: '/guide/intro/', icon: 'iconify material-symbols:docs' },
  { text: '水友群', link: 'https://qm.qq.com/q/x0DtYuNcTC', icon: 'iconify mingcute:qq-fill' },
])
