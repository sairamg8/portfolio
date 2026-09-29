import { personalData } from "@/utils/data/personal-data";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${personalData.siteUrl}/sitemap.xml`,
  };
}
