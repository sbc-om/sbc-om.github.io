import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "SBC",
  tagline: "Top-quality Hardware Tools",
  description: "SBC offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short: "SBC offers top-tier hardware tools and expert construction services to meet all your project needs.",
  url: "https://sbc.om",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Advanced Software Solutions & Blockchain Development`,
  description: "Elevate your business with Senior Blockchain's comprehensive software development services. From decentralized applications to custom Web3/5 solutions, Senior Blockchain delivers tailored, scalable, and secure software designed to meet the needs of modern enterprises. Partner with us for cutting-edge technology and seamless integration.",
  image: ogImageSrc,
};
