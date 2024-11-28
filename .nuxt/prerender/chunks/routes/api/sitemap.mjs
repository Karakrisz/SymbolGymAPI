import { defineEventHandler } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/h3/dist/index.mjs';

const defineSitemapEventHandler = defineEventHandler;

const sitemap = defineSitemapEventHandler(async (e) => {
  try {
    const response = await fetch(
      "https://www.symbolgym.com/blogapi/public/json-posts"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await response.json();
    return posts.map((post) => {
      return {
        loc: `/posts/${post.slug}`,
        // Használjuk a modifiedAt-et, vagy fallback a created_at mezőre
        lastmod: post.modifiedAt ? new Date(post.modifiedAt).toISOString() : new Date(post.created_at).toISOString()
      };
    });
  } catch (error) {
    console.error("Error fetching posts for sitemap:", error);
    return [];
  }
});

export { sitemap as default };
//# sourceMappingURL=sitemap.mjs.map
