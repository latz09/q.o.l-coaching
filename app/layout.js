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
		'Quality of Life Coaching | Coaching & Biofield Tuning for Medical Providers',
	description:
		'Transformational coaching and Biofield Tuning for medical providers, healthcare professionals, and caregivers. Remote sessions with Elizabeth Mann, PA-C. Practical tools for burnout recovery and whole-life wellness.',
	keywords: [
		'coaching for medical providers',
		'healthcare professional coaching',
		'physician assistant coach',
		'medical provider burnout recovery',
		'biofield tuning practitioner',
		'biofield tuning remote sessions',
		'transformational coaching',
		'intuitive coaching',
		'energy medicine practitioner',
		'coaching for healthcare workers',
		'coaching for therapists',
		'quality of life coaching',
	],
	icons: { icon: '/favicon.ico' },
	openGraph: {
		title:
			'Quality of Life Coaching | Coaching & Biofield Tuning for Medical Providers',
		description:
			'Transformational coaching and Biofield Tuning for medical providers, healthcare professionals, and caregivers. Remote sessions with Elizabeth Mann, PA-C.',
		url: SITE_URL,
		siteName: 'Quality of Life Coaching',
		images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Quality of Life Coaching | Coaching & Biofield Tuning for Medical Providers',
		description:
			'Transformational coaching and Biofield Tuning for medical providers, healthcare professionals, and caregivers.',
		images: ['/opengraph-image.png'],
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
