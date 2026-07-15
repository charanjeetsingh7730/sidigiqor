import React from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  jsonLdSchema?: Record<string, any>;
  breadcrumbSchema?: Record<string, any>;
}

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = "website",
  ogImage = "https://sidigiqor.com/assets/og-image.jpg",
  jsonLdSchema,
  breadcrumbSchema
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schemas */}
      {jsonLdSchema && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </>
  );
}
