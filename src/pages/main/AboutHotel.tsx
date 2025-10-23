import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { getAboutCopy } from "../../i18n/main/aboutHotel";

/**
 * Polished About section with first-scroll reveal
 * - Smooth fade/slide-in on first viewport entry (once)
 * - Slight image lift & glow on hover
 * - Respects prefers-reduced-motion
 * - Clean responsive layout with soft gradient backdrop
 */
export default function AboutSection() {
  const { code } = useLanguage();
  const T = getAboutCopy(code);
  const prefersReduced = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.08,
        delayChildren: prefersReduced ? 0 : 0.02,
      },
    },
  } as const;

  return (
    <section id="about" className="relative overflow-hidden py-16 md:py-24">
      {/* Soft spotlight / gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#0B0B0F]"
      >
        <div className="absolute -top-24 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_60%)] blur-xl" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:items-start md:gap-12"
      >
        {/* Left: Image */}
        <motion.div variants={fadeUp} className="w-full md:w-1/2">
          <div className="group relative">
            <img
              src="assets/about/about_hotel.webp"
              alt="S-Namangan Hotels"
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-2xl shadow-black/30 ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-1"
            />
            {/* Subtle glow on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(37,99,235,0.25) inset" }} />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          variants={fadeUp}
          className="w-full text-center md:w-1/2 md:text-left"
        >
          <motion.h2
            variants={fadeUp}
            className="font-inter font-extrabold tracking-tight text-white text-[32px] leading-[40px] md:text-[56px] md:leading-[72px]"
          >
            {T.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-inter text-[18px] leading-[28px] tracking-[-0.5px] text-[#D1D5DB] md:text-[20px] md:leading-[34px]"
          >
            {T.body}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center md:justify-start">
            <Link
              to="/about"
              aria-label={T.cta}
              className="rounded-lg bg-[#2563EB] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/25 ring-1 ring-white/10 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
            >
              {T.cta}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
