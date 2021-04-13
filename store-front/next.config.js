const { STORE_URL } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/',
        destination: `${STORE_URL}`,
      },
      {
        source: '/:path*',
        destination: `${STORE_URL}/:path*`,
      },
    ]
  },
}