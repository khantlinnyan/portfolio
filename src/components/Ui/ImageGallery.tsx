"use client";
import React, { useState } from "react";
import Image1 from "@/../public/projectImage/_DSC7547 (1).jpg";
import Image2 from "@/../public/projectImage/IMG_20231227_201805.jpg";
import Image3 from "@/../public/projectImage/IMG_20231227_201718.jpg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import { cn } from "@/lib/utils";

export default function ImageGallery() {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const activeImageIndex = wrap(0, ImageGalleryPhotos.length, imageCount);

  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <div
          className="animate-in image-gallery flex px-5 col-span-3 flex-col items-center gap-8 justify-center"
          style={{ "--index": 1 }}
        >
          <div className="flex relative justify-center  w-full items-center">
            <motion.div
              key={imageCount}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="flex flex-col cursor-grabbing items-center justify-center"
            >
              <Image
                src={ImageGalleryPhotos[activeImageIndex].image}
                alt={ImageGalleryPhotos[activeImageIndex].alt}
                width={ImageGalleryPhotos[activeImageIndex].width}
                height={ImageGalleryPhotos[activeImageIndex].height}
                className={cn(
                  "relative h-60 inset-0 object-cover shadow-md pointer-events-none rounded-2xl ",
                  ImageGalleryPhotos[activeImageIndex].rotate
                )}
              />
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}
const ImageGalleryPhotos = [
  {
    image: Image1,
    alt: "Image of me",
    rotate: "-rotate-6",
    width: 320,
    height: 320,
  },
  {
    image: Image2,
    alt: "Image of me",
    rotate: "rotate-6",
    width: 320,
    height: 320,
  },
  {
    image: Image3,
    alt: "Image of me",
    rotate: "rotate-6",
    width: 320,
    height: 320,
  },
];
const sliderVariants = {
  incoming: (direction) => ({
    //if the direction is from the right
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  //if the direction is from the right
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 0.5,
  ease: [0.56, 0.03, 0.12, 1.04],
};
