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
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/llms.md",
          has: [
            {
              type: "header",
              key: "accept",
              value: ".*text/markdown.*",
            },
          ],
        },
        {
          source: "/",
          destination: "/llms.md",
          has: [
            {
              type: "header",
              key: "accept",
              value: ".*text/x-markdown.*",
            },
          ],
        },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Vary",
            value: "Accept",
          },
          {
            key: "Link",
            value:
              '</llms.md>; rel="alternate"; type="text/markdown", </llms.txt>; rel="alternate"; type="text/plain"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;