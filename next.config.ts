import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — outputs plain HTML/CSS/JS to `out/`.
  // Works on Vercel (and anywhere else) without needing a Next.js 16 adapter.
  // Safe because every route in this site is fully static.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
