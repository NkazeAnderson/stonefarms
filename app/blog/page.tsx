import Link from "next/link";
import styles from "./blog.module.css";
import {
  filterPostsByCategory,
  getAllBlogPosts,
  getFeaturedImage,
  stripHtml,
} from "@/lib/blog";

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  let posts = await getAllBlogPosts();
  const category = (await searchParams).category;
  const isProjects = category?.toLowerCase() === "projects";

  if (isProjects) {
    posts = filterPostsByCategory(posts, "projects");
  } else {
    posts = filterPostsByCategory(posts, "blogs");
  }

  return (
    <main className={`${styles.blogPage} bg-slate-50 pb-10 pt-28! sm:py-14`}>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {isProjects ? (
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/80">
              From our projects
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Projects from STONEFARMS
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Discover our initiatives and projects. We are committed to
              transparency, excellence, and eco-friendly practices.
            </p>
          </div>
        ) : (
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/80">
              From our blog
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Stories from STONEFARMS
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore practical farming guides, community stories, climate-smart
              initiatives, and the impact of our work in Cameroon and beyond.
            </p>
          </div>
        )}

        {posts.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm text-center">
            <p className="text-lg font-medium text-slate-700">
              No blog posts are available right now.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => {
              const imageUrl = getFeaturedImage(post);

              return (
                <Link href={`/blog/${post.slug}`}>
                  <article
                    key={post.id}
                    className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={stripHtml(post.title.rendered)}
                        className="aspect-video w-full object-cover"
                        loading="lazy"
                      />
                    ) : null}
                    <div className="p-6 sm:p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <h2 className="mt-4 text-2xl font-semibold leading-tight text-slate-950 dark:text-white">
                        {post.title.rendered}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {stripHtml(post.excerpt.rendered).slice(0, 160)}…
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className={`${styles.blogLink} mt-6 inline-flex text-sm font-semibold`}
                      >
                        Read full story →
                      </Link>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
