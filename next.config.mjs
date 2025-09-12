/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // опционально:
  // trailingSlash: true, // если нужен /en/ вместо /en
};
export default nextConfig;
