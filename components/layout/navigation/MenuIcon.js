'use client';

import { motion } from 'framer-motion';

const MenuIcon = ({ toggleNav, isNavOpen, variant = 'light' }) => {
	const barColor = isNavOpen ? 'bg-light' : variant === 'dark' ? 'bg-light' : 'bg-dark';

	return (
		<button
			className='z-[99999] p-0.5 relative'
			onClick={toggleNav}
			aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
		>
			<motion.div
				className='cursor-pointer w-[28px] h-[20px] relative'
				whileTap={{ scale: 0.95 }}
			>
				<span
					className={`absolute left-0 w-full h-[2px] ${barColor} transition-all duration-700 ease-out ${
						isNavOpen ? 'top-[9px] rotate-45' : 'top-0'
					}`}
				/>
				<span
					className={`absolute left-0 top-[9px] w-full h-[2px] ${barColor} transition-all duration-700 ease-out ${
						isNavOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
					}`}
				/>
				<span
					className={`absolute left-0 w-full h-[2px] ${barColor} transition-all duration-700 ease-out ${
						isNavOpen ? 'top-[9px] -rotate-45' : 'top-[18px]'
					}`}
				/>
			</motion.div>
		</button>
	);
};

export default MenuIcon;