import { SITE_URL } from '@/lib/seo/siteConfig';

export const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'ProfessionalService',
	name: 'Quality of Life Coaching, LLC',
	url: SITE_URL,
	description:
		'Transformational coaching and Biofield Tuning for medical providers, healthcare professionals, and caregivers.',
	image: `${SITE_URL}/opengraph-image.png`,
	email: 'QoLCoachingPA@gmail.com',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'South County',
		addressRegion: 'RI',
		addressCountry: 'US',
	},
	serviceType: [
		'Life Coaching',
		'Healthcare Provider Coaching',
		'Biofield Tuning',
	],
	founder: {
		'@type': 'Person',
		name: 'Elizabeth Mann',
		jobTitle:
			'Physician Assistant, Certified Coach & Biofield Tuning Practitioner',
	},
};
