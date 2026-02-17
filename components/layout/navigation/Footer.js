'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

const Footer = ({ data }) => {
	const { logo, tagline, location, disclaimer } = data;
	const textRef = useRef(null);
	const [textWidth, setTextWidth] = useState('auto');

	useEffect(() => {
		if (textRef.current) {
			setTextWidth(textRef.current.offsetWidth);
		}
	}, [tagline, location]);

	return (
		<div className='bg-gradient-to-t lg:bg-gradient-to-r from-primary via-primary/95 to-primary/90'>
			<div className='px-1.25 lg:px-0.25 pt-4 lg:pt-4 container grid  place-items-center lg:place-items-start lg:text-start text-center'>
				{logo?.asset?.url && (
					<Link href='/'>
						<Image
							src={logo.asset.url}
							alt='Q.O.L.C'
							height={275}
							width={275}
							blurDataURL={logo.asset.metadata?.lqip}
						/>
					</Link>
				)}
				<div ref={textRef} className='lg:w-fit'>
					<p className='text-paragraph-sm text-white mt-1.5'>{tagline}</p>
					<p className='text-paragraph-sm text-white mb-1.5 lg:mb-3.75'>
						{location}
					</p>
				</div>
				<div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-1.5 lg:gap-0 lg:w-full'>
					<p
						className='text-caption text-white'
						style={{ maxWidth: textWidth }}
					>
						{disclaimer}
					</p>
					<div className='grid place-items-center w-full lg:w-auto mt-1.25 lg:mt-0 '>
						<Link
							href='/#contact-form'
							className='bg-green-light rounded-full px-1.5 py-0.75 text-[1.125rem] font-[600] hover:opacity-90 transition duration-500 hover:text-white'
						>
							Contact me
						</Link>
					</div>
				</div>
			</div>
			<div className='bg-[#122546] mt-3 py-1.25'>
				<div className='container flex flex-col items-center gap-0.5 lg:grid lg:grid-cols-3 lg:items-center'>
					<p className='text-caption text-white/90'>
						© 2026 Quality of Life Coaching, LLC
					</p>
					<p className='text-caption text-white/90 text-center'>
						Powered by LatzWebDesign
					</p>
					<Link
						href='/privacy-policy'
						className='text-caption text-white/90 hover:underline hover:underline-offset-4 lg:text-right'
					>
						Privacy policy
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
