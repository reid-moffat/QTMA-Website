module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/all_products.html',
        destination: '/all_products',
        permanent: true,
      },
      {
        source: '/history.html',
        destination: '/history',
        permanent: true,
      },
      {
        source: '/team.html',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/placements.html',
        destination: '/placements',
        permanent: true,
      },
      {
        source: '/reports.html',
        destination: '/reports',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}
