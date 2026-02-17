import SectionContainer from '../animations/SectionContainer';
import QolcDecoration from '../svgs/LogoOutline';
import TreeRingsDecoration from '../svgs/TreeRingsDecoration';

const About = ({ data }) => {
	const { heading, subheading, paragraphs, inclusivityLine } = data;

	return (
		<SectionContainer className='px-1.25 lg:px-0.25' id='about'>
			<div className='relative bg-sand rounded px-2 lg:px-4 py-4 lg:py-8.75 overflow-hidden'>
				<QolcDecoration className='absolute top-1 md:top-2 right-0 w-1/2 lg:w-1/3 text-white pointer-events-none' />

				<div className='relative z-10'>
					<h2 className='mb-2 lg:mb-4'>{heading}</h2>
					<h4 className='md:w-3/4 mb-1.5 lg:mb-3'>{subheading}</h4>

					<div className='lg:ml-auto lg:w-2/3'>
						{paragraphs?.map((paragraph, index) => (
							<p key={index} className='mb-0.75 lg:mb-1.25 text-paragraph-sm'>
								{paragraph}
							</p>
						))}

						{inclusivityLine && (
							<p className='italic text-paragraph-sm text-yellow-dark font-[500] lg:font-[600]'>
								{inclusivityLine}
							</p>
						)}
					</div>
				</div>
                <TreeRingsDecoration className='absolute -bottom-5 md:-bottom-10 left-0 w-1/2 md:w-1/4 text-yellow-light pointer-events-none' />
			</div>
		</SectionContainer>
	);
};

export default About;