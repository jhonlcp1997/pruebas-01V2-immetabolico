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
  async redirects() {
    return [
        {
            source: '/products',
            destination: '/products/children',
            permanent: true,
        },
        {
          source: '/blogs',
          destination: '/blogs/popular',
          permanent: true,
      },
    ];
},
}

module.exports = nextConfig
