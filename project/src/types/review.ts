type Review = {
  id: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  rating: number;
  date: string;
  comment: string;
}

export type {Review};
