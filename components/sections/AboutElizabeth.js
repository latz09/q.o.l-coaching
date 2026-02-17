import SectionContainer from '../animations/SectionContainer';
import SanityImage from '../ui/SanityImage';

const AboutElizabeth = ({ data }) => {
	const { heading, headshot, paragraphs, credentials } = data;
	return (
		<SectionContainer fullBleed='bg-sand'>
			<div className='px-1.25 lg:px-0.25 py-4 lg:py-8.75 grid gap-2 lg:gap-4 lg:grid-cols-2'>
				<div className='relative min-h-[325px] lg:min-h-0 order-2 lg:order-1'>
					<SanityImage
						image={headshot}
						alt={heading}
						fill
						preset='portrait'
						className='rounded'
					/>
				</div>
				<div className='space-y-1.25 lg:space-y-2.5 order-1 lg:order-2'>
					<h2>{heading}</h2>
					<div className='space-y-1.5 lg:space-y-2'>
						{paragraphs?.map((paragraph, index) => (
							<p
								key={index}
								className={`${index === 0 ? 'text-paragraph-lg' : 'text-paragraph-sm '} text-dark`}
							>
								{paragraph}
							</p>
						))}
					</div>
					<div className='space-y-0.5 lg:space-y-1'>
						<h6>Pertinent Credentials</h6>
						<ul className='space-y-0.25 list-disc pl-0.75 lg:pl-1.25'>
							{credentials?.map((item, index) => (
								<li
									key={index}
									className='text-paragraph-sm text-dark marker:text-[0.45rem] lg:marker:text-[0.5em]'
								>
									{item.credential}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
};

export default AboutElizabeth;