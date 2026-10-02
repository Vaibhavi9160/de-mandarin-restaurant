export interface MenuItem {
  id: string;
  name: string;
  category: 'Popular' | 'Starters' | 'Main Course' | 'Pizza & Pasta' | 'Burgers' | 'Chinese' | 'Beverages' | 'Desserts';
  description: string;
  priceNote: string;
  vegType: 'veg' | 'non-veg' | 'beverage';
  image: string;
  isPopular?: boolean;
}

export interface HighlightItem {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Food' | 'Ambience' | 'Outdoor Seating' | 'Drinks' | 'Desserts';
  image: string;
  caption: string;
}

export interface ReviewItem {
  id: string;
  theme: string;
  authorLabel: string;
  rating: number;
  highlight: string;
  text: string;
  timeAgo: string;
}

export const RESTAURANT_INFO = {
  name: "De Mandarin Resto Cafe",
  tagline: "Good Food. Great Ambience. Memorable Moments.",
  subtext: "Discover delicious multi-cuisine food, refreshing beverages and a vibrant dining experience on the Bangalore Highway.",
  priceRange: "₹200–₹1,200 per person",
  phone: "097786 99399",
  phoneFormatted: "+91 97786 99399",
  phoneHref: "tel:+919778699399",
  website: "demandarinrestocafe.com",
  location: "T.Begur, Bangalore Highway, near Sri Sidhartha Medical College, Tumakuru, Karnataka 562123",
  shortLocation: "T.Begur, Bangalore Highway, Tumakuru",
  rating: 4.6,
  reviewsCount: "3,786+",
  hoursNote: "Open late — verify today's hours before visiting",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=De+Mandarin+Resto+Cafe+T.Begur+Bangalore+Highway+Tumakuru",
};

export const MENU_CATEGORIES = [
  'Popular',
  'Starters',
  'Main Course',
  'Pizza & Pasta',
  'Burgers',
  'Chinese',
  'Beverages',
  'Desserts',
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Popular
  {
    id: 'pop-1',
    name: 'Artisan Wood-Fired Margherita',
    category: 'Popular',
    description: 'Slow-fermented dough topped with san marzano tomato sauce, fresh buffalo mozzarella, and aromatic sweet basil.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'pop-2',
    name: 'Crispy Schezwan Dim Sum',
    category: 'Popular',
    description: 'Steamed Cantonese dumplings lightly crisped and tossed with signature house chili garlic schezwan glaze.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'pop-3',
    name: 'Gourmet Double Smash Burger',
    category: 'Popular',
    description: 'Juicy seared patty with melted cheddar, caramelized onions, crisp iceberg, and house secret sauce in a brioche bun.',
    priceNote: 'Sample Menu Item',
    vegType: 'non-veg',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'pop-4',
    name: 'Fresh Mint & Lime Highway Mojito',
    category: 'Popular',
    description: 'Crushed garden mint, freshly squeezed key limes, cane sugar, and sparkling soda served ice-cold.',
    priceNote: 'Sample Menu Item',
    vegType: 'beverage',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'pop-5',
    name: 'Creamy Alfredo Fettuccine',
    category: 'Popular',
    description: 'Al dente fettuccine ribbons tossed in a rich garlic parmesan cream sauce with sauteed mushrooms.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },
  {
    id: 'pop-6',
    name: 'Decadent Sizzling Brownie Sundae',
    category: 'Popular',
    description: 'Warm fudge walnut brownie served on a cast iron sizzler with vanilla bean gelato and dark chocolate ganache.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
  },

  // Starters
  {
    id: 'str-1',
    name: 'Paneer Tikka Angara',
    category: 'Starters',
    description: 'Tender cottage cheese cubes marinated in smoked spices and hung curd, roasted in the clay oven.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'str-2',
    name: 'Golden Crispy Corn Pepper Salt',
    category: 'Starters',
    description: 'Sweet American corn kernels wok-tossed with scallions, crushed black pepper, and toasted garlic.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'str-3',
    name: 'Murgh Malai Kebab',
    category: 'Starters',
    description: 'Melt-in-mouth chicken morsels infused with cardamom, cream cheese, and gentle royal spices.',
    priceNote: 'Sample Menu Item',
    vegType: 'non-veg',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'str-4',
    name: 'Crispy Lotus Stem Honey Chilli',
    category: 'Starters',
    description: 'Crunchy sliced lotus root glazed with organic wild honey, toasted sesame seeds, and mild red chilies.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
  },

  // Main Course
  {
    id: 'mc-1',
    name: 'Dal De Mandarin Special',
    category: 'Main Course',
    description: 'Slow-simmered black lentils cooked overnight with churned white butter, tomatoes, and aromatic fenugreek.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mc-2',
    name: 'Butter Chicken Highway Style',
    category: 'Main Course',
    description: 'Clay-oven charred chicken simmered in a silky tomato makhani gravy enriched with cashews and cream.',
    priceNote: 'Sample Menu Item',
    vegType: 'non-veg',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mc-3',
    name: 'Dum Biryani with Mirchi Ka Salan',
    category: 'Main Course',
    description: 'Aromatic aged basmati rice layered with slow-cooked marinated cuts, saffron milk, and fried onions.',
    priceNote: 'Sample Menu Item',
    vegType: 'non-veg',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mc-4',
    name: 'Paneer Lababdar',
    category: 'Main Course',
    description: 'Fresh malai paneer simmered in an onion-tomato gravy with grated cottage cheese and freshly ground spices.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
  },

  // Pizza & Pasta
  {
    id: 'pp-1',
    name: 'Quattro Formaggi Rustic Pizza',
    category: 'Pizza & Pasta',
    description: 'Four cheese blend of mozzarella, smoked scamorza, gorgonzola, and grana padano on a thin crust base.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pp-2',
    name: 'Spicy Peri Peri Barbecue Chicken Pizza',
    category: 'Pizza & Pasta',
    description: 'Shredded smoked barbecue chicken, red paprika, bell peppers, mozzarella, and house peri peri drizzle.',
    priceNote: 'Sample Menu Item',
    vegType: 'non-veg',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pp-3',
    name: 'Penne Arrabbiata with Basil',
    category: 'Pizza & Pasta',
    description: 'Penne tossed in a fiery slow-cooked San Marzano tomato sauce with fresh garlic, chili flakes, and extra virgin olive oil.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pp-4',
    name: 'Handcrafted Truffle Mushroom Risotto',
    category: 'Pizza & Pasta',
    description: 'Creamy arborio rice infused with porcini wild mushrooms, white truffle oil, and aged parmesan.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
  },

  // Burgers
  {
    id: 'bg-1',
    name: 'Crispy Paneer Makhani Crunch Burger',
    category: 'Burgers',
    description: 'Golden spiced paneer steak with makhani aioli, red onions, pickled gherkins, and crunchy romaine.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bg-2',
    name: 'Highway Smokehouse Grilled Chicken Burger',
    category: 'Burgers',
    description: 'Charbroiled chicken breast glazed with hickory barbecue sauce, melted cheese, and crispy onion rings.',
    priceNote: 'Sample Menu Item',
    vegType: 'non-veg',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bg-3',
    name: 'Cheesy Truffle Mushroom Slider Duo',
    category: 'Burgers',
    description: 'Two mini brioche buns stuffed with portobello mushrooms, garlic aioli, and molten swiss cheese.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
  },

  // Chinese
  {
    id: 'ch-1',
    name: 'Steamed Crystal Vegetable Dimsum',
    category: 'Chinese',
    description: 'Delicate translucent dumplings filled with crunchy water chestnuts, shiitake mushrooms, and pak choi.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ch-2',
    name: 'Wok tossed Hakka Noodles',
    category: 'Chinese',
    description: 'Thin egg-less noodles tossed with shredded bell peppers, cabbage, bean sprouts, and dark soy in a blazing wok.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ch-3',
    name: 'Crispy Chilli Chicken Dry',
    category: 'Chinese',
    description: 'Tender boneless chicken batter fried and tossed with green chilies, bell peppers, spring onions, and oriental sauces.',
    priceNote: 'Sample Menu Item',
    vegType: 'non-veg',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ch-4',
    name: 'Classic Schezwan Fried Rice',
    category: 'Chinese',
    description: 'Fragrant basmati rice stir-fried with seasonal vegetables and homemade pungent schezwan pepper paste.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
  },

  // Beverages
  {
    id: 'bev-1',
    name: 'Blueberry Lagoon Mocktail',
    category: 'Beverages',
    description: 'Real wild blueberries muddled with lime juice, blue curacao syrup, and crushed ice topped with fizz.',
    priceNote: 'Sample Menu Item',
    vegType: 'beverage',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bev-2',
    name: 'Artisan Barista Cappuccino',
    category: 'Beverages',
    description: 'Freshly extracted espresso shot from 100% Arabica beans crowned with silky micro-foamed milk.',
    priceNote: 'Sample Menu Item',
    vegType: 'beverage',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bev-3',
    name: 'Belgian Iced Mocha Frappe',
    category: 'Beverages',
    description: 'Rich dark Belgian chocolate blended with chilled espresso, cream, and crowned with cocoa nibs.',
    priceNote: 'Sample Menu Item',
    vegType: 'beverage',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bev-4',
    name: 'Fresh Watermelon Mint Cooler',
    category: 'Beverages',
    description: 'Cold-pressed summer watermelon juice shaken with muddled mint leaves, rock salt, and lemon.',
    priceNote: 'Sample Menu Item',
    vegType: 'beverage',
    image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=800&q=80',
  },

  // Desserts
  {
    id: 'des-1',
    name: 'Classic New York Baked Cheesecake',
    category: 'Desserts',
    description: 'Dense and velvety cream cheese filling on a buttery graham cracker crust with berry compote.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'des-2',
    name: 'Gooey Molten Chocolate Lava Cake',
    category: 'Desserts',
    description: 'Warm dark chocolate sponge cake with an irresistible flowing warm chocolate center.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'des-3',
    name: 'Italian Tiramisu Classico',
    category: 'Desserts',
    description: 'Espresso-soaked savoiardi biscuits layered with mascarpone cream and dusted with raw cocoa powder.',
    priceNote: 'Sample Menu Item',
    vegType: 'veg',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
  },
];

export const SPECIAL_HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'hl-1',
    title: 'Pizza',
    emoji: '🍕',
    tagline: 'Hand-stretched dough & gourmet cheese',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hl-2',
    title: 'Pasta',
    emoji: '🍝',
    tagline: 'Silky sauces & authentic Italian recipes',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hl-3',
    title: 'Dimsum',
    emoji: '🥟',
    tagline: 'Steamed Cantonese delights & fiery dips',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hl-4',
    title: 'Burgers',
    emoji: '🍔',
    tagline: 'Loaded smash burgers with buttery brioche',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hl-5',
    title: 'Mojitos',
    emoji: '🥤',
    tagline: 'Chilled craft mocktails for the highway drive',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hl-6',
    title: 'Coffee & Tea',
    emoji: '☕',
    tagline: 'Freshly pulled espresso & comforting chai',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hl-7',
    title: 'Desserts',
    emoji: '🍫',
    tagline: 'Sizzling brownies, cheesecakes & sundaes',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hl-8',
    title: 'Multi-Cuisine Food',
    emoji: '🥗',
    tagline: 'Something delectable for every palate',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Atmospheric Cafe Lounge',
    category: 'Ambience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Warm ambient lighting and spacious seating designed for relaxed conversations.',
  },
  {
    id: 'gal-2',
    title: 'Handcrafted Gourmet Pizza',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80',
    caption: 'Freshly baked with premium mozzarella and fresh herbs.',
  },
  {
    id: 'gal-3',
    title: 'Open-Air Seating Area',
    category: 'Outdoor Seating',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80',
    caption: 'Breezy outdoor dining spaces perfect for highway travelers and evening stops.',
  },
  {
    id: 'gal-4',
    title: 'Signature Mint & Berry Mocktails',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    caption: 'Artisan chilled refreshers crafted with fresh mint and citrus.',
  },
  {
    id: 'gal-5',
    title: 'Cantonese Dim Sum Basket',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Steamed piping hot with house special chili garlic dips.',
  },
  {
    id: 'gal-6',
    title: 'Sizzling Chocolate Brownie',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Rich walnut fudge brownie served with vanilla ice cream.',
  },
  {
    id: 'gal-7',
    title: 'Evening Dining Ambience',
    category: 'Ambience',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Cozy booths and contemporary interior aesthetic.',
  },
  {
    id: 'gal-8',
    title: 'Creamy Barista Cappuccino',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1200&q=80',
    caption: 'Freshly roasted coffee beans with velvety steamed milk.',
  },
  {
    id: 'gal-9',
    title: 'Highway Dining Rest Stop',
    category: 'Outdoor Seating',
    image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spacious surroundings and comfortable terrace tables near Tumakuru.',
  },
];

export const WHY_VISIT_POINTS = [
  {
    id: 'why-1',
    title: 'Affordable Dining',
    highlight: '₹200–₹1,200 per person',
    description: 'Quality multi-cuisine dining designed to be accessible for travelers, students, and families alike.',
    iconName: 'Wallet',
  },
  {
    id: 'why-2',
    title: 'Highway Location',
    highlight: 'Conveniently on Bangalore Highway',
    description: 'Effortless stop along the Bangalore-Tumakuru route near Sri Sidhartha Medical College.',
    iconName: 'Navigation',
  },
  {
    id: 'why-3',
    title: 'Ample Parking',
    highlight: 'Spacious vehicle parking',
    description: 'Hassle-free parking space for cars and bikes so you can dine without parking stress.',
    iconName: 'Car',
  },
  {
    id: 'why-4',
    title: 'Family Friendly',
    highlight: 'Comfortable for all groups',
    description: 'Welcoming setup with roomy seating suitable for large families, gatherings, and college friends.',
    iconName: 'Users',
  },
  {
    id: 'why-5',
    title: 'Clean & Comfortable',
    highlight: 'Hygienic restrooms & dining',
    description: 'Well-maintained, hygienic dining areas and clean restrooms essential for highway travelers.',
    iconName: 'Sparkles',
  },
  {
    id: 'why-6',
    title: 'Friendly Service',
    highlight: 'Warm & attentive staff',
    description: 'Courteous team dedicated to quick, prompt hospitality whether you are in a rush or relaxing.',
    iconName: 'HeartHandshake',
  },
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    theme: 'Highway Location & Ambience',
    authorLabel: 'Bangalore-Tumakuru Highway Traveler',
    rating: 5,
    highlight: 'Perfect stop on the highway with great vibe',
    text: 'A fantastic dining spot right on the Bangalore Highway near Sidhartha Medical College. The ambience is surprisingly premium and cozy, offering a peaceful break from long highway driving. Very spacious seating.',
    timeAgo: 'Recent Review',
  },
  {
    id: 'rev-2',
    theme: 'Delicious Multi-Cuisine Food',
    authorLabel: 'Tumakuru Food Enthusiast',
    rating: 5,
    highlight: 'Delicious food across both starters and mains',
    text: 'We tried multiple dishes including their pizzas, pasta, and Chinese items. The food was served hot and flavorful. It is rare to find such a balanced multi-cuisine place on this highway stretch.',
    timeAgo: 'Recent Review',
  },
  {
    id: 'rev-3',
    theme: 'Reasonable Pricing',
    authorLabel: 'Family Diner',
    rating: 5,
    highlight: 'Affordable dining with generous portions',
    text: 'Prices are very reasonable for the quality and vibe provided, easily within ₹200 to ₹1,200 per person. Ideal for family outings where everyone has different cravings.',
    timeAgo: 'Recent Review',
  },
  {
    id: 'rev-4',
    theme: 'Friendly Staff & Fast Service',
    authorLabel: 'Medical College Student',
    rating: 5,
    highlight: 'Courteous staff and quick table service',
    text: 'The staff here is very attentive and polite. Even during peak hours, orders arrived promptly. It has become our go-to spot to unwind after classes near the college.',
    timeAgo: 'Recent Review',
  },
  {
    id: 'rev-5',
    theme: 'Comfortable Seating & Cleanliness',
    authorLabel: 'Weekend Roadtripper',
    rating: 4,
    highlight: 'Clean restrooms and ample parking',
    text: 'Crucial highway checklist passed with flying colors: abundant parking, spotless restrooms, and comfortable booth chairs. Loved the refreshing cold beverages.',
    timeAgo: 'Recent Review',
  },
  {
    id: 'rev-6',
    theme: 'Refreshing Beverages & Cafe Vibes',
    authorLabel: 'Coffee & Cafe Patron',
    rating: 5,
    highlight: 'Top-notch mojitos and hot coffee',
    text: 'Their mocktails and coffees are refreshing! The music and warm lighting create the perfect lounge atmosphere. Definitely recommended when passing through Tumakuru.',
    timeAgo: 'Recent Review',
  },
];
