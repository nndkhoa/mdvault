import MarkdownIt from "markdown-it";
import markdownItKatex from "markdown-it-katex";
import markdownItAnchor from "markdown-it-anchor";

// Configure markdown-it with plugins
export const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: false,
})
  .use(markdownItKatex, {
    throwOnError: false,
    errorColor: "#cc0000",
  })
  .use(markdownItAnchor, {
    slugify: (s) =>
      s
        .trim()
        .toLowerCase()
        .replace(/[\s+]/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, ""),
  });

export interface MarkdownMetadata {
  title: string;
  html: string;
}

/**
 * Parse markdown content and extract metadata
 */
export function parseMarkdown(content: string): MarkdownMetadata {
  // Extract title from first H1
  const h1Match = content.match(/^#\s+(.+)$/m);
  const title = h1Match ? h1Match[1] : "Untitled";

  // Render markdown to HTML
  const html = md.render(content);

  return {
    title,
    html,
  };
}

/**
 * Extract H1 heading from markdown content
 */
export function extractTitle(markdown: string): string {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1] : "Untitled";
}
