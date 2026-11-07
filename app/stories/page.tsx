import Link from "next/link";
import { formatStoryDate, stories } from "@/lib/stories";

export const metadata = { title: "Stories & Impact | STONEFARMS" };

export default function StoriesPage() {
  return (
    <main className="bg-slate-50 pb-10 pt-28 sm:py-14">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/80">
            Stories &amp; Impact
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Farmers&apos; voices in action
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Watch real experiences from the farmers and communities we work
            with.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <Link href={`/stories/${story.slug}`} key={story.slug}>
              <article className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <video
                  src={story.video}
                  className="aspect-video w-full bg-black object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
                    {formatStoryDate(story.date)}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold leading-tight text-slate-950">
                    {story.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {story.excerpt}
                  </p>
                  <span className="mt-6 inline-flex text-sm font-semibold text-primary">
                    Watch full story →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
