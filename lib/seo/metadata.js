export const metadata = {
  metadataBase: new URL('https://www.clientsite.com'),
  title: 'Client Name | Tagline',
  description: 'Your description here.',
  keywords: ['relevant', 'keywords'],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Client Name | Tagline',
    description: 'Your description here.',
    url: 'https://www.clientsite.com',
    siteName: 'Client Name',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Name | Tagline',
    description: 'Your description here.',
    images: ['/opengraph-image.png'],
  },
};