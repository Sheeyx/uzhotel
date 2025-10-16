// src/components/ServiceSplit.tsx
import React from "react";
import BackLink from "./BackLink";

export default function ServiceSplit({
  title,
  image,
  children,
}: {
  title: string;
  image: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-6 md:py-10">
      <BackLink />
      <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">{title}</h1>

      <div className="mt-6 grid gap-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={image} alt={title} className="w-full h-[260px] md:h-[360px] object-cover rounded-2xl" />
        </div>
        <div className="md:col-span-7">
          <div className="text-gray-700 leading-relaxed text-[15px] md:text-base">{children}</div>
        </div>
      </div>
    </section>
  );
}
