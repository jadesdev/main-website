import { defineSitemapEventHandler } from "#imports";
import type { SitemapUrlInput } from "#sitemap/types";
import servicesData from "~/content/services-data.json";

export default defineSitemapEventHandler(() => {
  const sitemapUrls: SitemapUrlInput[] = servicesData.map((item: any) => ({
    loc: `/services/${item.slug}`,
  }));
  return sitemapUrls;
});
