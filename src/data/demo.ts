export type RoomSummary = {
	id: string
	title: string
	host: string
	viewers: number
	live: boolean
	startTime: string
	thumbnail: string
	category: string
}

export type LiveProduct = {
	id: string
	name: string
	price: number
	bid?: number
	image: string
}

export type ChatMessage = {
	id: string
	user: string
	body: string
	at: string
	tone?: 'bid' | 'system'
}

export type Bidder = {
	id: string
	name: string
	bid: number
	avatar: string
	status?: 'leading' | 'outbid'
}

export type WinItem = {
	id: string
	name: string
	seller: string
	price: number
	image: string
	status: 'awaiting' | 'paid'
}

export const rooms: RoomSummary[] = [
	{
		id: 'room-1',
		title: 'Sneaker Heat Drop',
		host: 'Hiro',
		viewers: 532,
		live: true,
		startTime: 'Live now',
		thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80',
		category: 'Sneaker'
	},
	{
		id: 'room-2',
		title: 'Studio Camera Gear',
		host: 'Linh',
		viewers: 120,
		live: true,
		startTime: 'Starts at 20:00',
		thumbnail: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=600&q=80',
		category: 'Gadget'
	},
	{
		id: 'room-3',
		title: 'Vintage Collectibles',
		host: 'Ken',
		viewers: 77,
		live: true,
		startTime: 'Live now',
		thumbnail: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=600&q=80',
		category: 'Collectibles'
	},
	{
		id: 'room-4',
		title: 'Streetwear Flash Sale',
		host: 'Nana',
		viewers: 201,
		live: true,
		startTime: 'Live now',
		thumbnail: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
		category: 'Apparel'
	},
	{
		id: 'room-5',
		title: 'K-Beauty Pickups',
		host: 'Hana',
		viewers: 188,
		live: true,
		startTime: 'Goes live at 21:15',
		thumbnail: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=600&q=80',
		category: 'Beauty'
	},
	{
		id: 'room-6',
		title: 'Card Break Night',
		host: 'Jay',
		viewers: 305,
		live: true,
		startTime: 'Live now',
		thumbnail: 'https://images.unsplash.com/photo-1507120410856-1f35574c3b45?auto=format&fit=crop&w=600&q=80',
		category: 'Trading cards'
	},
	{
		id: 'room-7',
		title: 'Designer Bags Hunt',
		host: 'Mei',
		viewers: 92,
		live: true,
		startTime: 'Starts at 19:30',
		thumbnail: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80',
		category: 'Luxury'
	},
	{
		id: 'room-8',
		title: 'Indie Toy Drops',
		host: 'Yuto',
		viewers: 144,
		live: true,
		startTime: 'Live now',
		thumbnail: 'https://images.unsplash.com/photo-1577003811926-53b288a45f51?auto=format&fit=crop&w=600&q=80',
		category: 'Toys'
	},
	{
		id: 'room-9',
		title: 'Handmade Jewelry Live',
		host: 'Lan',
		viewers: 64,
		live: true,
		startTime: 'Goes live at 18:45',
		thumbnail: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80',
		category: 'Handmade'
	},
	{
		id: 'room-10',
		title: 'Gourmet Snack Crate',
		host: 'Bao',
		viewers: 403,
		live: true,
		startTime: 'Live now',
		thumbnail: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80',
		category: 'Food'
	}
]

export const roomDetail = {
	id: 'room-1',
	title: 'Sneaker Heat Drop',
	host: {
		name: 'Mami\'s Closet',
		avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80',
		followers: '12.4K'
	},
	pinnedProduct: {
		id: 'sku-93',
		name: 'Nike Dunk Low Prism',
		price: 145,
		bid: 188,
		image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80'
	} as LiveProduct,
	nextDrops: [
		{
			id: 'sku-61',
			name: 'Air Jordan 1 Panda',
			price: 210,
			image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80'
		},
		{
			id: 'sku-62',
			name: 'New Balance 550 UNC',
			price: 160,
			image: 'https://images.unsplash.com/photo-1589187155474-74c7d76e0fa4?auto=format&fit=crop&w=600&q=80'
		}
	] as LiveProduct[],
	chat: [
		{
			id: 'm1',
			user: 'Mai',
			body: 'Hey everyone 👋',
			at: '12:01'
		},
		{
			id: 'm2',
			user: 'Ken',
			body: 'Got the AJ1s from last drop, thanks host!',
			at: '12:02'
		},
		{
			id: 'm3',
			user: 'System',
			body: 'Bid $190 from @sneakerboy',
			at: '12:03',
			tone: 'bid'
		},
		{
			id: 'm4',
			user: 'Linh',
			body: 'Any size 42 available?',
			at: '12:03'
		},
		{
			id: 'm5',
			user: 'System',
			body: 'Drop #24 starts in 00:20',
			at: '12:04',
			tone: 'system'
		}
	] as ChatMessage[],
	bidders: [
		{
			id: 'u1',
			name: 'sneakerboy',
			bid: 188,
			avatar: 'SB',
			status: 'leading'
		},
		{ id: 'u2', name: 'mai.ng', bid: 182, avatar: 'MN' },
		{
			id: 'u3',
			name: 'linh.ph',
			bid: 178,
			avatar: 'LP',
			status: 'outbid'
		}
	] as Bidder[]
}

export const hostProducts: LiveProduct[] = [
	{
		id: 'sku-93',
		name: 'Nike Dunk Low Prism',
		price: 145,
		image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80'
	},
	{
		id: 'sku-94',
		name: 'Jordan 4 Thunder',
		price: 320,
		image: 'https://images.unsplash.com/photo-1528701800489-20be3cbe6360?auto=format&fit=crop&w=600&q=80'
	},
	{
		id: 'sku-95',
		name: 'Yeezy 350 Sesame',
		price: 280,
		image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80'
	}
]

export const winningItems: WinItem[] = [
	{
		id: 'order-1',
		name: 'Jordan 4 Retro Lightning',
		seller: 'Sneaker Heat Drop',
		price: 265,
		image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80',
		status: 'awaiting'
	},
	{
		id: 'order-2',
		name: 'Supreme Tee SS24',
		seller: 'Streetwear Flash Sale',
		price: 92,
		image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
		status: 'paid'
	}
]

export const checkout = {
	orderNumber: '#SC-240224',
	status: 'Awaiting payment',
	total: 265,
	shipping: 0,
	paymentDue: '24 hours',
	item: {
		name: 'Jordan 4 Retro Lightning',
		seller: 'Sneaker Heat Drop',
		image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80',
		size: 'US 9',
		price: 265
	}
}

export const flowStates = {
	participant: ['waiting', 'live', 'outbid', 'ended'] as const
}

export const getUserImageURL = (userId: number) => {
	const n = (userId % 5) + 1;
	return `/images/users/${n}.png`;
}

export const ROUTE_PATH = {
	TOP_NO_LOGIN: "/layout/",
	TOP_LOGIN: "/layout/auth",
	LIKE_LIST: "/layout/like-list",
	SEARCH_TOP: "/layout/search-top",
	USER_REGISTRATION: "/layout/user-registration",
	LOGIN: "/layout/login",
	REGISTRATION_EMAIL_SENT: "/layout/registration-email-sent",
	CATEGORY_LIST: "/layout/category-list",
	SEARCH_RESULT: "/layout/search-result",
	MY_PAGE: "/layout/my-page",
	USER_PROFILE: "/layout/user-profile",
	OTHER_PROFILE: "/layout/other-profile",
	ITEM_DETAIL: "/layout/item-detail",
	ROOM_DETAIL: "/layout/room-detail",
};

export const SUB_FOOTER_ROUTE = [
	ROUTE_PATH?.USER_REGISTRATION,
	ROUTE_PATH?.LOGIN,
	ROUTE_PATH?.REGISTRATION_EMAIL_SENT,
	ROUTE_PATH?.ROOM_DETAIL
]
