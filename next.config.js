const nextConfig = {
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "us-east-1.graphassets.com",
      },
    ],
  },
};

module.exports = nextConfig;
