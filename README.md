# METATOPIA 官方网站

一个基于 Next.js 构建的现代化 GameFi 项目官网，采用 TypeScript 和 Tailwind CSS 开发。

## 🚀 项目特色

- **现代化设计**: 采用 GameFi 电竞主题，支持深色模式
- **响应式布局**: 完美适配桌面端、平板和移动设备
- **多语言支持**: 支持中文和英文切换
- **动态效果**: 粒子背景、霓虹发光效果、悬浮动画
- **SEO 优化**: 完整的元数据配置和 Open Graph 支持
- **性能优化**: 基于 Next.js 13+ App Router，支持 SSR 和 SSG

## 🛠️ 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **部署**: Vercel (推荐)

## 📦 安装和运行

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd metatopia-website
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   yarn install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   # 或
   yarn dev
   ```

4. **访问网站**
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建和部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

## 📁 项目结构

```
metatopia-website/
├── src/
│   ├── app/                 # Next.js App Router 页面
│   │   ├── about/          # 关于项目页面
│   │   ├── contact/        # 联系我们页面
│   │   ├── dao/            # DAO治理页面
│   │   ├── gamefi/         # GameFi生态页面
│   │   ├── news/           # 新闻动态页面
│   │   ├── roadmap/        # 路线图页面
│   │   ├── team/           # 团队页面
│   │   ├── whitepaper/     # 白皮书页面
│   │   ├── globals.css     # 全局样式
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 首页
│   └── components/         # 可复用组件
│       ├── Footer.tsx      # 页脚组件
│       ├── Navbar.tsx      # 导航栏组件
│       └── ParticleBackground.tsx # 粒子背景组件
├── public/                 # 静态资源
├── next.config.js         # Next.js 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖
```

## 🎨 设计系统

### 颜色主题

- **主色调**: 
  - Space Blue: `#1e3a8a`
  - Esports Purple: `#8b5cf6`
  - Neon Cyan: `#00f5ff`
  - Esports Gold: `#ffd700`

- **功能色彩**:
  - Success Green: `#10b981`
  - Warning Orange: `#f59e0b`
  - Error Red: `#ef4444`
  - Light Gray: `#9ca3af`
  - Dark Gray: `#374151`

### 组件样式

- **按钮**: 霓虹发光效果 (`.btn-neon-glow`)
- **卡片**: 电竞风格卡片 (`.card-esports`)
- **背景**: 科技网格背景 (`.tech-grid`)
- **文字**: 渐变文字效果 (`.text-gradient`)

## 📱 页面功能

### 首页 (`/`)
- Hero Section 项目介绍
- 核心特色展示
- 代币经济预览
- 最新动态
- CTA 行动号召

### 关于项目 (`/about`)
- 项目愿景和使命
- 核心特色详解
- 技术架构图
- 代币经济学

### 白皮书 (`/whitepaper`)
- 在线阅读器
- 章节导航
- 搜索功能
- 下载功能

### GameFi生态 (`/gamefi`)
- AI智能系统
- 电竞赛事体系
- NFT资产系统
- 跨链生态

### DAO治理 (`/dao`)
- 治理机制介绍
- 投票系统
- 提案列表
- 参与指南

### 路线图 (`/roadmap`)
- 发展时间线
- 里程碑展示
- 进度追踪
- 关键指标

### 团队 (`/team`)
- 核心团队成员
- 顾问团队
- 投资机构
- 团队统计

### 新闻动态 (`/news`)
- 最新资讯
- 分类筛选
- 搜索功能
- 媒体报道

### 联系我们 (`/contact`)
- 联系表单
- 多种联系方式
- 全球办公室
- 常见问题

## 🌐 多语言支持

项目支持中英文切换，语言配置在 `next.config.js` 中设置：

```javascript
const nextConfig = {
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh'
  }
}
```

## 🔧 自定义配置

### 修改主题色彩

在 `tailwind.config.js` 中修改颜色配置：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00f5ff',
        'esports-purple': '#8b5cf6',
        // 添加更多自定义颜色
      }
    }
  }
}
```

### 添加新页面

1. 在 `src/app/` 目录下创建新文件夹
2. 添加 `page.tsx` 文件
3. 在导航栏组件中添加链接

### 修改粒子效果

编辑 `src/components/ParticleBackground.tsx` 文件，调整粒子数量、颜色和动画效果。

## 📈 性能优化

- 使用 Next.js Image 组件优化图片加载
- 实现代码分割和懒加载
- 启用 Gzip 压缩
- 优化 CSS 和 JavaScript 打包
- 使用 CDN 加速静态资源

## 🚀 部署指南

### Vercel 部署 (推荐)

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台部署

```bash
# 构建项目
npm run build

# 导出静态文件 (如需要)
npm run export
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- **官网**: https://metatopia.io
- **邮箱**: hello@metatopia.io
- **Twitter**: [@metatopia](https://twitter.com/metatopia)
- **Discord**: [METATOPIA Community](https://discord.gg/metatopia)

---

**METATOPIA** - 重新定义 GameFi 的未来 🚀