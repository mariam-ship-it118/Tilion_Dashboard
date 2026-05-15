import { useEffect } from "react";
import {
  TILION_BRAND,
  TILION_DEFAULT_DESCRIPTION,
  TILION_KEYWORDS,
  TILION_TITLE_SUFFIX,
} from "../seo/tilionSeo";

function upsertMeta(attrName, attrValue, content) {
  if (content == null || content === "") return;
  const sel = `meta[${attrName}="${attrValue}"]`;
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  const sel = `link[rel="${rel}"]`;
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets document title and core meta tags for Tilion admin routes.
 * @param {{ title?: string, description?: string, keywords?: string, noIndex?: boolean }} opts
 */
export function useTilionSEO({
  title,
  description = TILION_DEFAULT_DESCRIPTION,
  keywords = TILION_KEYWORDS,
  noIndex = false,
} = {}) {
  useEffect(() => {
    const pageTitle = title
      ? `${title}${TILION_TITLE_SUFFIX}`
      : `${TILION_BRAND} — Parent & Child Dashboard`;

    document.title = pageTitle;

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);
    upsertMeta("name", "author", TILION_BRAND);
    upsertMeta("name", "application-name", `${TILION_BRAND} Dashboard`);
    upsertMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    upsertMeta("property", "og:site_name", TILION_BRAND);
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");

    const path = window.location.pathname + window.location.search;
    const url = `${window.location.origin}${path}`;
    upsertMeta("property", "og:url", url);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);

    upsertLink("canonical", url);
  }, [title, description, keywords, noIndex]);
}

/** Renders nothing; updates head tags when props change. */
export default function SEO(props) {
  useTilionSEO(props);
  return null;
}
