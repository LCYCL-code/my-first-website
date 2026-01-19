# 我的第一个网站

这是我使用HTML、CSS和JavaScript创建的第一个网站，包含首页、关于页和联系页。

## 网站功能

- 响应式设计，适配不同屏幕尺寸
- 现代简洁的UI设计
- 简单的JavaScript交互
- 联系表单功能

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)

## 如何本地运行

1. 确保你已经安装了Python
2. 在项目根目录下运行以下命令：
   ```
   python -m http.server 8000
   ```
3. 在浏览器中访问 `http://localhost:8000`

## 如何部署到GitHub Pages

### 步骤1：创建GitHub仓库

1. 登录你的GitHub账号
2. 点击右上角的「+」号，选择「New repository」
3. 填写仓库名称（例如：`my-first-website`）
4. 选择「Public」或「Private」（GitHub Pages对公开仓库是免费的）
5. 点击「Create repository」

### 步骤2：将本地仓库推送到GitHub

1. 在GitHub仓库页面，复制仓库的URL（HTTPS或SSH）
2. 在本地项目根目录下运行以下命令：
   ```bash
   # 添加远程仓库
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   
   # 推送本地代码到GitHub
   git push -u origin master
   ```

### 步骤3：配置GitHub Pages

1. 在GitHub仓库页面，点击「Settings」
2. 在左侧菜单中选择「Pages」
3. 在「Source」部分：
   - 选择「Deploy from a branch」
   - 在「Branch」下拉菜单中选择「master」或「main」
   - 选择根目录「/ (root)」
   - 点击「Save」
4. 等待几分钟，GitHub会自动部署你的网站
5. 部署完成后，你将在「GitHub Pages」部分看到你的网站访问链接，格式为：`https://你的用户名.github.io/你的仓库名/`

## 网站更新流程

1. 修改本地代码
2. 提交代码到本地仓库：
   ```bash
   git add .
   git commit -m "更新说明"
   ```
3. 推送到GitHub：
   ```bash
   git push
   ```
4. GitHub Pages会自动重新部署你的网站

## 项目结构

```
.
├── index.html          # 首页
├── about.html          # 关于页
├── contact.html        # 联系页
├── style.css           # 样式文件
├── script.js           # JavaScript文件
└── README.md           # 项目说明文档
```

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 学习资源

- [HTML教程](https://developer.mozilla.org/zh-CN/docs/Learn/HTML)
- [CSS教程](https://developer.mozilla.org/zh-CN/docs/Learn/CSS)
- [JavaScript教程](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)
- [Git教程](https://git-scm.com/docs/gittutorial)
- [GitHub Pages文档](https://docs.github.com/zh/pages)

## 许可证

MIT License
