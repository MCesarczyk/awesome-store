import { API_URL } from "@/api/urls";
import { type Product } from "@/types";

export const productsApi = {
  getProductsByPage: async (page: number, perPage: number = 10) => {
    const take = perPage;
    const offset = perPage * (page - 1);

    const res = await fetch(`${API_URL.getProducts}?take=${take}&offset=${offset}`);

    const products = (await res.json()) as Product[];

    return products;
  },

  getProductById: async (id: string) => {
    const res = await fetch(API_URL.getProductById.replace(':productId', id));

    const product = (await res.json()) as Product;

    return product;
  }
};
