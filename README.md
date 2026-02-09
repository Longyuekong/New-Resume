# 简历项目 - 重构说明文档

## 项目概述

这是一个基于 **Vite + Vue3 + 纯CSS** 开发的响应式简历展示项目，已完成从 Sass 到纯 CSS 的迁移，并新增了简历配置功能。

## 技术栈

- **框架**: Vue 3.3.4 (Composition API + Setup 语法糖)
- **构建工具**: Vite 4.4.5
- **路由**: Vue Router 4.2.4
- **样式**: 纯 CSS (CSS 自定义属性 + 媒体查询)
- **状态管理**: Composition API + localStorage

## 项目结构

```
New-Resume/
├── .git/                    # Git版本管理（已保留）
├── .gitignore              # Git忽略配置（已保留）
├── docs/
│   └── 改造说明.md         # 原始改造需求文档
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── vue.svg
│   ├── components/
│   │   └── Experience.vue  # 经历组件
│   ├── router/
│   │   └── index.js        # 路由配置（新增）
│   ├── style/
│   │   ├── index.css       # 主样式文件（替换原 index.scss）
│   │   └── config.css      # 配置页样式（新增）
│   ├── views/
│   │   ├── Resume.vue      # 简历主页面（新增）
│   │   └── Config.vue      # 配置页面（新增）
│   ├── App.vue             # 根组件（已重构）
│   └── main.js             # 入口文件（已更新）
├── index.html              # HTML入口（已添加移动端viewport）
├── package.json            # 依赖配置（已移除sass）
├── vite.config.js          # Vite配置
├── CNAME
└── README.md               # 本文档
```

## 重构完成内容

### ✅ 任务1：Sass/SCSS 替换为纯 CSS

#### 1.1 变量转换
- **Sass变量** → **CSS自定义属性**
  ```css
  /* 原 Sass */
  $theme-color: #00b38a;
  
  /* 现 CSS */
  :root {
    --theme-color: #00b38a;
  }
  ```

#### 1.2 嵌套样式解嵌套
- 所有 Sass 嵌套选择器已转换为标准 CSS 选择器
- 采用 BEM 命名规范，提高可读性

#### 1.3 移动端适配
- **响应式断点**: 768px（移动端/PC端分界）
- **单位策略**:
  - 使用 `clamp()` 实现流式字体大小
  - 使用 `rem` 作为主要间距单位
  - 使用 `%` 和 `vw` 实现弹性布局
- **关键媒体查询**:
  ```css
  @media screen and (max-width: 768px) {
    /* 移动端样式 */
  }
  ```

#### 1.4 移除的 Sass 功能
- ❌ `@import` → 合并到单一 CSS 文件
- ❌ `@mixin` → 提取为 CSS 工具类（`.flex-center` 等）
- ❌ 嵌套语法 → 标准 CSS 选择器

### ✅ 任务2：新增简历配置页面

#### 2.1 页面功能
- **路由**: `/config` → Config.vue
- **布局**:
  - **PC端**: 左侧配置表单（40%）+ 右侧实时预览（60%）
  - **移动端**: 上下布局（配置表单在上，预览在下）

#### 2.2 可配置项
1. **基础信息**:
   - 姓名
   - 头像URL
   - 求职意向
   - 联系电话
   - 电子邮箱

2. **样式配置**:
   - 主题色（颜色选择器）
   - 字体大小（小/中/大）
   - 简历排版（紧凑/正常/宽松）

3. **内容开关**:
   - 显示/隐藏实习经历
   - 显示/隐藏项目经验
   - 显示/隐藏技能模块

#### 2.3 交互特性
- ✅ 实时预览（配置修改立即生效）
- ✅ localStorage 持久化存储
- ✅ 重置默认配置功能
- ✅ 保存配置功能
- ✅ 移动端按钮高度 ≥ 44px（符合触控规范）
- ✅ 表单控件高度 ≥ 40px（移动端友好）

### ✅ 全局要求

#### 3.1 Git 文件保护
- ✅ **完全保留** `.git/` 目录
- ✅ **完全保留** `.gitignore` 文件
- ✅ 未修改任何 Git 相关文件内容

#### 3.2 移动端适配基础
- ✅ 添加标准移动端 viewport:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  ```
- ✅ 采用「移动端优先」CSS 策略
- ✅ 使用 Flexbox/Grid 弹性布局
- ✅ 避免固定宽度，使用百分比和相对单位

## 安装与运行

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 构建生产版本
```bash
npm run build
```

### 4. 预览生产版本
```bash
npm run preview
```

## 页面路由

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | Resume.vue | 简历展示页面 |
| `/config` | Config.vue | 简历配置页面 |

## 移动端适配说明

### 响应式布局关键点

1. **头部区域**:
   - PC端: 横向布局，姓名和职位在同一行
   - 移动端: 纵向布局，姓名和职位分行显示

2. **内容区域**:
   - PC端: 2列网格布局（工作经历 + 项目经历）
   - 移动端: 1列布局，纵向排列

3. **配置页面**:
   - PC端: 左右分栏（配置表单 40% + 预览 60%）
   - 移动端: 上下布局（配置表单在上，预览在下）

4. **按钮和表单**:
   - 移动端按钮最小高度 44px
   - 移动端输入框最小高度 40px
   - 单选/复选框放大到 24px

### 单位转换规则

| 场景 | PC端 | 移动端 |
|------|------|--------|
| 字体大小 | 16px | clamp(14px, 2.5vw, 16px) |
| 间距 | rem | rem（自适应根字体） |
| 容器宽度 | 794px | 100% |
| 按钮高度 | 自动 | min-height: 44px |

## CSS 自定义属性

项目使用 CSS 自定义属性实现主题配置：

```css
:root {
  --theme-color: #00b38a;      /* 主题色 */
  --font-white: #fff;          /* 白色文字 */
  --font-black: rgb(29, 29, 31); /* 黑色文字 */
  --font-gray: #ededed;        /* 灰色背景 */
  --font-time: rgb(188, 188, 193); /* 时间文字颜色 */
  --base-font-size: 16px;      /* 基础字体大小 */
  --spacing-unit: 1rem;        /* 间距单位 */
}
```

可通过 JavaScript 动态修改：
```javascript
document.documentElement.style.setProperty('--theme-color', '#ff0000');
```

## 配置数据结构

localStorage 存储的配置数据格式：

```javascript
{
  name: '吴洋',                              // 姓名
  avatar: '',                                // 头像URL
  jobTitle: 'Web前端开发工程师 | 深圳',      // 求职意向
  phone: '13649506209',                      // 联系电话
  email: '627784964@qq.com',                 // 电子邮箱
  themeColor: '#00b38a',                     // 主题色
  fontSize: 'medium',                        // 字体大小: small/medium/large
  layout: 'normal',                          // 排版: compact/normal/loose
  showInternship: true,                      // 显示实习经历
  showProjects: true,                        // 显示项目经验
  showSkills: true                           // 显示技能模块
}
```

## 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ 移动端浏览器（iOS Safari, Chrome Mobile）

## 打印支持

项目支持打印为 PDF：
- 点击「生成PDF」按钮
- 使用浏览器打印功能（Ctrl+P / Cmd+P）
- 打印时自动隐藏按钮和导航元素
- 打印尺寸：A4

## 性能优化

1. **路由懒加载**: 已配置（可按需启用）
2. **CSS 优化**: 移除冗余样式，使用原生 CSS
3. **资源优化**: 图片使用外链，减少打包体积
4. **构建优化**: Vite 自动进行代码分割和 Tree Shaking

## 开发规范

1. **命名规范**: 
   - CSS 类名使用 BEM 规范
   - 变量使用驼峰命名
   
2. **代码风格**:
   - 使用 Vue 3 Composition API
   - 使用 `<script setup>` 语法糖
   - 响应式数据使用 `ref` 和 `reactive`

3. **注释规范**:
   - 关键功能添加注释
   - 复杂逻辑添加说明

## Git 文件保留确认

✅ **已确认**: 本次重构**未删除、未修改**任何 Git 相关文件，包括：
- `.git/` 目录（完整保留）
- `.gitignore` 文件（内容未变）
- 所有 Git 版本管理功能正常

## 常见问题

### Q1: 如何修改默认主题色？
A: 在 `src/style/index.css` 中修改 `--theme-color` 变量，或在配置页面中使用颜色选择器。

### Q2: 如何添加新的配置项？
A: 
1. 在 `Config.vue` 中添加表单控件
2. 在 `defaultConfig` 中添加默认值
3. 在 `Resume.vue` 中读取并应用配置

### Q3: 移动端预览不正常？
A: 确保浏览器开发者工具中启用了设备模拟，或在真实移动设备上测试。

### Q4: 配置保存后刷新丢失？
A: 检查浏览器是否禁用了 localStorage，或清除了浏览器缓存。

## 后续优化建议

1. **功能增强**:
   - 添加简历模板切换功能
   - 支持导出为 PDF 文件（使用 html2canvas + jsPDF）
   - 添加简历数据导入/导出功能（JSON 格式）

2. **性能优化**:
   - 添加图片懒加载
   - 优化大数据量渲染（虚拟列表）

3. **用户体验**:
   - 添加配置预设（多套主题方案）
   - 添加撤销/重做功能
   - 添加实时保存提示

## 联系方式

如有问题或建议，请联系：
- 邮箱: 627784964@qq.com
- 电话: 13649506209

---

**最后更新**: 2026年2月9日
**版本**: v2.0.0
**重构完成**: ✅ 所有任务已完成
