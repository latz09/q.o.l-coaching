import SectionContainer from '../animations/SectionContainer';
import SanityImage from '../ui/SanityImage';

const WhatBringsYouHere = ({ data }) => {
	const { heading, image, questions } = data;

	return (
		<SectionContainer className="">
			<div className='flex flex-col lg:flex-row gap-2 lg:gap-8 px-1.25 lg:px-0.25'>
				{/* Content */}
				<div className='lg:w-1/2 space-y-1.25 md:space-y-1.5 lg:space-y-3'>
					<h3 className="">{heading}</h3>

					<div className='flex flex-col gap-1.25 md:gap-1.5 lg:gap-3'>
						{questions?.map((question, index) => (
							<p key={index} className='text-paragraph-lg font-[500]  '>
								{question}
							</p>
						))}
					</div>
				</div>
				{/* Image */}
				<div className='relative lg:w-1/2 min-h-[300px] lg:min-h-0 '>
					<SanityImage
						image={image}
						alt={heading}
						fill
						className='rounded'
					/>
				</div>

				
			</div>
		</SectionContainer>
	);
};

export default WhatBringsYouHere;