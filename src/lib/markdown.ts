import MarkdownIt from "markdown-it";
import markdownItKatex from "markdown-it-katex";
import markdownItAnchor from "markdown-it-anchor";

// Get base URL from environment
const BASE_URL = import.meta.env.BASE_URL || "/";

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

// Store the default link renderer
const defaultLinkRender =
  md.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

// Override link renderer to add base URL to internal links
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  const token = tokens[idx];
  const hrefIndex = token.attrIndex("href");

  if (hrefIndex >= 0) {
    const href = token.attrs![hrefIndex][1];
    // Only modify internal links (starting with /) and not anchors or external links
    if (href.startsWith("/") && !href.startsWith("//")) {
      token.attrs![hrefIndex][1] = BASE_URL + href;
    }
  }

  return defaultLinkRender(tokens, idx, options, env, self);
};

// Store the default image renderer
const defaultImageRender =
  md.renderer.rules.image ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

// Override image renderer to add base URL to internal images
md.renderer.rules.image = function (tokens, idx, options, env, self) {
  const token = tokens[idx];
  const srcIndex = token.attrIndex("src");

  if (srcIndex >= 0) {
    const src = token.attrs![srcIndex][1];
    // Only modify internal images (starting with /) and not external URLs
    if (src.startsWith("/") && !src.startsWith("//")) {
      token.attrs![srcIndex][1] = BASE_URL + src;
    }
  }

  return defaultImageRender(tokens, idx, options, env, self);
};

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
