import Link from "next/link";
import { notFound } from "next/navigation";
import { formatStoryDate, getStory, stories } from "@/lib/stories";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const story = getStory((await params).slug);
  if (!story) notFound();

  return (
    <main className="bg-slate-50 pb-10 pt-28 sm:py-14">
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href="/stories"
          className="text-sm font-semibold text-primary hover:underline"
        >
          ← Back to Stories &amp; Impact
        </Link>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
          {formatStoryDate(story.date)}
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
          {story.title}
        </h1>
        <video
          src={story.video}
          controls
          playsInline
          preload="metadata"
          className="mt-8 aspect-video w-full rounded-2xl bg-black"
        />
        <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
          {story.content.map((block, i) => {
            if (block.type === "h")
              return (
                <h2
                  key={i}
                  className="pt-4 text-2xl font-semibold text-slate-950"
                >
                  {block.text}
                </h2>
              );
            if (block.type === "ul")
              return (
                <ul key={i} className="list-disc space-y-2 pl-6">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            return <p key={i}>{block.text}</p>;
          })}
        </div>
      </article>
    </main>
  );
}
