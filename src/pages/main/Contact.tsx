import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import type { IconType } from "react-icons";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { getContactCopy } from "../../i18n/main/contact";

type ContactItemBase = { id: number; icon: IconType; text: string };
const CONTACTS_BASE: ContactItemBase[] = [
  { id: 1, icon: FaMapMarkerAlt, text: "160116 Namangan Viloyati Namangan Shahar Islom Karimov ko‘chasi, 2uy" },
  { id: 2, icon: FaPhoneAlt,     text: "+998 (78) 223-00-31" },
  { id: 3, icon: FaEnvelope,     text: "snamanganhotel@mail.ru" },
];

export default function Contact() {
  const { code } = useLanguage();
  const T = getContactCopy(code);
  const prefersReduced = useReducedMotion();

  // Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.12,
        delayChildren: prefersReduced ? 0 : 0.06,
      },
    },
  } as const;

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  const fadeIn = {
    hidden: { opacity: 0, scale: prefersReduced ? 1 : 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  return (
    <section id="contact" className="bg-white py-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2">
        {/* Map */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full h-[500px] md:h-[600px]"
        >
          <iframe
            title="S-Namangan Hotel Map"
            src="https://www.google.com/maps?q=41.00640258249219,71.64460652962399&hl=es;z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen
            loading="lazy"
            className="w-full h-full rounded-none"
          />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="px-8 md:px-12 py-12 flex flex-col justify-center bg-white"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {T.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 mb-8">
            {T.lead}
          </motion.p>

          <motion.ul variants={container} className="space-y-6">
            {CONTACTS_BASE.map(({ id, icon: Icon, text }) => {
              const itemT = (T as any).items?.[id];
              const content = itemT?.textOverride ?? text;
              const isPhone = id === 2;
              const isEmail = id === 3;

              return (
                <motion.li key={id} variants={fadeUp} className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                    <Icon className="text-lg" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{itemT?.title}</h4>
                    {isPhone ? (
                      <a href={`tel:${String(content).replace(/[^\d+]/g, "")}`} className="text-gray-600 hover:text-gray-800">
                        {content}
                      </a>
                    ) : isEmail ? (
                      <a href={`mailto:${content}`} className="text-gray-600 hover:text-gray-800">
                        {content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{content}</p>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
