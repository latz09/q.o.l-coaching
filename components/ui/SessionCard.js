import { GoArrowRight } from 'react-icons/go';

const SessionCard = ({ data }) => {
	return (
		<div className='grid gap-2 md:grid-cols-2 max-w-[70rem] 3xl:max-w-[85rem] mx-auto'>
			{data?.map((session, index) => (
				<div
					key={index}
					className={`p-1.25 lg:p-2.5 rounded ${index === 0 ? 'bg-[#F1EADD]' : 'bg-[#132544] text-white'}`}
				>
					<div className='flex justify-between items-center mb-1 lg:mb-1.5'>
						<h4 className={index === 0 ? 'text-dark' : 'text-white'}>
							{session.title}
						</h4>
						<h6 className={index === 0 ? 'text-dark' : 'text-white'}>
							{session.price}
						</h6>
					</div>
					{session.ctaText && (
						<button
							className={` hover:translate-x-0.5 transition-transform duration-500 flex items-center gap-0.5 text-paragraph-lg font-[600] ${index === 0 ? 'text-green-dark flex-row-reverse' : 'text-green-light'}`}
						>
							{session.ctaText}
							<GoArrowRight className='' />
						</button>
					)}
				</div>
			))}
		</div>
	);
};

export default SessionCard;
