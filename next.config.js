module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com']
  },
  webpack: (config) => {
    config.output.hashFunction = 'sha256';
    return config;
  },
}
