/** @type {import('next').NextConfig} */
// const nextConfig = { images: { unoptimized: true } };
const nextConfig = {images: {
  domains: [
    "api.microlink.io", // Microlink Image Preview
  ],
},
output:"export",
};

export default nextConfig;
