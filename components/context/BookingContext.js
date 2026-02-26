// context/BookingContext.js
'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [bookingUrl, setBookingUrl] = useState('');
	const [bookingTitle, setBookingTitle] = useState('');
	const [variant, setVariant] = useState('light');

	const openBooking = useCallback((url, title = '', variant = 'light') => {
		setBookingUrl(url);
		setBookingTitle(title);
		setVariant(variant);
		setIsOpen(true);
	}, []);

	const closeBooking = useCallback(() => {
		setIsOpen(false);
		setTimeout(() => {
			setBookingUrl('');
			setBookingTitle('');
			setVariant('light');
		}, 300);
	}, []);

	return (
		<BookingContext.Provider
			value={{
				isOpen,
				bookingUrl,
				bookingTitle,
				variant,
				openBooking,
				closeBooking,
			}}
		>
			{children}
		</BookingContext.Provider>
	);
};

export const useBooking = () => {
	const context = useContext(BookingContext);
	if (!context)
		throw new Error('useBooking must be used within BookingProvider');
	return context;
};
