import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  getAllBlogPosts,
  getFeaturedImage,
  getFeaturedAlt,
  stripHtml,
  filterPostsByCategory,
} from "@/lib/blog";

export default async function BlogSection() {
  const posts = filterPostsByCategory(await getAllBlogPosts(), "blogs");

  return (
    <section className="container px-10 py-10">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
          From our blog
        </p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Latest news from STONEFARMS
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Read the latest stories and updates on our projects, farming
          techniques and green planet endeavors.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 items-stretch">
        {posts.length > 0 ? (
          posts.slice(0, 6).map((post) => {
            const imageUrl = getFeaturedImage(post);

            return (
              <Link href={`/blog/${post.slug}`} className=" h-full">
                <Card key={post.id} className="group">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={getFeaturedAlt(post)}
                      className="h-56 w-full object-cover"
                      loading="lazy"
                    />
                  ) : null}
                  <CardHeader>
                    <CardTitle>{post.title.rendered}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {stripHtml(post.excerpt.rendered).slice(0, 140) + "..."}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm font-semibold text-primary transition hover:text-primary/90">
                      Read more
                    </p>
                  </CardFooter>
                </Card>
              </Link>
            );
          })
        ) : (
          <div className="col-span-full rounded-3xl border border-muted/50 bg-muted/50 p-8 text-center">
            <p className="text-base text-muted-foreground">
              Unable to load blog posts right now.
            </p>
          </div>
        )}
      </div>
      <div className="pt-10 flex items-center justify-center">
        <Link href="/blog">
          <Button variant={"outline"}>View All Blogs</Button>
        </Link>
      </div>
    </section>
  );
}
