# MDVault

**Beautiful markdown viewer for GitHub Pages**

Transform your markdown files into a stunning documentation site with zero configuration. MDVault features a modern claymorphism design, dark mode, syntax highlighting, math equations, and more.

## Features

- **GitHub Flavored Markdown** - Full GFM support
- **Claymorphism Design** - Modern, tactile UI with soft shadows
- **Dark Mode** - Comfortable reading in any lighting with theme switcher
- **Syntax Highlighting** - Beautiful code highlighting for 100+ languages
- **Math Equations** - LaTeX rendering with KaTeX
- **Mermaid Diagrams** - Flowcharts, sequence diagrams, ER diagrams, and more (client-side rendering)
- **Fully Responsive** - Perfect on any device
- **Accessible** - WCAG 2.1 AA compliant
- **Zero Configuration** - Just add markdown files
- **Clean URLs** - No `.md` extensions
- **Auto Navigation** - TOC, breadcrumbs, and page titles
- **Auto Deployment** - GitHub Actions workflow for seamless deployment

## Quick Start

### 1. Clone or Use as Template

```bash
git clone https://github.com/yourusername/mdvault.git
cd mdvault
npm install
```

### 2. Add Your Content

Create markdown files in `public/content/`:

```
public/content/
├── index.md          # Your homepage
├── about.md          # About page
└── docs/
    └── guide.md      # Documentation
```

### 3. Develop Locally

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### 4. Deploy to GitHub Pages

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on push to `main`:

```bash
npm run build
git add .
git commit -m "Initial commit"
git push origin main
```

The workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site. Make sure GitHub Pages is enabled in your repository settings (Settings → Pages → Source: GitHub Actions).

## Usage

### Writing Content

Every markdown file in `public/content/` becomes a page:

- `public/content/index.md` → `/`
- `public/content/blog/my-post.md` → `/blog/my-post`
- `public/content/docs/api/intro.md` → `/docs/api/intro`

### Markdown Features

#### Headings and Navigation

The first `# H1` becomes your page title. All `## H2` through `###### H6` headings appear in the table of contents.

```markdown
# My Page Title

## Section 1
Content here...

## Section 2
More content...
```

#### Code Blocks

Use fenced code blocks with language identifiers:

\`\`\`javascript
function hello() {
  console.log('Hello, MDVault!');
}
\`\`\`

#### Math Equations

Inline math: \`$E = mc^2$\`

Block math:

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

#### Mermaid Diagrams

Create flowcharts, sequence diagrams, ER diagrams, and more. Mermaid diagrams are rendered client-side via CDN:

\`\`\`mermaid
flowchart TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
\`\`\`

Diagrams automatically adapt to your selected theme (light/dark).

#### Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

## Configuration

### Base Path

The current configuration is set for project pages (e.g., `nndkhoa.github.io/mdvault`). To customize, update `astro.config.mjs`:

For project pages (e.g., `username.github.io/mdvault`):
```javascript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/mdvault',  // Your repository name
  // ...
});
```

For user pages (e.g., `username.github.io`):
```javascript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/',
  // ...
});
```

### Customizing Themes

Edit color variables in `src/styles/global.css`:

```css
:root[data-theme='light'] {
  --bg-primary: #f8fafc;
  --accent-primary: #3b82f6;
  --text-primary: #1e293b;
  /* ... */
}

:root[data-theme='dark'] {
  --bg-primary: #1a202c;
  --accent-primary: #60a5fa;
  --text-primary: #f7fafc;
  /* ... */
}
```

The project supports light and dark themes with a theme switcher in the header.

## Project Structure

```
mdvault/
├── .github/
│   ├── prompts/                # OpenSpec prompt templates
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── openspec/                   # OpenSpec documentation and specs
│   ├── AGENTS.md              # Agent instructions
│   ├── project.md             # Project documentation
│   ├── specs/                 # Feature specifications
│   └── changes/               # Change proposals archive
├── public/
│   └── content/                # Your markdown files go here
│       ├── index.md
│       ├── blog/
│       └── docs/
├── src/
│   ├── components/             # Astro components
│   │   ├── Breadcrumbs.astro  # Breadcrumb navigation
│   │   ├── Footer.astro       # Site footer
│   │   ├── Header.astro       # Site header
│   │   ├── TableOfContents.astro  # TOC sidebar
│   │   ├── ThemeSwitcher.astro    # Theme toggle
│   │   └── icons/              # Icon components
│   ├── layouts/                # Page layouts
│   │   └── MarkdownLayout.astro
│   ├── lib/                    # Utilities
│   │   ├── content.ts         # Content loading
│   │   ├── markdown.ts        # Markdown parsing
│   │   └── toc.ts             # Table of contents generation
│   ├── pages/                  # Astro pages
│   │   ├── [...slug].astro    # Dynamic markdown pages
│   │   ├── 404.astro          # 404 error page
│   │   └── index.astro        # Homepage
│   └── styles/                 # CSS files
│       ├── claymorphism.css   # Claymorphism styles
│       └── global.css         # Global styles and themes
├── astro.config.mjs            # Astro configuration
├── package.json
├── tailwind.config.mjs         # Tailwind configuration
└── tsconfig.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Tech Stack

- **Astro** - Static site generator
- **Vite** - Build tool
- **Tailwind CSS 3** - Styling framework
- **markdown-it** - Markdown parser
- **KaTeX** - Math rendering
- **Highlight.js** - Code syntax highlighting
- **Mermaid** - Diagram rendering (via CDN)
- **@heroicons/react** - Icon library

## Browser Support

MDVault supports all modern browsers:

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this for your own projects!

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/mdvault/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/mdvault/discussions)

---

**Powered by MDVault** - Beautiful markdown, zero configuration.
