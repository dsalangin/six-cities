type Offer =  {
  bedrooms: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    },
  },
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  },
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium : boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  },
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
 }

export type {Offer};
