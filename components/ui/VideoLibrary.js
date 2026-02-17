'use client';
import { useState } from 'react';
import Image from 'next/image';
import TreeRingCenterLeft from '../svgs/TreeRingCenterLeft';
import TreeRingTopRight from '../svgs/TreeRingTopRight';

const getYouTubeId = (url) => new URL(url).searchParams.get('v');

const VideoLibrary = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [transitioning, setTransitioning] = useState(false);

	const videoId = getYouTubeId(data[activeIndex].url);

	const handleTabSwitch = (index) => {
		if (index === activeIndex) return;
		setTransitioning(true);
		setTimeout(() => {
			setActiveIndex(index);
			setIsPlaying(false);
			setTransitioning(false);
		}, 300);
	};

	return (
		<div className='max-w-[70rem] 3xl:max-w-[85rem] mx-auto flex flex-col-reverse md:flex-col gap-2'>
			{/* Tabs */}
			<div className='flex flex-col items-stretch w-fit mx-aut md:mx-0 md:flex-row gap-1.5 md:gap-3'>
				{data?.map((video, index) => (
					<button
						key={index}
						onClick={() => handleTabSwitch(index)}
						className={`flex items-center justify-center gap-0.5 px-1.5 py-0.5 rounded-full text-paragraph-sm font-medium transition-colors ${
							activeIndex === index
								? 'bg-[#F1EADD] text-dark'
								: 'text-white hover:text- border opacity-80 hover:opacity-100 transition duration-500'
						}`}
					>
						{activeIndex !== index && (
							<svg
								viewBox='0 0 24 24'
								fill='currentColor'
								className='size-1 md:hidden'
							>
								<path d='M8 5v14l11-7z' />
							</svg>
						)}
						{video.title}
					</button>
				))}
			</div>

			{/* Video with tree ring decorations */}
			<div className='relative'>
				{/* Tree Ring - Top Right */}
				<TreeRingTopRight className='absolute -top-[12%] -right-[7%] w-[40%] max-w-[380px] pointer-events-none z-0 hidden md:block' />

				{/* Tree Ring - Center Left */}
				<TreeRingCenterLeft className='absolute top-1/2 -translate-y-1/2 -left-[8%] w-[42%] max-w-[400px] pointer-events-none z-0 hidden md:block' />

				{/* Video Player */}
				<div
					className={`relative w-full aspect-video rounded overflow-hidden transition-opacity duration-300 z-10 ${transitioning ? 'opacity-0' : 'opacity-100'}`}
				>
					{isPlaying ? (
						<iframe
							src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							className='w-full h-full'
						/>
					) : (
						<button
							onClick={() => setIsPlaying(true)}
							className='relative w-full h-full group'
						>
							<Image
								src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
								alt={data[activeIndex].title}
								fill
								className='object-cover'
							/>
							{/* Play Button */}
							<div className='absolute inset-0 flex items-center justify-center'>
								<div className='size-[40px] lg:size-[48px] bg-yellow-light rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-lifted shadow-yellow-dark/75'>
									<svg
										viewBox='0 0 24 24'
										fill='white'
										className='size-2 lg:size-3'
									>
										<path d='M8 5v14l11-7z' />
									</svg>
								</div>
							</div>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default VideoLibrary;
