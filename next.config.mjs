const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.markitme.ca",
      },
      {
        protocol: "https",
        hostname: "www.cms.markitme.ca",
      },
    ],
  },
};

export default nextConfig;