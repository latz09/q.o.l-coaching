import SectionContainer from '../animations/SectionContainer';
import SessionCard from '../ui/SessionCard';
import VideoLibrary from '../ui/VideoLibrary';
import { GiCheckMark } from "react-icons/gi";
    
const BiofieldTuning = ({ data }) => {
	const {
		heading,
		paragraphs,
		youtubeVideos,
		sessionHeading,
		sessionSubheading,
		sessionBullets,
		packages,
	} = data;
	return (
		<SectionContainer fullBleed='bg-primary' className=' py-4 lg:py-8.75 '>
			<div className='grid gap-1 lg:gap-2 px-1.25 lg:px-0.25'>
				<h2 className='text-white'>{heading}</h2>
				<div className='grid  gap-1.5 lg:flex lg:gap-4'>
					{paragraphs?.map((paragraph, index) => (
						<p
							key={index}
							className={`${index === 0 ? 'text-paragraph-lg' : 'text-paragraph-sm '} text-white`}
						>
							{paragraph}
						</p>
					))}
				</div>
				<div className='my-2'>
					<VideoLibrary data={youtubeVideos} />
				</div>
				<div className="max-w-[70rem] 3xl:max-w-[85rem] mx-auto space-y-1 lg:space-y-2">
					<h3 className='text-light'>{sessionHeading}</h3>
					<div className='grid gap-1.5 lg:flex lg:gap-4'>
						<p className='text-white lg:w-1/2 text-paragraph-sm'>{sessionSubheading}</p>
						<ul className='text-white lg:w-1/2 space-y-0.25'>
							{sessionBullets?.map((bullet, index) => (
								<li key={index} className='flex items-center gap-0.5 text-paragraph-sm text-light'>
									<GiCheckMark className='text-yellow-light size-0.75'  />
									{bullet}
								</li>
							))}
						</ul>
					</div>
				</div>
                <div className="mt-2.5 ">
                    <SessionCard data={packages} />
                </div>
			</div>
		</SectionContainer>
	);
};

export default BiofieldTuning;
