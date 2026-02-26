import { sanityClient } from './sanityConnection';
import { draftMode } from 'next/headers';
 
export async function fetchContent(query, params = {}) {
  try {
    const { isEnabled } = await draftMode();
 
    const data = await sanityClient.fetch(
      query,
      params,
      isEnabled
        ? {
            perspective: 'drafts',
            useCdn: false,
            stega: true,
          }
        : undefined
    );
 
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
}
