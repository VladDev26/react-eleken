import Catalog from '../containers/Catalog';
import {Home, News, Sale, About, Contact} from '../components/Sections';

const navbar = [
	{
		name: 'home',
		path: 'home',
		component: Home
	},
	{
		name: 'catalog',
		path: 'catalog',
		component: Catalog
	},
	{
		name: 'news',
		path: 'news',
		component: News
	},
	{
		name: 'sale',
		path: 'sale',
		component: Sale
	},
	{
		name: 'about',
		path: 'about',
		component: About
	},
	{
		name: 'contact',
		path: 'contact',
		component: Contact
	}
];
export default navbar;