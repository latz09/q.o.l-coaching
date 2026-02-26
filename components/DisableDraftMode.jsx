'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { disableDraftMode } from '@/app/action';
import { useDraftModeEnvironment } from 'next-sanity/hooks';

export default function DisableDraftMode() {
	const router = useRouter();
	const [pending, startTransition] = useTransition();
	const environment = useDraftModeEnvironment();

	// Only show outside Presentation tool
	if (environment !== 'live' && environment !== 'unknown') {
		return null;
	}

	const disable = () =>
		startTransition(async () => {
			await disableDraftMode();
			router.refresh();
		});

	return (
		<div
			style={{
				position: 'fixed',
				bottom: '1rem',
				right: '1rem',
				zIndex: 9999,
			}}
		>
			{pending ? (
				'Disabling...'
			) : (
				<button onClick={disable}>Exit Preview Mode</button>
			)}
		</div>
	);
}
