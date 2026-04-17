import type { MenuCategory, MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
  // Veg & Continental
  {
    id: "vc-1",
    name: "Mozzarella Balls",
    price: 399,
    description:
      "Golden-fried fresh mozzarella balls, served with house marinara and basil oil.",
    category: "Veg & Continental",
    isVeg: true,
  },
  {
    id: "vc-2",
    name: "Veg Quesadillas",
    price: 425,
    description:
      "Crispy flour tortillas filled with roasted peppers, corn, jalapeños, and melted cheese.",
    category: "Veg & Continental",
    isVeg: true,
  },
  {
    id: "vc-3",
    name: "Rosemary Roasted Potatoes",
    price: 390,
    description:
      "Baby potatoes roasted in fresh rosemary, garlic, olive oil, and sea salt.",
    category: "Veg & Continental",
    isVeg: true,
  },
  {
    id: "vc-4",
    name: "Cherry Tomato Burrata Bruschetta",
    price: 350,
    description:
      "Creamy burrata with slow-roasted cherry tomatoes, basil oil, and crostini.",
    category: "Veg & Continental",
    isVeg: true,
    isOgSpecial: true,
  },
  {
    id: "vc-5",
    name: "Crunchy Veg Soft Taco",
    price: 395,
    description:
      "Soft flour tortilla with crunchy slaw, roasted vegetables, chipotle mayo, and fresh lime.",
    category: "Veg & Continental",
    isVeg: true,
    isOgSpecial: true,
  },
  {
    id: "vc-6",
    name: "Goat Cheese Bruschetta",
    price: 375,
    description:
      "Whipped goat cheese, caramelized onions, walnut, honey drizzle on toasted sourdough.",
    category: "Veg & Continental",
    isVeg: true,
  },
  {
    id: "vc-7",
    name: "Nachos",
    price: "₹350 / ₹390",
    description:
      "Crispy tortilla chips loaded with cheese, jalapeños, sour cream, and guacamole. Veg or Chicken.",
    category: "Veg & Continental",
  },
  {
    id: "vc-8",
    name: "Loaded Fries",
    price: "₹305 / ₹365",
    description:
      "Thick-cut fries loaded with cheese sauce, herbs, and toppings. Veg or Chicken.",
    category: "Veg & Continental",
  },

  // Asian
  {
    id: "as-1",
    name: "Hong Kong Chilli Paneer",
    price: 330,
    description:
      "Wok-tossed cottage cheese with bell peppers, soy, chilli sauce, and spring onions.",
    category: "Asian",
    isVeg: true,
  },
  {
    id: "as-2",
    name: "Kimchi Fried Lotus Root",
    price: 349,
    description:
      "Crispy lotus root stir-fried with house kimchi, sesame, and scallions.",
    category: "Asian",
    isVeg: true,
  },
  {
    id: "as-3",
    name: "Thai Style French Fries",
    price: 365,
    description:
      "Golden fries tossed in Thai basil, chilli, and sriracha aioli.",
    category: "Asian",
    isVeg: true,
  },
  {
    id: "as-4",
    name: "Sauté Tofu with Peanut Butter Sauce",
    price: 425,
    description:
      "Pan-seared tofu, silky peanut butter glaze, sesame, and coriander.",
    category: "Asian",
    isVeg: true,
  },
  {
    id: "as-5",
    name: "Baked Wonton Cup",
    price: 425,
    description:
      "Crispy baked wonton cups filled with a savoury Asian-spiced filling and chilli oil.",
    category: "Asian",
    isVeg: true,
  },
  {
    id: "as-6",
    name: "Cream Cheese Truffle Wonton",
    price: 425,
    description:
      "Delicate wontons stuffed with truffle-infused cream cheese, served with ponzu.",
    category: "Asian",
    isVeg: true,
  },
  {
    id: "as-7",
    name: "Haricot Beans & Asparagus",
    price: 375,
    description:
      "Stir-fried French beans and asparagus with garlic, miso butter, and toasted almonds.",
    category: "Asian",
    isVeg: true,
  },
  {
    id: "as-8",
    name: "Chilli Plum Babycorn",
    price: 345,
    description:
      "Crispy babycorn in a tangy chilli-plum glaze, garnished with sesame and spring onions.",
    category: "Asian",
    isVeg: true,
  },

  // Mediterranean
  {
    id: "me-1",
    name: "Polo Di Sparta",
    price: 449,
    description:
      "Herb-marinated grilled chicken, tzatziki, olives, and warm flatbread.",
    category: "Mediterranean",
    isVeg: false,
  },
  {
    id: "me-2",
    name: "OG Herbs Grilled Chicken",
    price: 449,
    description:
      "Free-range chicken marinated in Mediterranean herbs, lemon, and olive oil, served with chimichurri.",
    category: "Mediterranean",
    isVeg: false,
  },
  {
    id: "me-3",
    name: "Harissa Grilled Prawn",
    price: 475,
    description:
      "Tiger prawns in harissa paste, grilled over charcoal, served with preserved lemon aioli.",
    category: "Mediterranean",
    isVeg: false,
    isSignature: true,
  },
  {
    id: "me-4",
    name: "Hummus Stuff Pita Pocket",
    price: 375,
    description:
      "Warm pita pockets stuffed with house-made hummus, pickled veg, and tahini drizzle.",
    category: "Mediterranean",
    isVeg: true,
  },
  {
    id: "me-5",
    name: "Mezze Platter",
    price: 425,
    description:
      "A vibrant selection of hummus, baba ganoush, pita, olives, and seasonal dips.",
    category: "Mediterranean",
    isVeg: true,
  },

  // Indian & Tandoor
  {
    id: "it-1",
    name: "Ghee Roast",
    price: "₹375 / ₹425 / ₹499",
    description:
      "Succulent pieces roasted in rich ghee and aromatic spices. Choice of Paneer, Chicken, or Prawn.",
    category: "Indian & Tandoor",
  },
  {
    id: "it-2",
    name: "Classic Chicken Tikka",
    price: 385,
    description:
      "Tender chicken marinated in yoghurt and spices, slow-cooked in a clay tandoor.",
    category: "Indian & Tandoor",
    isVeg: false,
  },
  {
    id: "it-3",
    name: "Ajwaini Fish Tikka",
    price: 495,
    description:
      "Fresh fish marinated with carom seeds, mustard, and citrus, grilled to perfection.",
    category: "Indian & Tandoor",
    isVeg: false,
  },
  {
    id: "it-4",
    name: "Iranian Seekh Kebab",
    price: 525,
    description:
      "Minced lamb and chicken with aromatic Persian spices, skewered and grilled over charcoal.",
    category: "Indian & Tandoor",
    isVeg: false,
  },
  {
    id: "it-5",
    name: "OG Lamb Galoti with Philadelphia Kulcha",
    price: 545,
    description:
      "Melt-in-the-mouth slow-cooked lamb galoti patties, served with cream cheese stuffed kulcha.",
    category: "Indian & Tandoor",
    isVeg: false,
    isOgSpecial: true,
  },
  {
    id: "it-6",
    name: "Teekha Tangri",
    price: 375,
    description:
      "Whole chicken drumsticks in a fiery marinade, cooked in the tandoor.",
    category: "Indian & Tandoor",
    isVeg: false,
  },
  {
    id: "it-7",
    name: "Gunpowder Chicken Skewers",
    price: 375,
    description:
      "Spice-coated chicken thigh pieces on skewers, served with coconut chutney.",
    category: "Indian & Tandoor",
    isVeg: false,
  },
  {
    id: "it-8",
    name: "Teekha Paneer Tikka",
    price: 375,
    description:
      "Cottage cheese cubes marinated in spicy green chilli paste, grilled to a smoky finish.",
    category: "Indian & Tandoor",
    isVeg: true,
  },
  {
    id: "it-9",
    name: "Stuffed Mushroom Tikka",
    price: 365,
    description:
      "Button mushrooms stuffed with spiced cheese filling, grilled with tandoori seasoning.",
    category: "Indian & Tandoor",
    isVeg: true,
  },
  {
    id: "it-10",
    name: "Tandoori Aloo",
    price: 345,
    description:
      "Baby potatoes marinated in cumin and chilli, roasted in the tandoor, served with mint chutney.",
    category: "Indian & Tandoor",
    isVeg: true,
  },
  {
    id: "it-11",
    name: "Wasabi Broccoli",
    price: 375,
    description:
      "Tender broccoli florets with a zingy wasabi glaze, sesame seeds, and soy drizzle.",
    category: "Indian & Tandoor",
    isVeg: true,
  },
  {
    id: "it-12",
    name: "Pindi Chana",
    price: 245,
    description:
      "Slow-cooked black chickpeas in aromatic Punjabi spices, served with coriander chutney.",
    category: "Indian & Tandoor",
    isVeg: true,
  },
  {
    id: "it-13",
    name: "Mushroom Galouti",
    price: 399,
    description:
      "Melt-in-the-mouth mushroom galouti kebabs, served with saffron kulcha.",
    category: "Indian & Tandoor",
    isVeg: true,
  },

  // Legacy categories preserved for home page featured
  {
    id: "cc-1",
    name: "The OG Lakeside Mule",
    price: 480,
    description:
      "Vodka, fresh ginger brew, mint, lime, soda water, served in a copper mug with a lakeside garnish.",
    category: "Craft Cocktails",
    isSignature: true,
    isOgSpecial: true,
  },
  {
    id: "cc-2",
    name: "Sunset Negroni",
    price: 520,
    description:
      "Aged gin, Campari, sweet vermouth, orange bitters — served over a single large ice sphere.",
    category: "Craft Cocktails",
  },
  {
    id: "cc-3",
    name: "Shoreline Spritz",
    price: 440,
    description:
      "Aperol, prosecco, elderflower liqueur, fresh blood orange, soda, rosemary sprig.",
    category: "Craft Cocktails",
    isSignature: true,
  },
];

export const getByCategory = (category: MenuCategory): MenuItem[] =>
  menuItems.filter((item) => item.category === category);

export const getSignatureDishes = (): MenuItem[] =>
  menuItems.filter((item) => item.isSignature);

export const getOgSpecials = (): MenuItem[] =>
  menuItems.filter((item) => item.isOgSpecial);

export const getFeaturedByTab = (tab: string): MenuItem[] => {
  const items = menuItems.filter((item) => item.category === tab);
  const specials = items.filter((i) => i.isOgSpecial || i.isSignature);
  const rest = items.filter((i) => !i.isOgSpecial && !i.isSignature);
  return [...specials, ...rest].slice(0, 3);
};

export const MENU_TABS = [
  "All",
  "Veg & Continental",
  "Asian",
  "Mediterranean",
  "Indian & Tandoor",
  "Craft Cocktails",
] as const;

export const FOOD_CATEGORIES: MenuCategory[] = [
  "Veg & Continental",
  "Asian",
  "Mediterranean",
  "Indian & Tandoor",
  "Craft Cocktails",
];
