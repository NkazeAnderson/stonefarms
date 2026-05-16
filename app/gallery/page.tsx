import React from "react";
import fs from "fs";
import path from "path";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Stonefarms",
  description: "A visual journey through Stonefarms, showcasing our sustainable agricultural practices, community impact, and the beauty of African farming.",
  openGraph: {
    title: "Gallery - Stonefarms",
    description: "A visual journey through Stonefarms, showcasing our sustainable agricultural practices, community impact, and the beauty of African farming.",
    type: "website",
  },
};

import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  let images: string[] = [];

  try {
    images = fs
      .readdirSync(galleryDir)
      .filter((file) => /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(file))
      .map((file) => `/gallery/${file}`);
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

  return (
    <main className="pt-32 pb-20 px-4 md:px-10 bg-green-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/80 mb-3">
            Visual Impact
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-6 tracking-tight">
            Our Gallery
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Witness the transformation of African agriculture through our lens. 
            From sustainable plots to thriving communities.
          </p>
        </header>

        {images.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-lg text-slate-500">No images found in the gallery.</p>
          </div>
        ) : (
          <GalleryGrid images={images} />
        )}
      </div>
    </main>
  );
}
