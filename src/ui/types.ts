export interface ProductItem {
  id: number;
  category: string;
  name: string;
  price: number;
  image: {
    src: string;
    alt: string;
  }
}

export interface Image {
  id: string;
  attributes: {
    url: string;
    alternativeText: string;
  }
}

export interface Category {
  id: string;
  attributes: {
    name: string;
    slug: string;
    description: string;
  }
}

export interface ProductItemType {
  id: string;
  attributes: {
    name: string;
    slug: string;
    categories: { data: Category[] };
    description: string;
    images: { data: Image[] };
    price: number;
  };
}
