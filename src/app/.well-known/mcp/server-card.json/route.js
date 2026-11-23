export function GET() {
  const serverCard = {
    name: "MarkitMe",
    description:
      "MarkitMe website tools for discovering products and contact information.",
    version: "1.0.0",
    endpoint: "https://markitme.ca",
    transport: "streamable-http",
    capabilities: {
      tools: {
        listChanged: true,
      },
    },
    tools: [
      {
        name: "markitme_get_products",
        description:
          "Get MarkitMe products and their website paths, optionally filtered by search term.",
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
      },
      {
        name: "markitme_get_contact_details",
        description:
          "Get MarkitMe contact information, office address, and contact page path.",
        inputSchema: {
          type: "object",
          properties: {},
          additionalProperties: false,
        },
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
      },
    ],
  };

  return Response.json(serverCard, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
