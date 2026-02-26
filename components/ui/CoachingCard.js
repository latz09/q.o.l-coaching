// components/ui/CoachingCard.js
'use client';

import { GiCheckMark } from 'react-icons/gi';
import { useBooking } from '../context/BookingContext';
import { track } from '@vercel/analytics';

const CoachingCard = ({ data }) => {
  const { title, price, features, ctaText, ctaLink } = data;
  const { openBooking } = useBooking();

 const handleClick = () => {
    track(`${title} - Schedule`, {
      destination: ctaLink,
      buttonText: ctaText,
    });
    openBooking(ctaLink, title);
  };

  return (
    <div className='bg-sand rounded p-1.25 lg:p-2.5'>
      <div className='flex items-start justify-between gap-[1.75rem] lg:gap-[3.5rem] mb-1 lg:mb-1.5'>
        <h4>{title}</h4>
        <span className='text-xl font-semibold whitespace-nowrap'>{price}</span>
      </div>

      <div className='flex flex-col gap-0.5 mb-1.5'>
        {features?.map((feature, index) => (
          <div key={index} className='flex items-start gap-0.5'>
            <GiCheckMark className='text-dark mt-0.25 shrink-0' />
            <span className='text-paragraph-sm'>{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={handleClick}
        className='text-green-dark hover:underline hover:underline-offset-4 font-[700] inline-flex items-center gap-0.5 group'
      >
        {ctaText}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 17 12'
          fill='none'
          className='h-[0.75rem] w-[1.25rem] transition-all duration-700 group-hover:w-[1.5rem]'
          preserveAspectRatio='none'
        >
          <path
            d='M10.032 0.707153L15.1633 5.8383M15.1633 5.8383L10.032 10.9697M15.1633 5.8383H-0.000100467'
            stroke='currentColor'
            strokeWidth='2'
          />
        </svg>
      </button>
    </div>
  );
};

export default CoachingCard;