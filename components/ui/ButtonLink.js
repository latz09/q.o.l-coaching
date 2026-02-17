'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { track } from '@vercel/analytics';
import { useEffect, useRef, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';

const LinkArrow = ({ className }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 17 12'
		fill='none'
		className={className}
		preserveAspectRatio='none'
	>
		<path
			d='M10.032 0.707153L15.1633 5.8383M15.1633 5.8383L10.032 10.9697M15.1633 5.8383H-0.000100467'
			stroke='currentColor'
			strokeWidth='2'
		/>
	</svg>
);

const VARIANTS = {
	'primary-on-light': {
		className:
			'text-primary border border-green-light hover:text-light hover:border-primary rounded-full px-1.5 py-0.75',
		style: { background: 'linear-gradient(270deg, #F1EADD -69.75%, #79B860 96.86%)' },
		hoverStyle: { background: 'linear-gradient(84deg, #396029 47.28%, #79B860 122.16%)' },
	},
	'secondary-on-light': {
		className:
			'bg-transparent text-primary border border-primary hover:bg-primary hover:text-light rounded-full px-1.5 py-0.75',
	},
	'link-on-light': {
		className: 'text-green-dark hover:underline hover:underline-offset-4 font-[700]',
	},
	'primary-on-dark': {
		className:
			'text-primary border border-green-light hover:text-light hover:border-green-dark rounded-full px-1.5 py-0.75',
		style: { background: 'linear-gradient(270deg, #F1EADD -69.75%, #79B860 96.86%)' },
		hoverStyle: { background: 'linear-gradient(84deg, #396029 47.28%, #79B860 122.16%)' },
	},
	'secondary-on-dark': {
		className:
			'bg-transparent text-light border border-light hover:bg-green-dark hover:text-light hover:border-green-dark rounded-full px-1.5 py-0.75',
	},
	'link-on-dark': {
		className: 'text-yellow-light hover:underline hover:underline-offset-4',
	},
};

const isLinkVariant = (variant) => variant?.includes('link');

export default function ButtonLink({
	href = '/',
	variant = 'primary-on-light',
	className = '',
	event,
	children,
	...props
}) {
	const pageLoadTime = useRef(null);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		pageLoadTime.current = Date.now();
	}, []);

	const variantConfig = VARIANTS[variant] || VARIANTS['primary-on-light'];
	const isLink = isLinkVariant(variant);

	const baseStyles = clsx(
		'inline-flex items-center gap-0.5 justify-center transition-all duration-300 group',
		isLink ? '' : 'text-button'
	);

	const combined = clsx(baseStyles, variantConfig.className, className);

	const inlineStyle = isHovered && variantConfig.hoverStyle
		? variantConfig.hoverStyle
		: variantConfig.style || {};

	const handleClick = () => {
		if (event) {
			const timeOnPage = pageLoadTime.current
				? Math.round((Date.now() - pageLoadTime.current) / 1000)
				: 0;
			track(`CTA Click - ${event}`, {
				destination: href,
				buttonText: typeof children === 'string' ? children : 'button',
				timeOnPage: `${timeOnPage}s`,
			});
		}
	};

	return (
		<Link
			href={href}
			onClick={handleClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={combined}
			style={inlineStyle}
			{...props}
		>
			{isLink ? (
				<>
					{children}
					<LinkArrow className='h-[0.75rem] w-[1.25rem] transition-all duration-700 group-hover:w-[1.5rem] ' />
				</>
			) : (
				<>
					<GoArrowRight className='max-w-0 opacity-0 transition-all duration-700 group-hover:max-w-[1.5rem] group-hover:opacity-100' />
					<span>{children}</span>
					<GoArrowRight className='max-w-[1.5rem] opacity-100 transition-all duration-700 group-hover:max-w-0 group-hover:opacity-0' />
				</>
			)}
		</Link>
	);
}