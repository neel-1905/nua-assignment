export type Product = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  price: number;
};

export type Rating = {
  rate: number;
  count: number;
};
