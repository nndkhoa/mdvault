import fs from 'fs';
import path from 'path';

export interface ContentFile {
  slug: string;
  content: string;
  exists: boolean;
}

export interface CatalogEntry {
  slug: string;
  title: string;
  filename: string;
  type: 'file' | 'directory';
}

/**
 * Load markdown file from content directory
 */
export function loadContent(slug: string): ContentFile {
  // Handle root path
  const filePath = slug === '' || slug === '/' ? 'index.md' : `${slug}.md`;
  // Normalize path separators (handle both / and \)
  const normalizedPath = filePath.replace(/\\/g, '/');
  const fullPath = path.join(process.cwd(), 'public', 'content', normalizedPath);

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

/**
 * Check if a directory contains markdown files (excluding index.md) or has nested subdirectories with content
 */
function hasContent(dirPath: string): boolean {
  try {
    if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
      return false;
    }

    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      // Check for markdown files (excluding index.md)
      if (stat.isFile() && file.endsWith('.md') && file !== 'index.md') {
        return true;
      }
      
      // Check for nested subdirectories with content
      if (stat.isDirectory()) {
        const indexPath = path.join(filePath, 'index.md');
        // If subdirectory doesn't have index.md, check if it has content
        if (!fs.existsSync(indexPath)) {
          if (hasContent(filePath)) {
            return true;
          }
        }
      }
    }
    
    return false;
  } catch (error) {
    return false;
  }
}

/**
 * List markdown files and subdirectories in a directory
 */
export function listDirectoryFiles(slug: string): CatalogEntry[] {
  const dirPath = slug === '' || slug === '/' 
    ? path.join(process.cwd(), 'public', 'content')
    : path.join(process.cwd(), 'public', 'content', slug);
  
  const entries: CatalogEntry[] = [];

  try {
    if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
      return entries;
    }

    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      // Include markdown files, exclude index.md
      if (stat.isFile() && file.endsWith('.md') && file !== 'index.md') {
        const fileSlug = slug === '' || slug === '/' 
          ? file.replace(/\.md$/, '')
          : `${slug}/${file.replace(/\.md$/, '')}`;
        
        entries.push({
          slug: fileSlug.replace(/\\/g, '/'),
          title: formatTitle(file),
          filename: file,
          type: 'file',
        });
      }
      
      // Include subdirectories that have content
      if (stat.isDirectory()) {
        const indexPath = path.join(filePath, 'index.md');
        // Only include subdirectories without index.md that have content
        if (!fs.existsSync(indexPath) && hasContent(filePath)) {
          const dirSlug = slug === '' || slug === '/' 
            ? file
            : `${slug}/${file}`;
        
          entries.push({
            slug: dirSlug.replace(/\\/g, '/'),
            title: formatTitle(file),
            filename: file,
            type: 'directory',
          });
        }
      }
    }
    
    // Sort entries: directories first, then files, both alphabetically
    entries.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === 'directory' ? -1 : 1;
      }
      return a.title.localeCompare(b.title);
    });
  } catch (error) {
    console.error(`Error listing directory files for ${slug}:`, error);
  }

  return entries;
}

/**
 * Check if a path is a directory
 */
export function isDirectory(slug: string): boolean {
  const dirPath = slug === '' || slug === '/'
    ? path.join(process.cwd(), 'public', 'content')
    : path.join(process.cwd(), 'public', 'content', slug);
  
  try {
    return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
  } catch (error) {
    return false;
  }
}

/**
 * Convert filename to readable title
 */
export function formatTitle(filename: string): string {
  // Remove .md extension
  const withoutExt = filename.replace(/\.md$/, '');
  // Replace hyphens with spaces
  const withSpaces = withoutExt.replace(/-/g, ' ');
  // Apply title case (capitalize first letter of each word)
  return withSpaces
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
