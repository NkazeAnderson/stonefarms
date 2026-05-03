export type FeaturedMedia = {
  source_url: string;
  alt_text: string;
  media_details?: {
    sizes?: {
      thumbnail?: {
        source_url: string;
      };
    };
  };
};

export type WordPressCategory = {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
};

export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  link: string;
  categories?: number[];
  _embedded?: {
    "wp:featuredmedia"?: FeaturedMedia[];
    "wp:term"?: WordPressCategory[][];
  };
  yoast_head_json?: {
    og_image?: [{ url: string }];
  };
};

const blogsBaseUrl = process.env.NEXT_PUBLIC_BLOGS_BASE_URL;

if (!blogsBaseUrl) {
  throw new Error("NEXT_PUBLIC_BLOGS_BASE_URL is required");
}

const WORDPRESS_API_URL = `${blogsBaseUrl}/wp-json/wp/v2`;

export async function getAllBlogPosts(): Promise<WordPressPost[]> {
  const allPosts: WordPressPost[] = [];
  let page = 1;

  while (true) {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?per_page=100&page=${page}&_embed&_fields=id,slug,date,title,excerpt,content,link,categories,_embedded,yoast_head_json`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!response.ok) {
      break;
    }

    const posts = (await response.json()) as WordPressPost[];
    if (!posts.length) {
      break;
    }

    allPosts.push(...posts);
    if (posts.length < 100) {
      break;
    }

    page += 1;
  }

  return allPosts;
}

export function decodeHtmlEntities(str: string) {
  const entities: Record<string, string> = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
    ldquo: "“",
    rdquo: "”",
    lsquo: "‘",
    rsquo: "’",
    ndash: "–",
    mdash: "—",
    hellip: "…",
  };

  return str.replace(/&(#x?[0-9A-Fa-f]+|[A-Za-z]+);?/g, (_, entity) => {
    if (entity.startsWith("#x") || entity.startsWith("#X")) {
      return String.fromCharCode(parseInt(entity.slice(2), 16));
    }

    if (entity.startsWith("#")) {
      return String.fromCharCode(parseInt(entity.slice(1), 10));
    }

    return entities[entity] ?? _;
  });
}

export function stripHtml(html: string) {
  return decodeHtmlEntities(
    html
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

export function getFeaturedImage(post: WordPressPost) {
  return (
    post.yoast_head_json?.og_image?.[0]?.url ||
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
  );
}

export function getFeaturedAlt(post: WordPressPost) {
  return (
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    stripHtml(post.title.rendered) ||
    "Blog post image"
  );
}

export function findPostBySlug(posts: WordPressPost[], slug: string) {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function filterPostsByCategory(
  posts: WordPressPost[],
  category: "projects" | "blogs",
) {
  const blogsId = 8;
  const projectsId = 30;

  return posts.filter((item) =>
    category === "blogs"
      ? item.categories?.includes(blogsId)
      : item.categories?.includes(projectsId),
  );
}
