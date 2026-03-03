import SectionContainer from '../animations/SectionContainer';
import TreeRingsDecoration from '../svgs/TreeRingsDecoration';

const IntroductionSection = ({ data }) => {
	const { heading, subheading, questions, inclusivityLine } = data || {};

	return (
		<SectionContainer
			id='introduction'
			fullBleed='bg-gradient-to-b from-light to-sand'
			className=' pb-4 lg:pb-8.75 space-y-2.5 relative'
		>
			<div className='space-y-2 lg:space-y-4 px-1.25 lg:px-0.25 '>
				<h2 className="">{heading}</h2>
				<h5 className='lg:w-2/3'>{subheading}</h5>
			</div>
			<div className='lg:w-2/3 ml-auto space-y-1 lg:space-y-1.25 px-1.25 lg:px-0.25 '>
				{questions?.map((question, index) => (
					<p className="text-paragraph-lg" key={index}>{question}</p>
				))}
				<p className='text-paragraph-lg font-[600] text-yellow-dark'>{inclusivityLine}</p>
			</div>
            <TreeRingsDecoration className='absolute -bottom-2  left-0 w-1/2 hidden lg:block lg:w-[30%] 3xl:w-[23%] text-yellow-light pointer-events-none' />
		</SectionContainer>
	);
};

export default IntroductionSection;
