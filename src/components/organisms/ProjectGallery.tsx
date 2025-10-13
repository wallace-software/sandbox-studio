"use client";

import { FC } from "react";
import { Button, Gallery, GalleryItem } from "@components";
import { fadeInUp, galleryData, stagger } from "@constants";
import { motion } from "framer-motion";

const ProjectGallery: FC = () => {
  return (
    <motion.div
      className="landing-container-left vertical-padding  flex flex-col justify-center 2010:items-center"
      variants={stagger(0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col items-start justify-center gap-6 h-full max-w-[1864px]">
        {/* Heading */}
        <motion.div variants={fadeInUp}>
          <h2 className="mb-3">Our work.</h2>
          <h2 className="text-sand">Take a look.</h2>
        </motion.div>
        {/* Gallery */}
        <motion.div variants={fadeInUp} className="w-full">
          <Gallery arrowsAligned="right" roundedParent>
            {galleryData.map((item, i) => (
              <GalleryItem key={i} data={item} />
            ))}
          </Gallery>
        </motion.div>

        {/* Button */}
        <motion.div variants={fadeInUp}>
          <Button
            title="See more projects"
            link="/projects"
            className="!min-w-[240px] !min-h-[48px] mt-5 2xl:mt-10"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectGallery;
