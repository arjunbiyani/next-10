const { DASHBOARD_URL } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/dashboard',
        destination: `${DASHBOARD_URL}/dashboard`,
      },
      {
        source: '/dashboard/:path*',
        destination: `${DASHBOARD_URL}/dashboard/:path*`,
      },
    ]
  },
}