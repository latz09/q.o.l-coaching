const SITE_URL = 'https://www.qolcoaching.com/';

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: '/cms-guide' },
    ],
  },
};