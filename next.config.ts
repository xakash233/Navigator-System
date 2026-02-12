import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lenovopress.lenovo.com',
      },
      {
        protocol: 'https',
        hostname: 'p1-ofp.static.pub',
      },
      {
        protocol: 'https',
        hostname: 'www.cisco.com',
      },
      {
        protocol: 'https',
        hostname: 'expresscomputersystems.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.blueally.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'content.jdmagicbox.com',
      },
      {
        protocol: 'https',
        hostname: 'www.ibm.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn11.bigcommerce.com',
      },
      {
        protocol: 'https',
        hostname: 'lenovopress.com',
      },
      {
        protocol: 'https',
        hostname: 'www.researchgate.net',
      },
      {
        protocol: 'https',
        hostname: 'sourceit.com.sg',
      },
      {
        protocol: 'https',
        hostname: 'www.dell.com',
      },
      {
        protocol: 'https',
        hostname: 'images.openai.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn9.dissolve.com',
      },
      {
        protocol: 'https',
        hostname: 'i.sstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'www.omnisecu.com',
      },
      {
        protocol: 'https',
        hostname: 'learn.microsoft.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.expertsinside.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
    ],
  },
};

export default nextConfig;
