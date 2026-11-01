/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `npm run build` produces the `out/` folder (no server / backend needed).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
