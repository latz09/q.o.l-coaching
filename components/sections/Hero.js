import SanityImage from '../ui/SanityImage';
import ButtonLink from '../ui/ButtonLink';
import SectionContainer from '../animations/SectionContainer';

const HeroSection = ({ data }) => {
	const {
		backgroundImage,
		logo,
		headline,
		subheadline,
		credentials,
		ctaText,
		ctaLink,
	} = data;

	return (
		<SectionContainer className=''>
			<section className='relative w-full  px-0.25 flex items-center justify-center  rounded'>
				{/* Background Image */}
				<div className='absolute inset-0 rounded'>
					<SanityImage
						image={backgroundImage}
						alt=''
						preset='hero'
						fill
						priority
						sizes='100vw'
						className='rounded'
					/>
					<div className='absolute inset-0 bg-dark/45 rounded' />
				</div>

				{/* Content */}
				<div className='relative z-10 flex flex-col items-center text-center text-white mt-10 lg:mt-[9rem] 3xl:mt-[18rem] md:mx-8 lg:mx-10 xl:mx-[18rem]'>
					{logo?.asset && (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='116'
							height='97'
							viewBox='0 0 116 97'
							fill='none'
						>
							<path
								d='M64.3442 19.8733C64.3442 30.849 55.4466 39.7466 44.4709 39.7466C33.4952 39.7466 24.5977 30.849 24.5977 19.8733C24.5977 8.89757 33.4952 0 44.4709 0C55.4466 0 64.3442 8.89757 64.3442 19.8733Z'
								fill='white'
							/>
							<path
								d='M0.000234062 39.2146C-0.0130367 38.5579 0.539826 38.02 1.19663 38.0155C48.4428 37.6936 51.7223 74.2394 106.553 67.2786C107.551 67.1519 108.312 68.2101 107.776 69.0612C106.365 71.3021 104.807 73.4403 103.113 75.4621C102.887 75.7326 102.551 75.8867 102.198 75.8867H14.5024C14.1496 75.8867 13.8139 75.7326 13.5873 75.4621C5.3382 65.6126 0.278831 53.0005 0.000234062 39.2146Z'
								fill='white'
							/>
							<path
								d='M113.29 24.8247C113.876 24.7767 114.417 25.1629 114.547 25.736C115.497 29.9147 116 34.2638 116 38.7301C116 47.0837 114.245 55.0272 111.083 62.2122C110.918 62.5875 110.569 62.8489 110.164 62.9085L107.695 63.2714C93.7692 65.3165 83.4172 64.5086 74.9809 62.2925C66.5153 60.0687 59.7283 56.3665 52.8743 52.2243C52.6187 52.0698 52.3631 51.9147 52.1074 51.759C51.3283 51.2847 51.3415 50.1493 52.1261 49.6842C69.8394 39.1859 85.6925 27.084 113.29 24.8247Z'
								fill='white'
							/>
							<path
								d='M19.9526 79.2814C18.8783 79.2814 18.3998 80.5669 19.1964 81.2878C24.1483 85.7688 29.8382 89.3716 36.0215 91.9328C43.1023 94.8658 50.6915 96.3753 58.3558 96.3753C66.02 96.3753 73.6092 94.8658 80.6901 91.9328C86.8742 89.3712 92.5649 85.7678 97.5172 81.2859C98.3135 80.5653 97.8357 79.2814 96.7618 79.2814C84.0386 79.2814 32.6816 79.2814 19.9526 79.2814Z'
								fill='white'
							/>
						</svg>
					)}

					<h1 className='text-light mt-3 mb-1'>{headline}</h1>

					<h6 className='text-light  mb-0.75'>{subheadline}</h6>

					<p className='text-paragraph-sm text-light mb-2.5'>{credentials}</p>
					<div className='mb-6'>
						<ButtonLink
							href={ctaLink || '#schedule'}
							variant='primary-on-light'
							event='Hero Schedule'
						>
							{ctaText}
						</ButtonLink>
					</div>
				</div>
			</section>
		</SectionContainer>
	);
};

export default HeroSection;
