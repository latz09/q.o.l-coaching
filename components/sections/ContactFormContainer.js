import SectionContainer from '../animations/SectionContainer';
import ContactForm from '../ui/ContactForm';

const ContactFormContainer = ({ data }) => {
	const { heading, paragraphs, submitButtonText } = data;
  
	return (
		<SectionContainer className='px-1.25 lg:px-0.25' id='contact-form'>
			<div className=' bg-sand rounded px-2 lg:px-4 py-3 lg:py-[6.25rem] '>
				<div className=' grid gap-1.25 lg:flex lg:gap-2.25'>
					<div className='lg:w-2/5 space-y-0.75 lg:space-y-1.5'>
						<h3>{heading}</h3>
						<div className='space-y-0.25 lg:space-y-1.5'>
							{paragraphs?.map((paragraph, index) => (
								<p
									key={index}
									className={`${index === 0 ? 'text-paragraph-lg' : 'text-paragraph-sm'} text-dark`}
								>
									{paragraph}
								</p>
							))}
						</div>
					</div>
					<div className='lg:w-3/5'>
                            <ContactForm buttonText={submitButtonText} />
                    
                    </div>
				</div>
			</div>
		</SectionContainer>
	);
};

export default ContactFormContainer;
