import { filterPostsByCategory, getAllBlogPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function ProjectsSection() {
      const posts = filterPostsByCategory(await getAllBlogPosts(), "projects")

      return       <section className=" py-10">
              <h2 className=" px-4 md:px-20 py-10">Some Recent Projects</h2>
              <div className="flex gap-6 px-4 flex-nowrap overflow-x-auto">
        {
            posts.map(item=>

                <div key={item.slug} className=" flex flex-col justify-between">
                  <div className="w-[47vw] relative aspect-video">
                    <img
                      src={item.yoast_head_json?.og_image?.[0].url!}
                      // src={""}
                      alt={item.slug}
                        loading="lazy"
                       className="h-full w-full object-cover"
                    />
                  </div>
                  <div className=" flex justify-between items-center py-2">
                    <h5 className=" font-bold">{ item.title.rendered}</h5>
                    <Link href={item.slug}>
                    <ArrowRight />
                    </Link>
                  </div>
                </div>
          
            )
        }
              </div>
            </section>
}

export default ProjectsSection