import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PROBLEMS } from "@/lib/problems";

export const dynamic = "force-static";

const ROUTES = [
  "",
  "/what-we-do",
  "/problems",
  "/experiments",
  "/insights",
  "/about",
  "/tell-us-a-problem",
  "/privacy",
  "/terms",
  "/cookies",
  ...PROBLEMS.map((p) => `/problems/${p.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
