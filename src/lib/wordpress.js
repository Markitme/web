const WP_API = process.env.NEXT_PUBLIC_WP_API;
export async function getPosts({
  page = 1,
  perPage = 12,
} = {}) {
  const response = await fetch(
    `${WP_API}/posts?page=${page}&per_page=${perPage}&_embed`,
    {
      next: {
        revalidate: 300,
        tags: ["wordpress-posts"],
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch WordPress posts: ${response.status}`
    );
  }

  const posts = await response.json();

  return {
    posts,
    total: Number(
      response.headers.get("X-WP-Total") || 0
    ),
    totalPages: Number(
      response.headers.get("X-WP-TotalPages") || 0
    ),
  };
}

export async function getPostBySlug(slug) {
  const response = await fetch(
    `${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed`,
    {
      next: {
        revalidate: 3600,
        tags: [`wordpress-post-${slug}`],
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch WordPress post: ${response.status}`
    );
  }

  const posts = await response.json();

  return posts[0] || null;
}

export function formatWordPressPost(post) {
  const featuredImage =
    post?._embedded?.["wp:featuredmedia"]?.[0];

  const categories =
    post?._embedded?.["wp:term"]?.[0] || [];

  const author =
    post?._embedded?.author?.[0];

  return {
    id: post.id,

    slug: post.slug,

    title: post.title?.rendered || "",

    excerpt: post.excerpt?.rendered || "",

    content: post.content?.rendered || "",

    date: post.date,

    modified: post.modified,

    category:
      categories[0]?.name || "Insights",

    categories,

    image:
      featuredImage?.source_url || null,

    imageAlt:
      featuredImage?.alt_text ||
      post.title?.rendered ||
      "MarkitMe",

    author:
      author?.name || "MarkitMe",

    authorAvatar:
      author?.avatar_urls?.["96"] || null,
  };
}

export function getReadingTime(content = "") {
  const text = content
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();

  const words = text
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}