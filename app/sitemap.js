import { SITE_URL } from "./lib/metadata";

const publicRoutes = [
  "",
  "/achievements",
  "/presidents",
  "/tedx",
  "/archive",
  "/archive/documents",
  "/contact",
];

export default function sitemap() {
  return publicRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
