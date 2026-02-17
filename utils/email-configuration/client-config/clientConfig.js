// /utils/client-configuration/clientConfig.js
export const clientConfig = {
	branding: {
		name: 'Q.O.L.C.',
		logoUrl: 'https://cdn.sanity.io/images/etke93qh/production/690978d5017f9d6d1a1e17184109d13f60606f8f-2360x661.png',
		contactInfo: {
			phone: '',
			email: process.env.CLIENT_EMAIL,
		},
		colors: {
			accent: '#5A8CE3',
			background: '#F1EADD',
			surface: '#ffffff',
		},
		// Email-safe font stacks:
		//
		// Clean/modern (default):
		//   -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
		//
		// Professional/traditional:
		//   Georgia, 'Times New Roman', Times, serif
		//
		// Friendly/rounded:
		//   Verdana, Geneva, Tahoma, sans-serif
		//
		// Corporate/neutral:
		//   'Trebuchet MS', 'Lucida Sans', Arial, sans-serif
		//
		// Warm/readable:
		//   Palatino, 'Palatino Linotype', 'Book Antiqua', Georgia, serif
		//
		// Technical/structured:
		//   'Courier New', Courier, monospace
		//
		// Common matches:
		//   Urbanist, Montserrat, Poppins → Verdana
		//   Playfair Display, Merriweather, Lora → Georgia
		font: 'Verdana, Geneva, Tahoma, sans-serif',
	},
	formFields: [
		{ name: 'name', label: 'Name', required: true, type: 'text' },
		{ name: 'email', label: 'Email', required: true, type: 'email' },
		{
			name: 'phoneNumber',
			label: 'Phone Number',
			required: false,
			type: 'tel',
		},
		{
			name: 'message',
			label: 'How can we help?',
			required: true,
			type: 'textarea',
		},
	],
	messaging: {
		clientEmailSubject: (name) => `New Email from ${name}`,
	},
};
