import { notFound } from "next/navigation";
import styles from "../blog.module.css";
import { findPostBySlug, getAllBlogPosts, stripHtml } from "@/lib/blog";
import { Metadata, ResolvingMetadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const posts = await getAllBlogPosts();
  const post = findPostBySlug(posts, slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const yoast = post.yoast_head_json;

  if (yoast) {
    return {
      title: yoast.title || stripHtml(post.title.rendered),
      description: yoast.description || stripHtml(post.excerpt.rendered),
      authors: yoast.author ? [{ name: yoast.author }] : undefined,
      openGraph: {
        title: yoast.og_title || stripHtml(post.title.rendered),
        description: yoast.og_description || stripHtml(post.excerpt.rendered),
        url: yoast.og_url || post.link,
        siteName: yoast.og_site_name,
        type: (yoast.og_type as "article" | "website") || "article",
        locale: yoast.og_locale,
        images: yoast.og_image?.map(img => ({
          url: img.url || "",
          width: img.width,
          height: img.height,
        })) || [],
        publishedTime: yoast.article_published_time,
        modifiedTime: yoast.article_modified_time,
      },
      twitter: {
        card: (yoast.twitter_card as any) || "summary_large_image",
        title: yoast.og_title || stripHtml(post.title.rendered),
        description: yoast.og_description || stripHtml(post.excerpt.rendered),
        images: yoast.og_image?.map(img => img.url || "") || [],
      },
      alternates: {
        canonical: yoast.canonical,
      },
      robots: {
        index: yoast.robots?.index === "index",
        follow: yoast.robots?.follow === "follow",
        "max-snippet": yoast.robots?.["max-snippet"] ? -1 : undefined,
        "max-image-preview": yoast.robots?.["max-image-preview"] ? "large" : undefined,
        "max-video-preview": yoast.robots?.["max-video-preview"] ? -1 : undefined,
      } as any,
    };
  }

  return {
    title: stripHtml(post.title.rendered),
    description: stripHtml(post.excerpt.rendered),
    openGraph: {
      title: stripHtml(post.title.rendered),
      description: stripHtml(post.excerpt.rendered),
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const posts = await getAllBlogPosts();
  const post = findPostBySlug(posts, (await params).slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={`${styles.blogPage} bg-slate-50 pb-10 pt-28! sm:py-14`}>
      {post.yoast_head_json?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(post.yoast_head_json.schema),
          }}
        />
      )}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <article className="overflow-hidden bg-white p-6 shadow-sm dark:bg-slate-950 sm:p-10">
          <header className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/80">
              Blog post
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {post.title.rendered}
            </h1>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              {new Date(post.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </header>
          <div
            className={styles.blogPostBody}
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>
      </section>
    </main>
  );
}
