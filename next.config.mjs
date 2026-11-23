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
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/services/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value:
              '</llms.md>; rel="alternate"; type="text/markdown"; title="Markdown", </llms.txt>; rel="alternate"; type="text/plain"; title="LLMs.txt"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;