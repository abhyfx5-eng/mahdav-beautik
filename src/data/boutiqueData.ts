export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  priceRange: string;
  features: string[];
  fabrics: string[];
}

export interface FabricItem {
  id: string;
  name: string;
  tagline: string;
  category: 'cotton' | 'silk' | 'organza' | 'linen' | 'festive';
  description: string;
  texture: string;
  gsm: string;
  bestFor: string;
  colors: string[];
  image: string;
}

export interface SilhouetteItem {
  id: string;
  name: string;
  suitableFabric: string;
  turnaroundDays: string;
  description: string;
  necklineOptions: string[];
}

export const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: 'unstitched-suits',
    title: 'Unstitched Suits',
    subtitle: 'Pure Weaves & Subtle Zari Accents',
    category: 'Suits & Sets',
    description: 'Carefully curated 3-piece unstitched salwar kameez sets featuring handblock prints, Kashmiri tilla work, and delicate woven borders designed for graceful everyday and festive wear.',
    image: '/assets/images/collection_unstitched_suits_1790566501539.jpg',
    priceRange: '₹1,850 - ₹6,500',
    features: ['3-Piece Fabric Cut (Kurta, Bottom, Dupatta)', 'Pre-shrunk Pure Fibers', 'Includes Designer Dupatta', 'Custom Tailoring Available'],
    fabrics: ['Chanderi Silk', 'Mulmul Cotton', 'Georgette', 'Dola Silk']
  },
  {
    id: 'premium-fabrics',
    title: 'Premium Fabrics',
    subtitle: 'Meters of Tactile Artisanal Weaves',
    category: 'Textiles by the Meter',
    description: 'Explore our treasure trove of handpicked running yardages. From breathable Jaipur mulmul to lustrous Varanasi brocades and hand-embroidered organzas.',
    image: '/assets/images/collection_fabrics_roll_1790566515991.jpg',
    priceRange: '₹350 - ₹1,800 / meter',
    features: ['100% Natural Fibers', 'Artisan Dyeing & Handblock', 'Custom Meterage Cut', 'Matching Lining Available'],
    fabrics: ['Banarasi Brocade', 'Pure Linen', 'Chanderi Zari', 'Modal Silk']
  },
  {
    id: 'festive-collection',
    title: 'Festive Collection',
    subtitle: 'Heirloom Tones for Life’s Celebrations',
    category: 'Occasion & Festive',
    description: 'Rich royal shades of emerald green, deep burgundy, antique gold, and rose designed for Karwa Chauth, Diwali, weddings, and family milestones.',
    image: '/assets/images/festive_celebration_banner_1790566537603.jpg',
    priceRange: '₹3,500 - ₹12,500',
    features: ['Gota Patti & Zardozi Details', 'Rich Contrast Duppattas', 'Bespoke Sizing Assistance', 'Festive Gift Packaging'],
    fabrics: ['Raw Silk', 'Tissue Chanderi', 'Embroidered Velvet', 'Crepe']
  },
  {
    id: 'custom-stitching',
    title: 'Custom Stitching',
    subtitle: 'Master Tailoring Tailored to Your Measure',
    category: 'Atelier Tailoring',
    description: 'Experienced master tailors dedicated to perfection. Flawless necklines, comfort armholes, handmade piping, interlock finishing, and personalized fittings.',
    image: '/assets/images/craft_custom_stitching_1790566527695.jpg',
    priceRange: '₹650 - ₹2,400',
    features: ['1-on-1 Measurement Fitting', 'Custom Neckline & Sleeve Cut', 'High-grade Cotton Lining Included', 'Express 48-Hour Option'],
    fabrics: ['Suits', 'Lehengas', 'Blouses', 'Anarkalis']
  }
];

export const FABRICS_DATA: FabricItem[] = [
  {
    id: 'festive-silk',
    name: 'Chanderi & Dola Silk',
    tagline: 'Rich texture and elegant shine for special occasions',
    category: 'silk',
    description: 'Feather-light with an innate regal sheen and metallic zari stripes, ideal for statement kurtas and festive dupattas.',
    texture: 'Crisp handfeel with soft golden lustre',
    gsm: '85-110 GSM',
    bestFor: 'Straight Cut Kurtas, Anarkalis & Festive Sets',
    colors: ['Deep Forest Green', 'Antique Gold', 'Burgundy', 'Soft Rose'],
    image: '/assets/images/collection_fabrics_roll_1790566515991.jpg'
  },
  {
    id: 'jaipur-cotton',
    name: 'Pure Mulmul & Cambric Cotton',
    tagline: 'Ultra-breathable natural comfort for daily grace',
    category: 'cotton',
    description: 'Woven with high thread-count combed cotton, gentle on the skin during North Indian summers, dyed with skin-friendly fast hues.',
    texture: 'Feather-soft, airy and breathable',
    gsm: '70-90 GSM',
    bestFor: 'Daily Office Kurtis, Comfort Salwars, Kaftans',
    colors: ['Ivory Floral', 'Sage Botanical', 'Dusty Rose', 'Teal Motif'],
    image: '/assets/images/collection_unstitched_suits_1790566501539.jpg'
  },
  {
    id: 'embroidered-organza',
    name: 'Floral Embroidered Organza',
    tagline: 'Sheer modern femininity with delicate scalloped edges',
    category: 'organza',
    description: 'Translucent structured fabric embellished with tone-on-tone resham thread embroidery and delicate cutwork borders.',
    texture: 'Structured sheer with tactile embroidery',
    gsm: '50-65 GSM',
    bestFor: 'Statement Sleeves, Overlay Jackets, Designer Dupattas',
    colors: ['Pastel Sage', 'Pearl Ivory', 'Blush Pink', 'Champagne'],
    image: '/assets/images/hero_ethnic_elegance_1790566486370.jpg'
  },
  {
    id: 'handloom-linen',
    name: 'Handloom Cotton Linen',
    tagline: 'Organic texture with a contemporary minimalist drape',
    category: 'linen',
    description: 'Rich slub yarn texture offering natural cooling and sophisticated muted aesthetic for modern working women.',
    texture: 'Distinctive natural slub weave with relaxed drape',
    gsm: '120-140 GSM',
    bestFor: 'A-Line Tunics, Cigarette Pants, Co-ord Sets',
    colors: ['Natural Oatmeal', 'Forest Olive', 'Brick Red', 'Muted Mustard'],
    image: '/assets/images/craft_custom_stitching_1790566527695.jpg'
  },
  {
    id: 'banarasi-brocade',
    name: 'Varanasi Zari Brocade',
    tagline: 'Timeless Indian heritage woven with gold & silver threads',
    category: 'festive',
    description: 'Intricate floral jaal and buti motifs woven directly into rich silk base, celebrating quintessential Indian royal grandeur.',
    texture: 'Substantial, rich metallic weave',
    gsm: '160-200 GSM',
    bestFor: 'Festive Jackets, Kurta Yokes, Wedding Ensembles',
    colors: ['Emerald & Gold', 'Deep Wine', 'Midnight Navy', 'Imperial Red'],
    image: '/assets/images/festive_celebration_banner_1790566537603.jpg'
  }
];

export const SILHOUETTES: SilhouetteItem[] = [
  {
    id: 'pakistani-straight',
    name: 'Pakistani Long Straight Kurta',
    suitableFabric: 'Chanderi, Linen, Mulmul',
    turnaroundDays: '3 - 5 Days',
    description: 'Calf-length straight cut with wide sleeves, intricate lace insertion at hem, and narrow cigarette pants.',
    necklineOptions: ['V-Cut with Delicate Lace', 'Mandarin Slit', 'Boat Neck with Pearl Buttons']
  },
  {
    id: 'kalidar-anarkali',
    name: '16-Kali Flared Anarkali',
    suitableFabric: 'Pure Silk, Georgette, Mulmul',
    turnaroundDays: '5 - 7 Days',
    description: 'Graceful flowing silhouette with fitted bodice, voluminous circular flare, and paired with churidar or pants.',
    necklineOptions: ['Sweetheart Neck', 'Deep U with Dori Latkan', 'Angrakha Wrap']
  },
  {
    id: 'classic-salwar-suit',
    name: 'Patiala & Straight Suit',
    suitableFabric: 'Cambric Cotton, Crepe, Rayon',
    turnaroundDays: '3 - 4 Days',
    description: 'Traditional North Indian silhouette with comfort pleating, deep pockets, and custom side slits.',
    necklineOptions: ['Round Neck with Contrast Piping', 'Paan (Betel Leaf) Neck', 'Collar Neck']
  },
  {
    id: 'sharara-set',
    name: 'Tiered Sharara & Short Kurti',
    suitableFabric: 'Organza, Georgette, Brocade',
    turnaroundDays: '5 - 7 Days',
    description: 'Festive knee-length straight kurti paired with wide gathered double-tiered sharara flared pants.',
    necklineOptions: ['Broad Sweetheart', 'Square Neck', 'Keyhole with Gotta Patti']
  }
];

export const TESTIMONIALS = [
  {
    id: 'priya',
    quote: 'Beautiful collection and very good fabric quality. The stitching was also perfect. They understood exactly how I wanted the neckline and sleeves.',
    author: 'Priya S.',
    location: 'Civil Lines, Roorkee',
    verified: 'Verified Boutique Client',
    outfit: 'Custom Chanderi Suit'
  },
  {
    id: 'neha',
    quote: 'Loved the variety and the staff was very helpful in choosing the right fabric. Got two suits stitched for my sister’s wedding and received so many compliments.',
    author: 'Neha R.',
    location: 'IIT Roorkee Campus',
    verified: 'Repeat Customer',
    outfit: 'Festive Banarasi & Organza Sets'
  },
  {
    id: 'simran',
    quote: 'Elegant designs, good quality and excellent fitting. Madhav is now our family’s go-to boutique in Prem Nagar whenever festive season arrives.',
    author: 'Simran K.',
    location: 'Prem Nagar, Roorkee',
    verified: 'Local Resident',
    outfit: 'Unstitched Suits & Tailoring'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    title: 'Heirloom Chanderi & Gold Zari',
    category: 'Unstitched Suit',
    image: '/assets/images/hero_ethnic_elegance_1790566486370.jpg',
    tag: '#MadhavEthnic'
  },
  {
    id: 'g2',
    title: 'Curated Suit Sets on Display',
    category: 'Boutique Collection',
    image: '/assets/images/collection_unstitched_suits_1790566501539.jpg',
    tag: '#RoorkeeBoutique'
  },
  {
    id: 'g3',
    title: 'Raw Weaves & Pure Cotton Rolls',
    category: 'Fabric Yardage',
    image: '/assets/images/collection_fabrics_roll_1790566515991.jpg',
    tag: '#PureFabrics'
  },
  {
    id: 'g4',
    title: 'Master Tailor’s Atelier & Detailing',
    category: 'Custom Stitching',
    image: '/assets/images/craft_custom_stitching_1790566527695.jpg',
    tag: '#PerfectFit'
  },
  {
    id: 'g5',
    title: 'Festive Burgundy & Gold Ensembles',
    category: 'Occasion Wear',
    image: '/assets/images/festive_celebration_banner_1790566537603.jpg',
    tag: '#FestiveCollection'
  },
  {
    id: 'g6',
    title: 'Soft Sage & Rose Handblock Accents',
    category: 'Fresh Arrivals',
    image: '/assets/images/hero_ethnic_elegance_1790566486370.jpg',
    tag: '#StyleAtMadhav'
  }
];

export const STORE_DETAILS = {
  name: 'Madhav Boutique & Fabric',
  tagline: 'Traditional Elegance with a Modern Touch',
  address: 'Prem Nagar, Gali No. 5, Roorkee, Uttarakhand 247667, India',
  phone: '+91 8074462177',
  whatsappNumber: '918074462177',
  email: 'contact@madhavboutique.in',
  hours: [
    { day: 'Tuesday – Sunday', time: '10:30 AM – 8:30 PM' },
    { day: 'Monday', time: 'Closed (Fabric Sourcing Day)' }
  ],
  mapsUrl: 'https://maps.google.com/?q=Prem+Nagar+Gali+No+5+Roorkee+Uttarakhand',
  instagramUrl: 'https://www.instagram.com/madhav_fabric_boutique?stkn=MTBrMXEyem10bGIwcg=='
};
