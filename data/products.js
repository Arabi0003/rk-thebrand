export const categories = [
  { id: 1, name: "Handbags", description: "Luxury handbags for every occasion", image: encodeURI("/image copy.png") },
  { id: 2, name: "Backpacks", description: "Premium backpacks for work & travel", image: encodeURI("/image copy 2.png") },
  { id: 3, name: "Travel Bags", description: "Durable travel companions", image: encodeURI("/image copy 3.png") },
  { id: 4, name: "Accessories", description: "Wallets, belts & more", image: encodeURI("/image copy 4.png") }
];

export const featuredProducts = [
  { id: 1, name: "Classic Leather Tote", price: 45000, originalPrice: 55000, image: encodeURI("/image copy 5.png"), badge: "Sale", category: "Handbags" },
  { id: 2, name: "Executive Backpack", price: 38000, originalPrice: null, image: encodeURI("/image copy 6.png"), badge: null, category: "Backpacks" },
  { id: 3, name: "Luxury Crossbody Bag", price: 32000, originalPrice: 40000, image: encodeURI("/image copy 7.png"), badge: "Sale", category: "Handbags" },
  { id: 4, name: "Premium Travel Duffle", price: 52000, originalPrice: null, image: encodeURI("/image copy 8.png"), badge: "Best Seller", category: "Travel Bags" }
];

export const newArrivals = [
  { id: 5, name: "Signature Mini Bag", price: 28000, image: encodeURI("/image copy 9.png"), category: "Handbags" },
  { id: 6, name: "Urban Sling Pack", price: 22000, image: encodeURI("/image copy 10.png"), category: "Accessories" },
  { id: 7, name: "Weekend Holdall", price: 48000, image: encodeURI("/image copy 11.png"), category: "Travel Bags" },
  { id: 8, name: "Designer Clutch", price: 25000, image: encodeURI("/image copy 12.png"), category: "Handbags" }
];

export const formatPrice = (price) => "\u20A6" + price.toLocaleString("en-NG");