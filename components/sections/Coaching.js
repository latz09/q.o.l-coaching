import SectionContainer from '../animations/SectionContainer';
import CoachingCard from '../ui/CoachingCard';
import SanityImage from '../ui/SanityImage';

const Coaching = ({ data }) => {
	const { heading, subheading, image, packages } = data;

	return (
		<SectionContainer id='coaching'>
			<div className='grid 2xl:flex gap-0.5 2xl:gap-5 mb-2 xl:mb-[3.5rem] px-1.25 lg:px-0.25'>
				<h3>{heading}</h3>
				<h6 className='mt-0.5'>{subheading}</h6>
			</div>
			<div id='schedule' className='grid lg:grid-cols-2 gap-[3.5rem]'>
				{packages?.map((packageItem, index) => (
					<CoachingCard key={index} data={packageItem} />
				))}
			</div>
			{image && (
				<div className='relative w-full h-[225px] lg:h-[425px] mt-[3.5rem] rounded overflow-hidden'>
					<SanityImage
						image={image}
						alt={heading || 'Coaching services'}
						fill
						sizes='100vw'
					/>
				</div>
			)}
		</SectionContainer>
	);
};

export default Coaching;