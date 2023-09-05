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
