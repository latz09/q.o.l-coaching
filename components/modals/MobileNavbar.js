'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '../layout/navigation/MenuIcon';

const MobileNavbar = ({ data }) => {
	const { logoIcon, mobileMenuLogo, navLinks = [] } = data;
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => setIsNavOpen(!isNavOpen);

	useEffect(() => {
		if (isNavOpen) {
			const scrollY = window.scrollY;
			document.body.style.position = 'fixed';
			document.body.style.top = `-${scrollY}px`;
			document.body.style.left = '0';
			document.body.style.right = '0';
			document.body.style.overflow = 'hidden';
			document.body.dataset.scrollY = scrollY;
		} else {
			const scrollY = document.body.dataset.scrollY || '0';
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.left = '';
			document.body.style.right = '';
			document.body.style.overflow = '';
			window.scrollTo(0, parseInt(scrollY));
		}
	}, [isNavOpen]);

	const overlayVariants = {
		closed: { opacity: 0 },
		open: { opacity: 1 },
	};

	const menuVariants = {
		closed: { x: '100%' },
		open: { x: '0%' },
	};

	const linkContainerVariants = {
		closed: { opacity: 0 },
		open: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08,
				delayChildren: 0.2,
			},
		},
	};

	const linkVariants = {
		closed: { x: 5, opacity: 0 },
		open: { x: 0, opacity: 1 },
	};

	return (
		<div className='lg:hidden relative z-20'>
			<header className='flex items-center justify-between'>
				{logoIcon?.asset?.url && (
					<Image
						src={logoIcon.asset.url}
						alt='Q.O.L.C'
						height={170}
						width={170}
						blurDataURL={logoIcon.asset.metadata?.lqip}
					/>
				)}
				
					<MenuIcon
						isNavOpen={isNavOpen}
						toggleNav={toggleNav}
						variant='default'
					/>
				
			</header>

			<AnimatePresence>
				{isNavOpen && (
					<>
						<motion.div
							className='fixed inset-0 bg-yellow-light/30 backdrop-blur-[1px] z-[9998]'
							variants={overlayVariants}
							initial='closed'
							animate='open'
							exit='closed'
							transition={{ duration: 0.3 }}
							onClick={toggleNav}
						/>

						<motion.nav
							className='fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-gradient-to-br from-blue-dark via-blue-dark/95 to-blue-dark/95  z-[9999] shadow-xl'
							variants={menuVariants}
							initial='closed'
							animate='open'
							exit='closed'
							transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
							onClick={(e) => e.stopPropagation()}
							role='dialog'
							aria-modal='true'
						>
							<div className='flex flex-col h-full px-xs py-xs'>
								<div className='flex items-center justify-between mb-xl'>
									{mobileMenuLogo?.asset?.url && (
										<Image
											src={mobileMenuLogo.asset.url}
											alt='Q.O.L.C'
											height={80}
											width={80}
											className='opacity-90'
											blurDataURL={mobileMenuLogo.asset.metadata?.lqip}
										/>
									)}
									{/* <MenuIcon
										isNavOpen={isNavOpen}
										toggleNav={toggleNav}
										variant='light'
									/> */}
								</div>

								<motion.ul
									className='flex-1 space-y-0.5'
									variants={linkContainerVariants}
									initial='closed'
									animate='open'
								>
									{navLinks.map((link, index) => (
										<motion.li key={index} variants={linkVariants}>
											<Link
												href={`#${link.anchor}`}
												onClick={toggleNav}
												className='block py-0.75 text-light text-[1.25rem] border-b border-yellow-light transition-colors duration-300 hover:text-[#87A96B]'
											>
												{link.label}
											</Link>
										</motion.li>
									))}
								</motion.ul>
								<p className='text-caption text-white text-center mt-auto pb-1'>
									Woman Veteran owned and operated business
								</p>
							</div>
						</motion.nav>
					</>
				)}
			</AnimatePresence>
		</div>
	);
};

export default MobileNavbar;