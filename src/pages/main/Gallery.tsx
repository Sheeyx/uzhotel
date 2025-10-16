// src/components/Gallery.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants, type Transition } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { getGalleryCopy } from "../../i18n/main/gallery";

export default function Gallery() {
  const { code } = useLanguage();
  const T = getGalleryCopy(code);

  // Use a cubic-bezier instead of "easeOut" string to satisfy TS
  const EASE: NonNullable<Transition["ease"]> = [0.16, 1, 0.3, 1];

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section id="gallery" className="bg-[#0B1120] text-white py-16 px-6">
      {/* Title */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={item}>
          {T.title}
        </motion.h2>
        <motion.p className="text-gray-300" variants={item}>
          {T.lead}
        </motion.p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="
          max-w-5xl mx-auto grid gap-4
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          auto-rows-[180px] sm:auto-rows-[200px] md:auto-rows-[240px]
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.figure
          className="md:col-start-1 md:row-start-1 rounded-xl overflow-hidden"
          variants={item}
          whileHover={{ scale: 1.04, transition: { duration: 0.35 } }}
        >
          <img src="/assets/galary/galary5.png" alt={T.alts.lobby} className="w-full h-full object-cover" />
        </motion.figure>

        <motion.figure
          className="md:col-start-2 md:row-start-1 md:row-span-2 rounded-xl overflow-hidden"
          variants={item}
          whileHover={{ scale: 1.04, transition: { duration: 0.35 } }}
        >
          <img src="/assets/galary/galary2.png" alt={T.alts.room} className="w-full h-full object-cover" />
        </motion.figure>

        <motion.figure
          className="md:col-start-3 md:row-start-1 rounded-xl overflow-hidden"
          variants={item}
          whileHover={{ scale: 1.04, transition: { duration: 0.35 } }}
        >
          <img src="/assets/galary/galary3.png" alt={T.alts.pool} className="w-full h-full object-cover" />
        </motion.figure>

        <motion.figure
          className="md:col-start-1 md:row-start-2 rounded-xl overflow-hidden"
          variants={item}
          whileHover={{ scale: 1.04, transition: { duration: 0.35 } }}
        >
          <img src="/assets/galary/galary1.png" alt={T.alts.restaurant} className="w-full h-full object-cover" />
        </motion.figure>

        <motion.figure
          className="md:col-start-3 md:row-start-2 rounded-xl overflow-hidden"
          variants={item}
          whileHover={{ scale: 1.04, transition: { duration: 0.35 } }}
        >
          <img src="/assets/galary/galary4.png" alt={T.alts.deluxe} className="w-full h-full object-cover" />
        </motion.figure>
      </motion.div>

      {/* Button */}
      <motion.div
        className="flex justify-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.div variants={item}>
          <Link
            to="/gallery"
            className="bg-blue-600 hover:bg-blue-700 transition px-24 py-3 rounded-md font-medium"
            aria-label={T.title}
          >
            {T.cta}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
