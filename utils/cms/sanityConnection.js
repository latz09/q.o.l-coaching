import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
	projectId:
		process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	apiVersion: '2024-12-01',
	useCdn: true,
	token: process.env.SANITY_VIEWER_TOKEN,
	stega: {
		studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
	},
});

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source) {
	return builder.image(source);
}
