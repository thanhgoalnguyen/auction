export type Room = { id: string; title: string; host: string; live: boolean; viewers: number }
export type Product = { id: string; name: string; price: number; img?: string }

export const rooms: Room[] = [
  { id: 'room-1', title: 'Sneaker Showcase', host: 'Hiro', live: true, viewers: 532 },
  { id: 'room-2', title: 'Camera Accessories', host: 'Linh', live: false, viewers: 120 },
  { id: 'room-3', title: 'Vintage Collectibles', host: 'Ken', live: true, viewers: 77 },
]

export const products: Product[] = [
  { id: 'p-1', name: 'Runner X Sneakers', price: 159.99 },
  { id: 'p-2', name: 'Lens 50mm f/1.8', price: 89.00 },
  { id: 'p-3', name: 'Limited Edition Tee', price: 24.50 },
]