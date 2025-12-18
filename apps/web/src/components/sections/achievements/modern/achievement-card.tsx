import type { Achievement } from "@/types/achievement";
import Image from "next/image";
import TextReveal from "@/components/fancy/text-reveal";

import { cn } from "@repo/ui";
import { AspectRatio } from "@repo/ui/aspect-ratio";
import { Card, CardContent } from "@repo/ui/card";

interface AchievementCardProps extends Achievement {
  className?: string;
}

function AchievementCard({
  title,
  issuer,
  year,
  description,
  image,
  className,
}: AchievementCardProps) {
  return (
    <Card
      className={cn(
        "flex min-h-full flex-col justify-between shadow-none",
        className,
      )}
    >
      <CardContent className="pt-6">
        <div className="grid gap-3">
          <AspectRatio
            ratio={16 / 9}
            className="relative overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Sertifikat ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={false}
            />
          </AspectRatio>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <TextReveal as="h3" className="text-2xl font-semibold">
              {issuer}
            </TextReveal>
            <TextReveal as="span" className="text-sm font-medium">
              {year}
            </TextReveal>
          </div>
          <TextReveal as="h4" className="text-lg font-medium uppercase">
            {title}
          </TextReveal>
          {description && (
            <TextReveal
              as="p"
              className="max-w-2xl text-base font-light text-zinc-700 dark:text-zinc-400"
            >
              {description}
            </TextReveal>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default AchievementCard;
