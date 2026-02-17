import { motion } from 'framer-motion';
import { GoX } from 'react-icons/go';

const FormSuccessMessage = ({ onClose }) => (
	<motion.div
		initial={{ opacity: 0, scale: 0.95 }}
		animate={{ opacity: 1, scale: 1 }}
		transition={{ duration: 0.3 }}
		className='relative flex items-center gap-0.75 bg-yellow-light shadow-card backdrop-blur-sm rounded p-1.5'
	>
		<button
			onClick={onClose}
			className='absolute top-0.5 right-0.5 text-dark/40 hover:text-dark transition-colors'
			aria-label='Close success message'
		>
			<GoX className='size-1.5' />
		</button>

		<div className='w-[2.5rem] h-[2.5rem] rounded-full bg-sand flex items-center justify-center shrink-0'>
			<motion.svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-[1.25rem] h-[1.25rem] text-primary'
				initial={{ pathLength: 0 }}
				animate={{ pathLength: 1 }}
				transition={{ duration: 0.4, delay: 0.2 }}
			>
				<motion.path
					d='M5 13l4 4L19 7'
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 0.4, delay: 0.2 }}
				/>
			</motion.svg>
		</div>
		<div>
			<p className='text-paragraph-lg mb-0.25 font-semibold text-dark'>Message sent!</p>
			<p className='text-paragraph-sm text-dark/60'>
				I&apos;ll be in touch soon.
			</p>
		</div>
	</motion.div>
);

export default FormSuccessMessage;