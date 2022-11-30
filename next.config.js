/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'referrerpolicy',
    value: 'no-referrer-when-downgrade'
  },
  {
    key: 'allowfullscreen',
    value: ''
  }
]

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
