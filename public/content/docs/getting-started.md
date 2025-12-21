# Getting Started with MDVault

Welcome to MDVault! This guide will help you get your documentation site up and running.

## Installation

First, clone the repository or use it as a template:

```bash
git clone https://github.com/yourusername/mdvault.git
cd mdvault
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

## Adding Content

All your markdown files go in the `public/content/` directory.

### File Structure

Create a structure like this:

```
public/content/
├── index.md          # Homepage
├── blog/
│   └── my-post.md    # Blog post
└── docs/
    └── guide.md      # Documentation
```

### URLs

Files automatically become pages:

- `public/content/index.md` → `/`
- `public/content/blog/my-post.md` → `/blog/my-post`
- `public/content/docs/guide.md` → `/docs/guide`

## Markdown Features

### Headings and TOC

Use headings to structure your content. The first `# H1` becomes the page title, and `## H2` through `###### H6` appear in the table of contents.

### Code Blocks

Use fenced code blocks with language identifiers:

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

### Math Equations

Write inline math with single dollar signs: $a^2 + b^2 = c^2$

Or display math with double dollar signs:

$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i \xi x} d\xi
$$

### Tables

Create tables with pipe characters:

| Syntax | Description |
|--------|-------------|
| Header | Title |
| Paragraph | Text |

### Links and Images

Standard markdown links work:

[Link text](https://example.com)

![Alt text](/path/to/image.png)

## Building for Production

Build your static site:

```bash
npm run build
```

The output goes to the `dist/` directory.

## Deployment

See the [deployment guide](/docs/deployment) for instructions on deploying to GitHub Pages.

## Next Steps

- Customize the theme colors
- Add your own content
- Configure your deployment
- Share your documentation with the world!
