"use client";

import { useEffect } from "react";

const products = [
  {
    name: "Web Design & Development",
    url: "/products/web-design-development",
  },
  {
    name: "SEO Services",
    url: "/products/seo-services",
  },
  {
    name: "Social Media Marketing",
    url: "/products/social-media-marketing",
  },
  {
    name: "Brand Marketing",
    url: "/products/brand-marketing",
  },
  {
    name: "Video Production",
    url: "/products/video-production",
  },
  {
    name: "Content Marketing",
    url: "/products/content-marketing",
  },
  {
    name: "Photography Services",
    url: "/products/photography",
  },
];

export default function WebMCPTools() {
  useEffect(() => {
    const modelContext = navigator.modelContext;

    if (!modelContext?.registerTool) {
      return undefined;
    }

    const tools = [
      {
        name: "markitme_get_products",
        description:
          "Get MarkitMe products and their website paths. Optionally filter by a search term.",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description:
                "Optional product name or category to search for.",
            },
          },
          additionalProperties: false,
        },
        execute: async ({ query = "" }) => {
          const normalizedQuery = query.trim().toLowerCase();
          const matches = normalizedQuery
            ? products.filter((product) =>
                product.name.toLowerCase().includes(normalizedQuery),
              )
            : products;

          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({
                  products: matches,
                }),
              },
            ],
          };
        },
      },
      {
        name: "markitme_get_contact_details",
        description:
          "Get MarkitMe contact information, office address, and website contact path.",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false,
        },
        execute: async () => ({
          content: [
            {
              type: "text",
              text: JSON.stringify({
                email: "info@markitme.ca",
                phone: "+1-613-981-4844",
                address: {
                  street: "34 Minowan Miikan Lane",
                  locality: "Toronto",
                  region: "ON",
                  postalCode: "M6J 0G3",
                  country: "CA",
                },
                contactPath: "/contact",
              }),
            },
          ],
        }),
      },
      {
        name: "markitme_open_contact",
        description:
          "Open MarkitMe's contact page or project inquiry modal.",
        inputSchema: {
          type: "object",
          properties: {
            mode: {
              type: "string",
              enum: ["page", "modal"],
              default: "page",
            },
          },
          additionalProperties: false,
        },
        execute: async ({ mode = "page" }) => {
          if (mode === "modal") {
            window.dispatchEvent(
              new Event("open-contact-modal"),
            );
            return {
              content: [
                {
                  type: "text",
                  text: "Opened the MarkitMe project inquiry modal.",
                },
              ],
            };
          }

          window.location.assign("/contact");
          return {
            content: [
              {
                type: "text",
                text: "Opened the MarkitMe contact page.",
              },
            ],
          };
        },
      },
    ];

    tools.forEach((tool) => modelContext.registerTool(tool));

    return () => {
      tools.forEach((tool) => {
        if (typeof modelContext.unregisterTool === "function") {
          modelContext.unregisterTool(tool.name);
        }
      });
    };
  }, []);

  return null;
}
