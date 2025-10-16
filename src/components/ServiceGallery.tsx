// src/components/ServiceGallery.tsx
import React from "react";
import BackLink from "./BackLink"; // remove if you don't use it

export type ServiceGalleryProps = {
  title: string;
  lead: string;
  images: [string, ...string[]]; // at least one image
  bullets?: string[];
};

const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  title,
  lead,
  images,
  bullets = [],
}) => {
  const [hero, ...rest] = images;
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-6 md:py-10">
      <BackLink />
      <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">{title}</h1>

      {/* gallery */}
      <div className="mt-6 grid gap-4 md:grid-cols-12">
        <div className="md:col-span-7">
          <img src={hero} alt={title} className="w-full h-[260px] md:h-[420px] object-cover rounded-2xl" />
        </div>
        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          {rest.map((src, i) => (
            <img key={i} src={src} alt={`${title} ${i + 2}`} className="w-full h-[120px] md:h-[195px] object-cover rounded-2xl" />
          ))}
        </div>
      </div>

      <p className="mt-6 text-gray-700 leading-relaxed">{lead}</p>

      {bullets.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Nima uchun ushbu xizmatni tanlaysiz?</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ServiceGallery;
