import fs from 'fs';
import path from 'path';

export interface ContentFile {
  slug: string;
  content: string;
  exists: boolean;
}

/**
 * Load markdown file from content directory
 */
export function loadContent(slug: string): ContentFile {
  // Handle root path
  const filePath = slug === '' || slug === '/' ? 'index.md' : `${slug}.md`;
  const fullPath = path.join(process.cwd(), 'public', 'content', filePath);

  try {
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      return {
        slug,
        content,
        exists: true,
      };
    }
  } catch (error) {
    console.error(`Error loading content for ${slug}:`, error);
  }

  return {
    slug,
    content: '',
    exists: false,
  };
}

/**
 * Get all markdown files in content directory
 */
export function getAllContentPaths(): string[] {
  const contentDir = path.join(process.cwd(), 'public', 'content');
  const paths: string[] = [];

  function traverse(dir: string, basePath: string = '') {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverse(filePath, path.join(basePath, file));
      } else if (file.endsWith('.md')) {
        const slug = path.join(basePath, file.replace(/\.md$/, ''));
        paths.push(slug === 'index' ? '' : slug.replace(/\\/g, '/'));
      }
    }
  }

  if (fs.existsSync(contentDir)) {
    traverse(contentDir);
  }

  return paths;
}
