export const SITE_NAME = "Critical Thinking Club";
export const SITE_URL = "https://www.jlhsctc.org";
export const DEFAULT_DESCRIPTION =
  "The official website and institutional archive of the Critical Thinking Club at Jinling High School ZMB.";

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  index = true,
}) {
  const canonicalUrl = new URL(path, SITE_URL).toString();

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: {
      index,
      follow: index,
    },
  };
}
