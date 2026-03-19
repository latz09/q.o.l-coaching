import { SITE_URL } from '@/lib/seo/siteConfig';

export const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'ProfessionalService',
	name: 'Quality of Life Coaching, LLC',
	url: SITE_URL,
	description:
		'Coaching for medical providers by a medical provider. Specializing in burnout recovery, quality of life coaching, and Biofield Tuning for healthcare professionals.',
	image: `${SITE_URL}/opengraph-image.png`,
	email: 'QoLCoachingPA@gmail.com',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'South County',
		addressRegion: 'RI',
		addressCountry: 'US',
	},
	serviceType: [
		'Healthcare Provider Coaching',
		'Medical Provider Burnout Coaching',
		'Life Coaching',
		'Biofield Tuning',
	],
	founder: {
		'@type': 'Person',
		name: 'Elizabeth Mann',
		jobTitle:
			'Physician Assistant, Certified Coach & Biofield Tuning Practitioner',
	},
};