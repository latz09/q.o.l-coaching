/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'img.youtube.com',
			},
		],
	},
};

export default nextConfig;
