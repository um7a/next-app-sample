// import withMDX from "@next/mdx";
//
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
// };
//
// const mdx = withMDX({ extension: /\.mdx?$/ });
//
// export default mdx(nextConfig);

// const withMDX = require("@next/mdx")({
//   extension: /\.mdx$/,
// });
// module.exports = withMDX({
//   pageExtensions: ["ts", "tsx", "mdx"],
// });

import nextMdx from "@next/mdx";

const withMdx = nextMdx({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  options: {
    /* otherOptions… */
  },
});

const nextConfig = withMdx({
  // Support MDX files as pages:
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  output: "export",
});

export default nextConfig;
