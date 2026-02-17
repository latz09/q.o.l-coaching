import { Analytics } from '@vercel/analytics/next';


import { mainLayoutMetadata } from '@/lib/seo/mainLayoutMetadata';
import NavigationContainer from '@/components/layout/navigation/NavigationContainer';
import './globals.css';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
	variable: '--font-urbanist',
});

export const metadata = {
	metadataBase: new URL(mainLayoutMetadata.siteUrl),
	applicationName: mainLayoutMetadata.name,
	title: {
		default: mainLayoutMetadata.title,
		template: mainLayoutMetadata.titleTemplate,
	},
	description: mainLayoutMetadata.description,
	keywords: mainLayoutMetadata.keywords,
	icons: {
		icon: mainLayoutMetadata.favicon,
	},
	openGraph: {
		title: mainLayoutMetadata.title,
		description: mainLayoutMetadata.description,
		url: mainLayoutMetadata.siteUrl,
		siteName: mainLayoutMetadata.name,
		images: [
			{
				url: mainLayoutMetadata.ogImage,
				width: 1200,
				height: 630,
			},
		],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: mainLayoutMetadata.title,
		description: mainLayoutMetadata.description,
		creator: mainLayoutMetadata.twitterHandle,
		images: [mainLayoutMetadata.ogImage],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`min-h-screen ${urbanist.variable}`}>
				<NavigationContainer />
				{children}
				<Analytics />
				
			</body>
		</html>
	);
}