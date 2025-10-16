import React from "react";
import { Link } from "react-router-dom";
import { FaUtensils, FaParking, FaWifi, FaSpa, FaSwimmer, FaDove } from "react-icons/fa";
import type { IconType } from "react-icons";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { getServicesCopy } from "../../i18n/main/services";

// Base (language-agnostic): route + icon + id
type ServiceBase = { id: number; to: string; icon: IconType };
const SERVICES_BASE: ReadonlyArray<ServiceBase> = [
  { id: 1, to: "/services/breakfast", icon: FaUtensils },
  { id: 2, to: "/services/parking",   icon: FaParking  },
  { id: 3, to: "/services/wifi",      icon: FaWifi     },
  { id: 4, to: "/services/sauna",     icon: FaSpa      },
  { id: 5, to: "/services/pool",      icon: FaSwimmer  },
  { id: 6, to: "/services/birds",     icon: FaDove     },
];

const ServicesSection: React.FC = () => {
  const { code } = useLanguage();
  const T = getServicesCopy(code);
  const prefersReduced = useReducedMotion();

  // ✅ Container & card variants (staggered, first-view only)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.14,
        delayChildren: prefersReduced ? 0 : 0.06,
      },
    },
  } as const;

  const card = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 22, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  return (
    <section id="services" className="bg-[#F9FAFB] py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-inter text-[32px] md:text-[40px] font-bold leading-[48px] text-[#111827]">
            {T.headingTitle}
          </h2>
          <p className="mt-4 font-inter text-[16px] md:text-[18px] leading-[28px] text-gray-600">
            {T.headingLead}
          </p>
        </div>

        {/* Cards with staggered reveal */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES_BASE.map(({ id, to, icon: Icon }, idx) => {
            // Robust lookup: supports either items[1..N] by id OR zero-based array
            const itemById = (T as any).items?.[id];
            const itemByIndex = Array.isArray((T as any).items) ? (T as any).items[idx] : undefined;
            const item = itemById || itemByIndex;
            if (!item) return null;

            return (
              // ❗ Do NOT use `display: contents` here; it breaks transforms/observers
              <motion.div key={id} variants={card}>
                <Link
                  to={to}
                  aria-label={`${item.title} — ${T.learnMore}`}
                  className="
                    group relative z-0 block overflow-hidden rounded-2xl ring-1 ring-gray-200
                    bg-white p-6 shadow-sm transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl hover:ring-blue-400/30
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  "
                >
                  {/* circular blue overlay BEHIND content */}
                  <span
                    className="
                      pointer-events-none absolute -bottom-16 -left-16
                      h-0 w-0 rounded-full bg-[#2563EB]
                      transition-all duration-500 ease-out
                      group-hover:h-[520px] group-hover:w-[520px]
                      -z-10
                    "
                  />
                  {/* subtle glow also behind */}
                  <span
                    className="
                      pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full
                      bg-[radial-gradient(circle,rgba(59,130,246,0.35)_0%,transparent_70%)]
                      opacity-0 blur-xl transition-opacity duration-500 ease-out
                      group-hover:opacity-100
                      -z-10
                    "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl
                        bg-blue-50 text-[#2563EB] ring-1 ring-blue-100
                        transition-all duration-300
                        group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/20
                      "
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3
                      className="
                        font-inter text-xl font-semibold text-gray-900
                        transition-colors duration-300
                        group-hover:text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2 text-sm leading-6 text-gray-600 line-clamp-3
                        transition-colors duration-300
                        group-hover:text-white/90
                      "
                    >
                      {item.desc}
                    </p>

                    <span
                      className="
                        mt-5 inline-flex items-center font-semibold text-[#1D1D1F]
                        transition-all duration-300
                        group-hover:text-white
                      "
                    >
                      {T.learnMore}
                      <span
                        className="
                          ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full
                          bg-blue-100 text-[#2563EB] transition-all duration-300
                          group-hover:bg-white/15 group-hover:text-white
                        "
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
