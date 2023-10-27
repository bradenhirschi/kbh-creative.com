import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://www.kbh-creative.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.kbh-creative.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.kbh-creative.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
};

export default sitemap;
