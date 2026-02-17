'use client';
import { useState } from 'react';
import SectionContainer from '../animations/SectionContainer';
import TreeRingsDecorationDark from '../svgs/TreeRingsDecorationDark';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
	return (
		<div className='border-t border-yellow-dark pt-1'>
			<button
				onClick={onClick}
				className='flex items-center justify-between w-full group'
			>
				<h6 className='text-left'>{question}</h6>
				<div className='relative size-[18px] shrink-0 ml-1'>
					<span className='absolute top-1/2 left-0 w-full h-[2px] bg-blue-dark -translate-y-1/2' />
					<span
						className={`absolute top-0 left-1/2 w-[2px] h-full bg-blue-dark -translate-x-1/2 transition-transform duration-500 ease-in-out ${
							isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
						}`}
					/>
				</div>
			</button>
			<div
				className={`grid transition-all duration-500 ease-in-out ${
					isOpen ? 'grid-rows-[1fr] opacity-100 pt-0.5' : 'grid-rows-[0fr] opacity-0'
				}`}
			>
				<div className='overflow-hidden'>
					<p className='text-paragraph-sm text-dark pb-1'>{answer}</p>
				</div>
			</div>
		</div>
	);
};

const FAQ = ({ data }) => {
	const { heading, items } = data;
	const [openIndex, setOpenIndex] = useState(0);

	const handleToggle = (index) => {
		setOpenIndex(openIndex === index ? -1 : index);
	};

	return (
		<SectionContainer fullBleed='bg-gradient-to-b from-sand to-transparent' id='faq'>
			<div className='relative px-1.25 lg:px-0.25 grid gap-2 lg:flex lg:gap-4'>
				{/* Tree Rings - bottom left behind heading */}
				<TreeRingsDecorationDark className='absolute -bottom-[15%] -left-[5%] w-[300px] lg:w-[400px] pointer-events-none z-0 hidden md:block opacity-100' />

				<h2 className='relative z-10 lg:w-2/5 lg:sticky top-2 self-start'>
					{heading}
				</h2>
				<div className='relative z-10 lg:w-3/5 space-y-1.5 lg:space-y-2'>
					{items?.map((item, index) => (
						<AccordionItem
							key={index}
							question={item.question}
							answer={item.answer}
							isOpen={openIndex === index}
							onClick={() => handleToggle(index)}
						/>
					))}
				</div>
			</div>
		</SectionContainer>
	);
};

export default FAQ;