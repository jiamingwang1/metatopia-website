/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['zh-CN', 'en'],
    defaultLocale: 'zh-CN',
  },
}

module.exports = nextConfig