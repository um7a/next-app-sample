import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

const mdx = withMDX({ extension: /\.mdx$/ });

export default mdx(nextConfig);
