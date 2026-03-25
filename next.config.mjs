/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bserc.org',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      // If you also need to support http (not recommended for production):
      // {
      //   protocol: 'http',
      //   hostname: 'bserc.org',
      // },
    ],
  },
}

export default nextConfig