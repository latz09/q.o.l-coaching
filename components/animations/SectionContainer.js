'use client';

import { motion } from 'framer-motion';

const SectionContainer = ({ children, className = '', fullBleed = '', id }) => {
	if (fullBleed) {
		return (
			<motion.section
				id={id}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 2 }}
				className={fullBleed}
			>
				<div className={`container ${className}`}>
					{children}
				</div>
			</motion.section>
		);
	}

	return (
		<motion.section
			id={id}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
			className={`container ${className}`}
		>
			{children}
		</motion.section>
		);
};

export default SectionContainer;