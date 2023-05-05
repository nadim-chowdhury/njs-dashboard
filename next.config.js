/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "flagcdn.com",
      "upload.wikimedia.org",
      "picsum.photos",
      "unsplash.com",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
