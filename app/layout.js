import { Analytics } from '@vercel/analytics/next';
import { BookingProvider } from '@/components/context/BookingContext';
import BookingPanel from '@/components/ui/BookingPanel';
import NavigationContainer from '@/components/layout/navigation/NavigationContainer';
import './globals.css';
import { Urbanist } from 'next/font/google';
import JsonLd from '@/lib/seo/JsonLd';
import { organizationSchema } from '@/lib/seo/organizationSchema';
import { VisualEditing } from 'next-sanity/visual-editing';
import { draftMode } from 'next/headers';
import DisableDraftMode from '@/components/DisableDraftMode';
import { SITE_URL } from '@/lib/seo/siteConfig';

const urbanist = Urbanist({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
	variable: '--font-urbanist',
});

export const metadata = {
	metadataBase: new URL(SITE_URL),
	title:
		'Quality of Life Coaching | Coaching for Medical Providers by a Medical Provider',
	description:
		'Specialized coaching for medical providers, healthcare professionals, and caregivers — by a practicing PA-C. Practical tools for burnout recovery, clarity, and whole-life wellness. Remote sessions with Elizabeth Mann, PA-C.',
	keywords: [
		'coaching for medical providers',
		'healthcare provider burnout coaching',
		'physician assistant coach',
		'biofield tuning remote sessions',
		'biofield tuning practitioner',
		'medical provider wellness coaching',
		'quality of life coaching',
	],
	icons: { icon: '/favicon.ico' },
	openGraph: {
		title:
			'Quality of Life Coaching | Coaching for Medical Providers by a Medical Provider',
		description:
			'Specialized coaching for medical providers, healthcare professionals, and caregivers — by a practicing PA-C. Remote sessions with Elizabeth Mann, PA-C.',
		url: SITE_URL,
		siteName: 'Quality of Life Coaching',
		images: [
			{
				url: `${SITE_URL}/opengraph-image.png`,
				width: 1200,
				height: 630,
				alt: 'Quality of Life Coaching',
			},
		],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Quality of Life Coaching | Coaching for Medical Providers by a Medical Provider',
		description:
			'Specialized coaching for medical providers, healthcare professionals, and caregivers — by a practicing PA-C. Remote sessions with Elizabeth Mann, PA-C.',
		images: [`${SITE_URL}/opengraph-image.png`],
	},
};

export default async function RootLayout({ children }) {
	const { isEnabled } = await draftMode();

	return (
		<html lang='en'>
			<body className={`min-h-screen ${urbanist.variable}`}>
				<BookingProvider>
					<JsonLd data={organizationSchema} />
					<NavigationContainer />
					{children}
					<BookingPanel />
					<Analytics />
				</BookingProvider>
				{isEnabled && (
					<>
						<VisualEditing />
						<DisableDraftMode />
					</>
				)}
			</body>
		</html>
	);
}
