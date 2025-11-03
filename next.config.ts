import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "localhost",
      "127.0.0.1",
      "unsplash.com",
      "images.unsplash.com",
      "via.placeholder.com",
      "img.youtube.com",
      "i.ytimg.com",
      "upload.wikimedia.org"
    ]
  }
};

export default withNextIntl(nextConfig);
