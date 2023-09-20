import { type Route } from "next";

export type GraphqlResponse<T> =
  | { data?: undefined; errors: { message: string }[] }
  | { data: T; errors?: undefined };

export interface Image {
  id: string;
  url: string;
  alt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categories: Category[];
  collections: Collection[];
  description: string;
  images: Image[];
  price: number;
}

export interface NavigationLinkProps<T extends string> {
  href: Route<T>;
  children: React.ReactNode;
  exact?: boolean;
}
