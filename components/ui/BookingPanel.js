// components/ui/BookingPanel.js
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { useBooking } from '../context/BookingContext';

const BookingPanel = () => {
	const { isOpen, bookingUrl, bookingTitle, variant, closeBooking } =
		useBooking();
	const [isLoading, setIsLoading] = useState(true);

	// lock body scroll when open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	// reset loading state when panel opens
	useEffect(() => {
		if (isOpen) setIsLoading(true);
	}, [isOpen]);

	// escape key to close
	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === 'Escape') closeBooking();
		};
		if (isOpen) window.addEventListener('keydown', handleEsc);
		return () => window.removeEventListener('keydown', handleEsc);
	}, [isOpen, closeBooking]);

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.7, ease: 'easeInOut' }}
						className='fixed inset-0 bg-primary/40 backdrop-blur-sm z-[998] cursor-pointer'
						onClick={closeBooking}
					/>

					{/* panel */}
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'tween', duration: 0.7, ease: 'easeInOut' }}
						className='fixed inset-0 z-[999] flex items-center justify-center p-0.75 lg:p-1 3xl:p-2.5'
					>
						<div
							className={`relative w-full h-full max-w-[1200px] rounded flex flex-col overflow-hidden shadow-2xl ${variant === 'dark' ? 'bg-dark border-t border-yellow-light/75' : 'bg-sand'}`}
						>
							{/* header */}
							<div className='flex items-center justify-between px-1 py-0.75'>
								<h6
									className={`truncate pr-1 ${variant === 'dark' ? 'text-light' : ''}`}
								>
									{bookingTitle || 'Book a session'}
								</h6>
								<button
									onClick={closeBooking}
									className={`p-0.25 rounded-full transition-colors ${variant === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
									aria-label='Close booking panel'
								>
									<IoClose
										className={`size-1.5 lg:size-2 ${variant === 'dark' ? 'text-light' : ''}`}
									/>
								</button>
							</div>

							{/* iframe */}
							<div className='flex-1 relative'>
								<AnimatePresence>
									{isLoading && (
										<motion.div
											className='absolute inset-0 flex items-center justify-center z-10'
											exit={{ opacity: 0 }}
											transition={{ duration: 0.3 }}
										>
											<motion.img
												src='/images/QOLC_Logo_Horizontal_White.png'
												alt='Loading'
												className='w-12 h-auto'
												animate={{
													scale: [1, 1.15, 1],
													opacity: [0.5, 1, 0.5],
												}}
												transition={{
													duration: 1.5,
													repeat: Infinity,
													ease: 'easeInOut',
												}}
											/>
										</motion.div>
									)}
								</AnimatePresence>
								<iframe
									src={bookingUrl}
									title={bookingTitle || 'Book a session'}
									className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
									loading='lazy'
									onLoad={() => setIsLoading(false)}
								/>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default BookingPanel;
