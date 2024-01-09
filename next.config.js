// next.config.js
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  exportTrailingSlash: true,
  exportPathMap: () => ({
    '/': { page: '/' },
    '/樱花背景源码': { page: '/樱花背景源码' },
  }),
};
