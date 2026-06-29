# 凌梓菲个人简历网站

基于 Next.js 15 + React 18 + TypeScript + Tailwind CSS 构建的现代化个人简历网站。

## 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 3
- **动画**: Framer Motion
- **图标**: Lucide React
- **字体**: Inter

## 本地运行

确保已安装 Node.js 18+，然后执行：

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看网站。

## 项目结构

```
src/
├── app/
│   ├── layout.tsx          # 根布局与SEO元数据
│   ├── page.tsx            # 主页面
│   └── globals.css         # 全局样式
├── components/
│   ├── Button.tsx          # 可复用按钮组件
│   ├── Navbar.tsx          # 导航栏
│   ├── TimelineCard.tsx    # 时间线卡片
│   └── SkillTags.tsx       # 技能标签组
├── sections/
│   ├── Hero.tsx            # 首屏区域
│   ├── About.tsx           # 关于我
│   ├── Experience.tsx      # 实习经历
│   ├── Projects.tsx        # 项目经历
│   ├── Education.tsx       # 教育背景
│   ├── Skills.tsx          # 技能证书
│   └── Contact.tsx         # 联系方式
├── lib/
│   └── data.ts             # 所有简历数据
├── types/
│   └── index.ts            # TypeScript类型定义
└── public/
    ├── robots.txt          # SEO爬虫配置
    └── sitemap.xml         # 站点地图
```

## 功能特性

- 🎨 优雅简约的UI设计，灵感来自 Apple/Stripe/Vercel
- 📱 完全响应式，适配桌面、平板、手机
- ✨ Framer Motion 动画效果
- 🔍 SEO优化（元数据、Open Graph、sitemap）
- 🌐 中文界面，面向国内招聘场景
- 📦 模块化架构，易于扩展维护

## 构建部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

支持一键部署到 Vercel。

## 内容更新

所有简历内容集中在 `src/lib/data.ts` 文件中，修改后自动更新全站显示。

---

© 2026 凌梓菲