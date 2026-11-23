export function GET() {
  const content = `# MarkitMe

MarkitMe is a digital strategy and creative agency in Canada specializing in web design and development, branding, SEO, digital marketing, content marketing, photography, and video production.

## Main pages

- [Home](https://markitme.ca/)
- [About](https://markitme.ca/about)
- [Products](https://markitme.ca/products)
- [Work](https://markitme.ca/work)
- [Blog](https://markitme.ca/blog)
- [Contact](https://markitme.ca/contact)

## Products

- [Web Design and Development](https://markitme.ca/products/web-design-development)
- [SEO Services](https://markitme.ca/products/seo-services)
- [Social Media Marketing](https://markitme.ca/products/social-media-marketing)
- [Brand Marketing](https://markitme.ca/products/brand-marketing)
- [Video Production](https://markitme.ca/products/video-production)
- [Content Marketing](https://markitme.ca/products/content-marketing)
- [Photography](https://markitme.ca/products/photography)
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Link":
        '</llms.md>; rel="alternate"; type="text/markdown", </llms.txt>; rel="alternate"; type="text/plain"',
    },
  });
}
