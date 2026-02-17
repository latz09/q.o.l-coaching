import ButtonLink from './ButtonLink';
import { GiCheckMark } from "react-icons/gi";

const CoachingCard = ({ data }) => {
	const { title, price, features, ctaText, ctaLink } = data;

	return (
		<div className='bg-sand rounded p-1.25 lg:p-2.5'>
			<div className='flex items-start justify-between gap-[1.75rem] lg:gap-[3.5rem] mb-1 lg:mb-1.5'>
				<h4>{title}</h4>
				<span className='text-xl font-semibold whitespace-nowrap'>{price}</span>
			</div>

			<div className='flex flex-col gap-0.5 mb-1.5'>
				{features?.map((feature, index) => (
					<div key={index} className='flex items-start gap-0.5'>
						<GiCheckMark className='text-dark mt-0.25 shrink-0' />
						<span className='text-paragraph-sm'>{feature}</span>
					</div>
				))}
			</div>

			<ButtonLink
				href={ctaLink || '#schedule'}
				variant='link-on-light'
				event={`Coaching - ${title}`}
			>
				{ctaText}
			</ButtonLink>
		</div>
	);
};

export default CoachingCard;
