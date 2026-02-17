'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DesktopNavbar = ({ data }) => {
	const { logoIcon, navLinks = [] } = data;
	const [isHovered, setIsHovered] = useState(false);

	const mainLinks = navLinks.slice(0, -1);
	const lastLink = navLinks[navLinks.length - 1];

	return (
		<div className='hidden lg:flex items-center justify-between'>
			{logoIcon?.asset?.url && (
				<Image
					src={logoIcon.asset.url}
					alt='Q.O.L.C'
					height={225}
					width={225}
					blurDataURL={logoIcon.asset.metadata?.lqip}
				/>
			)}
			<nav className='flex items-center gap-3'>
				{mainLinks.map((link, index) => (
					<Link
						key={index}
						href={`#${link.anchor}`}
						className='block text-[1.25rem] font-[600] transition-all duration-200 cursor-pointer'
					>
						{link.label}
					</Link>
				))}
				{lastLink && (
					<Link
						href={`#${lastLink.anchor}`}
						className='block text-light border border-dark bg-dark hover:text-dark hover:bg-light transition duration-500 rounded-full px-2 py-0.5 font-[600]'
					
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						{lastLink.label}
					</Link>
				)}
			</nav>
		</div>
	);
};

export default DesktopNavbar;