import React from "react";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";
import { achievements } from "@/components/sections/achievements/config";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/carousel";

import AchievementCard from "./achievement-card";

function Achievements() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="achievements">
      <div className="px-4 md:px-6">
        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <TextReveal
              as="h2"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none"
            >
              Achievements🎉
            </TextReveal>
            <TextReveal as="p" className="text-gray-500 dark:text-gray-400">
              Beberapa prestasi dan sertifikat yang pernah saya raih untuk
              menunjukan konsistensi belajar dan berkreasi.
            </TextReveal>
          </div>
          <div className="flex items-center justify-center overflow-hidden lg:px-12">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {achievements.map((achievement, index) => (
                  <CarouselItem
                    key={`achievement_${index}`}
                    className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                  >
                    <div className="h-full">
                      <AchievementCard
                        title={achievement.title}
                        issuer={achievement.issuer}
                        year={achievement.year}
                        description={achievement.description}
                        image={achievement.image}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Achievements;
