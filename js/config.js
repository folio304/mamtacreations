/* =========================================================
   MAMTA CREATIONS — EDIT THIS FILE ONLY
   Business details, categories, gallery photos and reels.
   ========================================================= */

const SITE = {
  name: "Mamta Creations",
  maker: "Mamta Batra",
  tagline: "Handmade decor for festivals and weddings",
  intro: "Rakhis, Ganesh mandapas, Diwali rangoli sets, torans, wedding essentials and quilling art, made by hand in Raipur and made to order.",
  about: "Mamta Batra has been crafting handmade festive and wedding essentials for more than 10 years. Every piece is made by hand, and most can be customised with your colours, names or size.",
  whatsapp: "919893110060",        // country code + number, no + or spaces
  phone: "+91 98931 10060",
  email: "",                        // add an email to enable "Send by email" on the Contact page
  address: "Raipur, Chhattisgarh",
  hours: "Monday to Saturday, 10 am to 7 pm",
  instagram: "https://www.instagram.com/batramamta/",
  facebook: ""                      // paste Facebook page link
};

/* Categories — used on Home and as Gallery filters */
const CATEGORIES = [
  { id: "rakhi",    name: "Rakhi",              blurb: "Kundan, pearl, evil-eye and kids' rakhis" },
  { id: "mandapa",  name: "Ganesh mandapa",     blurb: "Velvet and floral mandapas for home pooja" },
  { id: "diwali",   name: "Diwali decor",       blurb: "Rangoli sets, diyas and festive pieces" },
  { id: "wedding",  name: "Wedding essentials", blurb: "Haldi thalis, name latkans, kumkum padam" },
  { id: "decor",    name: "Torans and decor",   blurb: "Door torans, hangings and gift pieces" },
  { id: "quilling", name: "Quilling",           blurb: "Paper quilling frames, cards and art" }
];

/* Gallery photos
   - Photo files go in the /assets folder
   - featured: true  → also shown on the Home page
   - Newest first looks best: add new items at the top */
const GALLERY = [
  { title: "Velvet Ganesh mandapa with leaf arch", category: "mandapa", image: "assets/velvet-ganesh-mandapa.jpg", featured: true },
  { title: "Kundan flower rakhi set",              category: "rakhi",   image: "assets/kundan-flower-rakhi.jpg",   featured: true },
  { title: "Diwali rangoli set with lotus diyas",  category: "diwali",  image: "assets/diwali-rangoli-set.jpg",    featured: true },
  { title: "Round floral mandapa backdrop",        category: "mandapa", image: "assets/floral-round-mandapa.jpg",  featured: true },
  { title: "Evil-eye rakhi and bracelet",          category: "rakhi",   image: "assets/evil-eye-rakhi.jpg",        featured: true },
  { title: "Kumkum padam and festive essentials",  category: "wedding", image: "assets/festive-essentials.jpg",    featured: true },
  { title: "Floral door toran",                    category: "decor",   image: "assets/floral-door-toran.jpg" },
  { title: "Personalised name latkan",             category: "wedding", image: "assets/name-latkan.jpg" }
];

/* Reels — paste the full link of any Instagram reel/post or Facebook video/reel.
   Example:
     "https://www.instagram.com/reel/ABC123xyz/",
     "https://www.facebook.com/reel/1234567890",                         */
const REELS = [
];
