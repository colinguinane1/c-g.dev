import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm";
 
/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: {
    dark: "github-dark-dimmed",
    light: "one-light",
  },
  keepBackground: false,
  highlight: {
    // Example: Highlight lines 2 and 4 in the code blocks
    // This can be dynamically applied if your MDX files include this pattern
    "2, 4": { className: "highlighted-line" },
  },
  
};
 
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
 
/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true ,  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
  
      },
      {
        protocol: 'https',
        hostname: 'external-content.duckduckgo.com',
      },
      {
protocol: 'https',
hostname: 'gktuazxnjcwahdrwuchb.supabase.co'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      }
    ],
  },
};
 
export default withMDX(nextConfig);