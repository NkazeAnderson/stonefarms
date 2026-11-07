import {
  filterPostsByCategory,
  getAllBlogPosts,
  getFeaturedImage,
} from "@/lib/blog";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function ProjectsSection() {
  const posts = filterPostsByCategory(await getAllBlogPosts(), "projects");

  return (
    <section className=" py-10">
      <h2 className=" px-4 md:px-20 py-10">Some Recent Projects</h2>
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4">
        {posts.map((item) => (
          <div
            key={item.slug}
            className="flex snap-start flex-col justify-between"
          >
            <div className="relative aspect-video w-[75vw] sm:w-[45vw] lg:w-[30vw]">
              <img
                src={getFeaturedImage(item) ?? ""}
                alt={item.title.rendered}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className=" flex justify-between items-center py-2">
              <h5 className=" font-bold">{item.title.rendered}</h5>
              <Link
                href={`/blog/${item.slug}`}
                aria-label={`Read ${item.title.rendered}`}
              >
                <ArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
