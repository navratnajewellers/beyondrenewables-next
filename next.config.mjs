/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/beyondrenewables-next",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
