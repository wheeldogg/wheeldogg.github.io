import twigPlugin from "@web-alchemy/eleventy-plugin-twig";

export default function (eleventyConfig) {
  // Twig templating plugin
  eleventyConfig.addPlugin(twigPlugin, {
    twigOptions: {
      allowInlineIncludes: true,
      namespaces: {
        includes: "src/_includes",
      },
    },
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy({ public: "./" });

  // Watch targets for development
  eleventyConfig.addWatchTarget("./src/_styles/");
  eleventyConfig.addWatchTarget("./src/_scripts/");

  // BrowserSync config for dev server
  eleventyConfig.setServerOptions({
    domDiff: false,
    port: 8080,
  });

  // Global data
  eleventyConfig.addGlobalData("env", {
    devMode: process.env.NODE_ENV !== "production",
  });

  eleventyConfig.addGlobalData("site", {
    title: "Wheeldogg",
    tagline: "Music | Software | Nature | Visual Arts",
    author: "Wheeldogg",
    url: "https://wheeldogg.com",
  });

  // Navigation
  eleventyConfig.addGlobalData("navigation", [
    { title: "Home", url: "/" },
    { title: "About", url: "/about/" },
    { title: "Music", url: "/music/" },
    { title: "Software", url: "/software/" },
    { title: "Nature", url: "/nature/" },
    { title: "Gallery", url: "/gallery/" },
    { title: "Blog", url: "/blog/" },
  ]);

  // Categories for content
  eleventyConfig.addGlobalData("categories", [
    { slug: "music", title: "Music", icon: "music", color: "violet" },
    { slug: "software", title: "Software", icon: "code", color: "cyan" },
    { slug: "nature", title: "Nature", icon: "leaf", color: "green" },
    { slug: "photography", title: "Photography", icon: "camera", color: "rose" },
    { slug: "drone", title: "Drone", icon: "drone", color: "sky" },
  ]);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "twig",
  };
}
