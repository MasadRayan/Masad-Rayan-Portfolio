/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // Pure static export: no runtime server, every file immutable on the CDN.
  output: "export",
  images: {
    unoptimized: true, // we ship pre-compressed WebP in /public
  },
};

export default nextConfig;
