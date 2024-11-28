interface Post {
  id: number
  slug: string
  modifiedAt?: string
  created_at: string // Ez a mező most kötelező
}

export default defineSitemapEventHandler(async (e) => {
  try {
    const response = await fetch(
      'https://www.symbolgym.com/blogapi/public/json-posts'
    )
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }
    const posts: Post[] = await response.json()

    return posts.map((post: Post) => {
      return {
        loc: `/posts/${post.slug}`,
        // Használjuk a modifiedAt-et, vagy fallback a created_at mezőre
        lastmod: post.modifiedAt 
          ? new Date(post.modifiedAt).toISOString() 
          : new Date(post.created_at).toISOString(),
      }
    })
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error)
    return []
  }
})
