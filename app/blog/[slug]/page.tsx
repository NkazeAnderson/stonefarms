import { notFound } from "next/navigation";
import styles from "../blog.module.css";
import { findPostBySlug, getAllBlogPosts } from "@/lib/blog";

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
