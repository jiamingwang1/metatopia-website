/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
}

module.exports = nextConfig