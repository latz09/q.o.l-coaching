import { fetchContent as f } from '@/utils/cms/fetchContent';
import { FETCH_NAVIGATION_QUERY as Q } from '@/data/queries/nav/FETCH_NAVIGATION_QUERY';
import MobileNavbar from '../../modals/MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import { navigationLinks } from '@/data/navigationLinks';

const NavigationContainer = async () => {

	const data = await f(Q);
	console.log(data)
	return (
		<nav className='container py-1.25 lg:py-1.5 3xl:py-3 px-0.5'>
			<MobileNavbar data={data} />
			<DesktopNavbar data={data} />
		</nav>
	);
};

export default NavigationContainer;