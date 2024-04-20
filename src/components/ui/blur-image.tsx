"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/utils/cn";

export default function BlurImage({
  src,
  alt,
  className,
  sizes,
  objectPosition,
  objectFit,
}: {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  objectPosition?: string;
  objectFit?: string;
}) {
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <div className={cn("h-auto overflow-hidden bg-gray-200", className)}>
      <Image
        alt={alt}
        src={src}
        fill
        sizes={sizes}
        objectFit={objectFit}
        objectPosition={objectPosition}
        className={cn(
          "duration-700 ease-in-out group-hover:opacity-75 w-full h-full",

          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
