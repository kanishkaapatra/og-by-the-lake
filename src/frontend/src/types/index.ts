export type MenuCategory =
  | "Veg & Continental"
  | "Asian"
  | "Mediterranean"
  | "Indian & Tandoor"
  | "Small Plates"
  | "Main Course"
  | "Craft Cocktails"
  | "Mocktails"
  | "Coffee & Beverages"
  | "Desserts";

export type MenuTab =
  | "All"
  | "Veg & Continental"
  | "Asian"
  | "Mediterranean"
  | "Indian & Tandoor"
  | "Craft Cocktails";

export interface MenuItem {
  id: string;
  name: string;
  price: number | string;
  description: string;
  category: MenuCategory;
  isOgSpecial?: boolean;
  isSignature?: boolean;
  isVeg?: boolean;
  tags?: string[];
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: "ambiance" | "food" | "cocktails" | "events";
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests: string;
  createdAt: string;
}

export interface ReservationInput {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests: string;
}

export interface ExperienceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
