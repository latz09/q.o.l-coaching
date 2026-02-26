// /hooks/useContactForm.js
import { useState } from 'react';
import { track } from '@vercel/analytics';

const initialFormData = {
	name: '',
	email: '',
	phoneNumber: '',
	message: '',
};

export const useContactForm = () => {
	const [formData, setFormData] = useState(initialFormData);
	const [status, setStatus] = useState('idle');
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('submitting');
		setErrorMessage('');

		try {
			const res = await fetch('/api/submitContactForm', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			const data = await res.json();

			if (!res.ok || !data.success) {
				throw new Error(data.message || 'Something went wrong.');
			}

			setStatus('success');
			track('Contact - Form Submit');
			setFormData(initialFormData);
		} catch (err) {
			setStatus('error');
			setErrorMessage(err.message || 'Something went wrong. Please try again.');
		}
	};

	const isSubmitting = status === 'submitting';

	const resetForm = () => {
		setStatus('idle');
		setFormData(initialFormData);
		setErrorMessage('');
	};

	return {
		formData,
		status,
		errorMessage,
		isSubmitting,
		handleChange,
		handleSubmit,
		resetForm,
	};


};
