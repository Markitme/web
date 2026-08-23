const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "markitme.ca",
      },
      {
        protocol: "https",
        hostname: "www.markitme.ca",
      },
    ],
  },
};

export default nextConfig;