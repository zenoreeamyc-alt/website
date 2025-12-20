"use client";

import { useEffect, useMemo, useState } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=60",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=60",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=60",
];

export default function AnimeSlider() {
  const [i, setI] = useState(0);
  const images = useMemo(() => IMAGES, []);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % images.length), 3800);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="card p-5 shadow-soft">
      <h2 className="text-lg font-bold mb-3">Slide Anime</h2>
      <div className="cardInner p-3">
        <div className="relative overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[i]}
            alt="Slide"
            className="h-44 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
