import SectionContainer from '../animations/SectionContainer';
import TreeRingsDecoration from '../svgs/TreeRingsDecoration';

const parseFormatting = (text) => {
	const parts = [];
	const regex = /(\*_(.+?)_\*)|(\*(.+?)\*)|(_(.+?)_)/g;
	let lastIndex = 0;
	let match;

	while ((match = regex.exec(text)) !== null) {
		if (match.index > lastIndex) {
			parts.push(match.input.slice(lastIndex, match.index));
		}

		if (match[1]) {
			parts.push(<strong key={match.index}><em>{match[2]}</em></strong>);
		} else if (match[3]) {
			parts.push(<strong key={match.index}>{match[4]}</strong>);
		} else if (match[5]) {
			parts.push(<em key={match.index}>{match[6]}</em>);
		}

		lastIndex = regex.lastIndex;
	}

	if (lastIndex < text.length) {
		parts.push(text.slice(lastIndex));
	}

	return parts;
};

const IntroductionSection = ({ data }) => {
	const { heading, subheading, questions, inclusivityLine } = data || {};

	return (
		<SectionContainer
			id='introduction'
			fullBleed='bg-gradient-to-b from-light to-sand'
			className=' pb-4 lg:pb-8.75 space-y-2 lg:space-y-4 relative'
		>
			{' '}
			<div className="lg:w-2/3 px-1.25 lg:px-0.25 z-20">
				<h3 className='mb-2'>{heading}</h3>
				<div className='space-y-1 lg:space-y-1.25'>
					{questions?.map((question, index) => (
						<p className='text-paragraph-lg' key={index}>
							{parseFormatting(question)}
						</p>
					))}
				</div>
			</div>
			<div className='space-y-1.5 lg:space-y-2 px-1.25 lg:px-0.25 lg:w-2/3 ml-auto z-20'>
				<h5 className=''>{subheading}</h5>
				<p className='text-paragraph-lg font-[600] lg:text-end text-yellow-dark'>
					{inclusivityLine}
				</p>
			</div>
			<TreeRingsDecoration className='absolute top-0 right-0 w-1/2 hidden lg:block lg:w-[30%] 3xl:w-[23%] text-yellow-light pointer-events-none rotate-180' />
		</SectionContainer>
	);
};

export default IntroductionSection;