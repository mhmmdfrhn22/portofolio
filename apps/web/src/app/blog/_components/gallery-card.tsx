"use client";

import React, { useState } from "react";
import Image from "next/image";

import { cn } from "@repo/ui";
import { AspectRatio } from "@repo/ui/aspect-ratio";
import { Card } from "@repo/ui/card";

interface GalleryCardProps {
  image: string;
  alt?: string;
  className?: string;
}

function GalleryCard({
  image,
  alt = "Gallery image",
  className,
}: GalleryCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        className={cn(
          "relative flex h-full cursor-pointer flex-col overflow-hidden border border-zinc-950/10 bg-white",
          className,
        )}
        onClick={() => setIsOpen(true)}
      >
        <AspectRatio
          ratio={16 / 9}
          className="z-2 mb-2 inline-block overflow-hidden rounded-md"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </AspectRatio>
      </Card>

      {/* Overlay untuk zoom gambar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-h-full max-w-full">
            <button
              className="absolute -top-12 right-0 text-white transition-colors hover:text-gray-300"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative h-[90vh] w-full max-w-7xl">
              <Image
                src={image || "/placeholder.svg"}
                alt={alt}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryCard;
