// lib/docs-data.ts
export interface DocMetadata {
    title: string
    excerpt: string
    tags: string[]
    stability: 'stable' | 'in-dev' | 'experimental'
    slug: string
  }
  
  export const docsData: DocMetadata[] = [
    // {
    //   title: "About Horizon",
    //   excerpt: "Quick start guide for working with Horizon",
    //   tags: ["basics", "tutorial"],
    //   stability: "stable",
    //   slug: "about"
    // },
    // {
    //   title: "Contributor Intro",
    //   excerpt: "A starting point to learn about developing for Horizon",
    //   tags: ["basics", "contributor", "tutorial"],
    //   stability: "stable",
    //   slug: "dev-intro"
    // },
    // {
    //   title: "Plugin API",
    //   excerpt: "The Plugin API is an experimental feature of Horizon and is not recommended for use in production environments yet.",
    //   tags: [],
    //   stability: "experimental",
    //   slug: "plugin-api"
    // }
  ]