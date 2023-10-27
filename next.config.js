/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "ingressdefi.infura-ipfs.io",
      "infura-ipfs.io",
      "apingressdefi.com",
      "https://apingressdefi.com", 
    ],
  },
};

module.exports = nextConfig;
