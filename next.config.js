module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/all_products.html',
        destination: '/products',
        permanent: true,
      },
    ]
  }
}
