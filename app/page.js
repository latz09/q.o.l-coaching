import { fetchContent as f } from '@/utils/cms/fetchContent';
import { FETCH_HOMEPAGE_DATA_QUERY as Q } from '@/data/queries/pages/FETCH_HOME_PAGE_DATA_QUERY';

import SectionContainer from '@/components/animations/SectionContainer';
import About from '@/components/sections/About';
import AboutElizabeth from '@/components/sections/AboutElizabeth';
import BiofieldTuning from '@/components/sections/BiofieldTuning';
import Coaching from '@/components/sections/Coaching';
import ContactFormContainer from '@/components/sections/ContactFormContainer';
import FAQ from '@/components/sections/FAQ';
import Hero from '@/components/sections/Hero';
import WhatBringsYouHere from '@/components/sections/WhatBringsYouHere';
import Footer from '@/components/layout/navigation/Footer';

export const metadata = {
	alternates: {
		canonical: '/',
	},
};

export default async function Home() {
	const {
		hero,
		whatBringsYouHere,
		aboutCoaching,
		coachingServices,
		biofieldTuning,
		aboutElizabeth,
		faq,
		contact,
		footer,
	} = await f(Q);

	return (
		<div className=' space-y-md md:space-y-lg lg:space-y-xl 3xl:space-y-xxl'>
			<Hero data={hero} />
			<WhatBringsYouHere data={whatBringsYouHere} />
			<About data={aboutCoaching} />
			<Coaching data={coachingServices} />
			<div>
				<BiofieldTuning data={biofieldTuning} />
				<AboutElizabeth data={aboutElizabeth} />
				<FAQ data={faq} />
			</div>
			<ContactFormContainer data={contact} />
			<Footer data={footer} />
		</div>
	);
}
