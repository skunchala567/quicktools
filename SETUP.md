# QuickTools - Development Setup Guide

## ✅ Prerequisites Installed

- **Node.js**: v24.16.0
- **npm**: 11.13.0
- **Git**: 2.43.0

## 📦 Development Tools Installed

The following tools are installed in this project:

- **live-server**: Auto-reload development server
- **http-server**: Simple HTTP server
- **prettier**: Code formatter
- **eslint**: Code linter

## 🚀 Quick Start

### 1. Start Development Server

```bash
npm run dev
```

This starts `live-server` on `http://localhost:3000` with auto-reload enabled.

### 2. Alternative: Simple HTTP Server

```bash
npm run serve
```

This starts `http-server` on `http://localhost:3000`.

### 3. Format Code

```bash
npm run format
```

Formats all HTML, CSS, JS, JSON, and Markdown files.

### 4. Check Code Quality

```bash
npm run lint
```

Checks code for linting issues.

### 5. Fix Linting Issues

```bash
npm run lint:fix
```

Auto-fixes linting issues where possible.

## 📁 Project Structure

```
htmlbasics/
├── public/
│   ├── index.html (redirects to tools-access.html)
│   └── tools-access.html (main tools hub)
├── tools/
│   ├── qr-generator/
│   │   └── index.html (QR Code Generator with bulk upload)
│   ├── excel-tools/
│   │   └── excel-toolkit.html (Excel merge/split)
│   ├── image-generator/
│   │   └── image-url-generator.html (Image URL conversion)
│   ├── messaging/
│   │   └── iwhatsapp.html (WhatsApp/Instagram messaging)
│   └── certificate-generator/
│       └── index.html (Certificate generator)
├── core/
│   ├── base-theme.css (shared theme system)
│   └── base-theme.js (theme toggle logic)
├── node_modules/ (generated, in .gitignore)
├── package.json (project configuration)
├── .prettierrc (code formatter config)
├── .eslintrc.json (linter config)
└── .gitignore (git ignore rules)
```

## 🎨 Features

### QR Code Generator
- Single QR code generation
- Bulk CSV upload for mass generation
- Customizable size, colors, frames
- Download PNG or copy SVG
- 6 branded color templates
- ZIP export with HTML preview

### Excel Toolkit
- Merge multiple Excel files
- Merge sheets within files
- Split sheets by column
- Choose output format (multiple workbooks or single workbook)

### Image URL Generator
- Generate and manage image URLs
- Create image links from files
- Share and copy URLs

### iWhatsApp
- WhatsApp messaging integration
- Instagram messaging
- Direct messaging interface

### Certificate Generator
- Design and customize certificates
- Bulk certificate generation
- Upload templates
- Color and styling options

### Theme System
- Dark/Light mode toggle on all pages
- Persistent theme preference (localStorage)
- Smooth transitions
- CSS variables for easy customization

## 🔧 Configuration Files

### .prettierrc
Prettier configuration for code formatting:
- Semi-colons: enabled
- Single quotes: enabled
- Tab width: 2 spaces
- Print width: 100 characters

### .eslintrc.json
ESLint configuration for code quality:
- Browser and Node.js environments
- ES2021 features
- Recommended rules
- Unused vars warning (with underscore exception)

## 📦 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start live-server with auto-reload |
| `npm run serve` | Start simple HTTP server |
| `npm run format` | Format all code files |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Auto-fix linting issues |

## 🌐 Accessing Tools

Once the server is running:

- **Home**: http://localhost:3000/public/tools-access.html
- **QR Generator**: http://localhost:3000/tools/qr-generator/index.html
- **Excel Toolkit**: http://localhost:3000/tools/excel-tools/excel-toolkit.html
- **Image Generator**: http://localhost:3000/tools/image-generator/image-url-generator.html
- **iWhatsApp**: http://localhost:3000/tools/messaging/iwhatsapp.html
- **Certificate Generator**: http://localhost:3000/tools/certificate-generator/index.html

## 💡 Tips

1. **Auto-reload with live-server**: Any file changes automatically reload the browser
2. **Format before commit**: Run `npm run format` to ensure consistent code style
3. **Check quality**: Run `npm run lint` before pushing changes
4. **Theme testing**: Click the theme toggle (🌙) in top-right corner on any page
5. **localStorage**: Theme preference is saved in browser local storage

## 🚀 Deployment

For production deployment:

1. Ensure all files are committed to git
2. Push to GitHub: `git push origin main`
3. Deploy static files to hosting (Netlify, Vercel, GitHub Pages, etc.)
4. No build process needed - pure static HTML/CSS/JS

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
# Use different port
live-server --port=3001
```

### Node modules issues?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Prettier not formatting?
```bash
# Format specific file
npx prettier --write path/to/file.html
```

## 📝 Notes

- This is a static site - no build process needed
- All dependencies are in `node_modules/` (excluded from git)
- Configuration files are version controlled
- Each tool is self-contained with its own HTML file
- Shared theme system in `core/` folder
- All features work in both dark and light modes

## 🎯 Development Workflow

1. Start server: `npm run dev`
2. Make changes to files
3. Browser auto-reloads
4. Format code: `npm run format`
5. Check quality: `npm run lint`
6. Commit and push: `git push`

---

**Happy coding! 🚀**
