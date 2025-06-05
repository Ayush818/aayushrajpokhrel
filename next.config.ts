import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  basePath: '/aayushrajpokhrel',
  trailingSlash: true,         // ensures correct linking of CSS/JS


};

export default nextConfig;
