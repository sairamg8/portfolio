import { personalData } from "@/utils/data/personal-data";

export default function sitemap() {
  const pages = [
    {
      url: personalData.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
  // /blog only exists when a dev.to username is configured.
  if (personalData.devUsername) {
    pages.push({
      url: `${personalData.siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    });
  }
  return pages;
}
