// /components/ui/ContactForm.jsx
'use client';
import { useContactForm } from '../hooks/useContactForm';
import FormSuccessMessage from './FormSuccessMessage';
import { GoArrowRight } from 'react-icons/go';

const ContactForm = ({ buttonText }) => {
	const {
		formData,
		status,
		errorMessage,
		isSubmitting,
		handleChange,
		handleSubmit,
        resetForm,
	} = useContactForm();

	return (
		<div>
			<p className='text-paragraph-md font-medium text-dark mb-1.5'>
				Fill out the form below
			</p>

			<div className='relative'>
				<form onSubmit={handleSubmit} className='space-y-1'>
					<input
						type='text'
						name='name'
						placeholder='Name (first and last)*'
						required
						value={formData.name}
						onChange={handleChange}
						className='form-input'
					/>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
						<input
							type='email'
							name='email'
							placeholder='Email*'
							required
							value={formData.email}
							onChange={handleChange}
							className='form-input'
						/>
						<input
							type='tel'
							name='phoneNumber'
							placeholder='Phone'
							value={formData.phoneNumber}
							onChange={handleChange}
							className='form-input'
						/>
					</div>

					<textarea
						name='message'
						placeholder='Message: What would you like support with?*'
						rows={4}
						value={formData.message}
						onChange={handleChange}
						className='form-input resize-none'
					/>

					<p className='text-caption text-dark/60 italic'>*Required field</p>

					{errorMessage && (
						<p className='text-red-600 text-paragraph-sm'>{errorMessage}</p>
					)}

					<button
						type='submit'
						disabled={isSubmitting}
						className='group text-primary border-green-light hover:text-light hover:border-primary rounded-full px-1.5 py-0.75 font-semibold inline-flex items-center gap-0.5 justify-center transition-all duration-300 text-button disabled:opacity-50 disabled:cursor-not-allowed'
						style={{
							background:
								'linear-gradient(270deg, #F1EADD -69.75%, #79B860 96.86%)',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background =
								'linear-gradient(84deg, #396029 47.28%, #79B860 122.16%)';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background =
								'linear-gradient(270deg, #F1EADD -69.75%, #79B860 96.86%)';
						}}
					>
						<GoArrowRight className='max-w-0 opacity-0 transition-all duration-700 group-hover:max-w-[1.5rem] group-hover:opacity-100' />
						<span>{isSubmitting ? 'Sending...' : buttonText || 'Submit'}</span>
						<GoArrowRight className='max-w-[1.5rem] opacity-100 transition-all duration-700 group-hover:max-w-0 group-hover:opacity-0' />
					</button>
				</form>

				{status === 'success' && (
					<div className='absolute inset-0 flex items-center justify-center bg-sand/80 backdrop-blur-sm rounded z-10'>
						<FormSuccessMessage onClose={resetForm} />
					</div>
				)}
			</div>
		</div>
	);
};

export default ContactForm;
