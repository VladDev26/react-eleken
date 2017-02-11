let url = 'http://vladdev.zzz.com.ua/examples/eleken/images/';

const products = [
	{
		id: 1,
		tags: ['all', 'shorts'],
		name: 'printed swimsuit',
		img: url + 'design_01-11.jpg',
		price: 23,
		sale: {
			exists: false
		},
		new: false
	},
	{
		id: 2,
		tags: ['all', 'shorts'],
		name: 'jogging bermuda shorts',
		img: url + 'design_02-13.jpg',
		price: 36,
		sale: {
			exists: true,
			price: 12
		},
		new: false
	},
	{
		id: 3,
		tags: ['all', 'accessories'],
		name: 'basic beach flip flops',
		img: url + 'design_03.jpg',
		price: 9,
		sale: {
			exists: false
		},
		new: true
	},
	{
		id: 4,
		tags: ['all', 'accessories'],
		name: 'black sunglasses',
		img: url + 'design_04-17.jpg',
		price: 29,
		sale: {
			exists: false
		},
		new: false
	},
	{
		id: 5,
		tags: ['all', 'jackets'],
		name: 'basic beach flip flops',
		img: url + 'design_05-22.jpg',
		price: 9,
		sale: {
			exists: false
		},
		new: false
	},
	{
		id: 6,
		tags: ['all', 'shorts'],
		name: 'basic beach flip flops',
		img: url + 'design_06.jpg',
		price: 9,
		sale: {
			exists: false
		},
		new: false
	},
	{
		id: 7,
		tags: ['all', 'shorts'],
		name: 'basic beach flip flops',
		img: url + 'design_07-24.jpg',
		price: 9,
		sale: {
			exists: false
		},
		new: false
	},
	{
		id: 8,
		tags: ['all', 't-shirts'],
		name: 'basic beach flip flops',
		img: url + 'design_08-25.jpg',
		price: 9,
		sale: {
			exists: false
		},
		new: false
	}
];

export default products;