// next-sitemap.config.js
module.exports = {
	siteUrl: 'https://www.qolc.latzwebdesign.com',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
		],
	},
};