export type GraphqlResponse<T> =
  | { data?: undefined; errors: { message: string }[] }
  | { data: T; errors?: undefined };

export interface Image {
  id: string;
  url: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categories: Category[];
  description: string;
  images: Image[];
  price: number;
}
