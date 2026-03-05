'use client';

import { GoArrowRight } from 'react-icons/go';
import { useBooking } from '../context/BookingContext';
import { track } from '@vercel/analytics';

const SessionCard = ({ data }) => {
	const { openBooking } = useBooking();

	const handleClick = (session) => {
		track(`Biofield - ${session.title} - Schedule`, {
			destination: session.ctaLink,
			buttonText: session.ctaText,
		});
		openBooking(session.ctaLink, session.title, 'dark');
	};

	return (
		<div className='grid gap-2 md:grid-cols-2 max-w-[70rem] 3xl:max-w-[85rem] mx-auto'>
			{data?.map((session, index) => (
				<div
					key={index}
					onClick={() => handleClick(session)}
					className='group p-1.25 lg:p-2.5 rounded bg-[#F1EADD] hover:bg-[#132544] transition-colors duration-300 cursor-pointer'
				>
					<div className='flex justify-between items-center mb-1 lg:mb-1.5'>
						<h4 className='text-dark group-hover:text-white transition-colors duration-300'>
							{session.title}
						</h4>
						<h6 className='text-dark group-hover:text-white transition-colors duration-300'>
							{session.price}
						</h6>
					</div>
					{session.ctaText && session.ctaLink && (
						<div className='flex items-center gap-0.5 text-paragraph-lg font-[600] text-green-dark group-hover:text-green-light group-hover:translate-x-0.5 transition-all duration-500'>
							{session.ctaText}
							<GoArrowRight />
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default SessionCard;
