# Hướng dẫn convert Tailwind Config sang Tailwind CSS v4 trong React Vite

Tailwind CSS v4 có cách config hoàn toàn mới, sử dụng CSS variables thay vì JavaScript config.

## Bước 1: Cài đặt Tailwind CSS v4

👉 [Tailwind Vite Installation](https://tailwindcss.com/docs/installation/using-vite)

```bash
npm install tailwindcss @tailwindcss/vite
```

## Bước 2: Cấu hình Vite

Cập nhật `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Thêm plugin này
  ],
})
```

## Bước 3: Tạo file CSS chính

Tạo hoặc cập nhật `src/index.css`:

```css
@import "tailwindcss";

/* Custom theme configuration */
@theme {
  /* Colors */
  --color-primary: #3b82f6;
  --color-secondary: #f97316;
  --color-accent: #dc2626;
  
  /* Font families */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}
```

## Bước 4: Import CSS trong main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Import file CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## Bước 5: Thêm Google Fonts vào HTML

Cập nhật `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## Cách sử dụng

Sau khi config, bạn có thể sử dụng như sau:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sử dụng custom colors */}
      <h1 className="text-primary font-heading text-4xl font-bold">
        Tiêu đề với màu primary
      </h1>
      
      <p className="text-secondary font-body text-lg">
        Đoạn văn với màu secondary
      </p>
      
      <button className="bg-accent text-white px-4 py-2 rounded">
        Button với màu accent
      </button>
    </div>
  )
}
```

## Lưu ý quan trọng

1. **Naming convention**: Trong v4, colors phải có prefix `--color-`, fonts phải có prefix `--font-`
2. **No PostCSS**: Tailwind v4 không cần PostCSS nữa khi dùng Vite plugin
3. **CSS-first**: Mọi config đều trong CSS, dễ dàng override và maintain