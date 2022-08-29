import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Luke's Blog",
    description: "A Melbourne based developers thoughts",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**/*.md"),
    stylesheet: "/rss/styles.xsl",
  });
