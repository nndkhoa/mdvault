export interface Heading {
  level: number;
  text: string;
  id: string;
}

export interface TOCItem {
  level: number;
  text: string;
  id: string;
  children: TOCItem[];
}

/**
 * Extract headings (H2-H6) from HTML content
 */
export function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /<h([2-6])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h\1>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const id = match[2];
    // Remove any HTML tags from the heading text
    const text = match[3].replace(/<[^>]*>/g, '').trim();

    headings.push({ level, id, text });
  }

  return headings;
}

/**
 * Build nested TOC tree from flat heading list
 */
export function buildTOCTree(headings: Heading[]): TOCItem[] {
  if (headings.length === 0) return [];

  const tree: TOCItem[] = [];
  const stack: TOCItem[] = [];

  for (const heading of headings) {
    const node: TOCItem = {
      level: heading.level,
      text: heading.text,
      id: heading.id,
      children: [],
    };

    // Pop items from stack until we find a parent (lower level number)
    while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
      stack.pop();
    }

    // Add to parent's children or to root
    if (stack.length === 0) {
      tree.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }

    stack.push(node);
  }

  return tree;
}

/**
 * Generate table of contents from HTML content
 */
export function generateTOC(html: string): TOCItem[] {
  const headings = extractHeadings(html);
  return buildTOCTree(headings);
}
