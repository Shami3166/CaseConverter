import { Helmet } from "react-helmet-async";

const Sitemap = () => {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://case-converter-tool.vercel.app/</loc>
    <lastmod>2025-10-07</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://case-converter-tool.vercel.app/about</loc>
    <lastmod>2025-10-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://case-converter-tool.vercel.app/contact</loc>
    <lastmod>2025-10-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://case-converter-tool.vercel.app/privacy-policy</loc>
    <lastmod>2025-10-07</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://case-converter-tool.vercel.app/terms-of-service</loc>
    <lastmod>2025-10-07</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://case-converter-tool.vercel.app/blog/how-to-change-text-case-google-docs</loc>
    <lastmod>2025-10-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://case-converter-tool.vercel.app/blog/how-to-change-text-case-google-sheets</loc>
    <lastmod>2025-10-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://case-converter-tool.vercel.app/blog/how-to-change-text-case-microsoft-word</loc>
    <lastmod>2025-10-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://case-converter-tool.vercel.app/blog/common-text-case-mistakes</loc>
    <lastmod>2025-10-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://case-converter-tool.vercel.app/blog/why-proper-capitalization-matters</loc>
    <lastmod>2025-10-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://case-converter-tool.vercel.app/blog/how-to-change-text-case-mobile</loc>
    <lastmod>2025-10-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  return (
    <>
      <Helmet>
        <title>Sitemap</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <pre>{sitemapContent}</pre>
    </>
  );
};

export default Sitemap;
