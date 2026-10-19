import { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

interface PageSeoProps {
  title: string;
  description: string;
  path?: string;
  ogType?: "website" | "article";
}

export function constructMetadata({
  title,
  description,
  path = "",
  ogType = "website",
}: PageSeoProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: ogType,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@mindriftagency",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
