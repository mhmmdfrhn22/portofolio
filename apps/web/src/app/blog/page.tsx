import type { CollectionPage, WithContext } from "schema-dts";
import React from "react";
import GalleryCard from "@/app/blog/_components/gallery-card";
import { metadata as meta } from "@/app/config";
import Line from "@/components/fancy/line";
import TextReveal from "@/components/fancy/text-reveal";
import { createMetadata } from "@/lib/metadata";

import { galleryImages } from "./config";

const title = "Gallery";
const description = "Koleksi hasil design saya.";

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: "/blog",
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
});

const jsonLd: WithContext<CollectionPage> = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: `${meta.site.url}/blog`,
  isPartOf: {
    "@type": "WebSite",
    name: meta.site.title,
    url: meta.site.url,
  },
};

export default function GalleryPage(): React.ReactElement {
  return (
    <main className="my-14 flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          {/* todo: re-add delay of 0.2seconds */}
          <TextReveal
            as="h1"
            className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Gallery
          </TextReveal>
          <Line className={"mt-16"} />
        </div>
      </section>
      <section className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 2xl:grid-cols-3">
        {galleryImages.map((image, index) => (
          <GalleryCard
            image={image}
            alt={`Gallery image ${index + 1}`}
            key={`gallery_${index}`}
          />
        ))}
      </section>
    </main>
  );
}
