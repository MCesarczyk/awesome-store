import { API_URL } from "@/api/urls";

export const productsApi = {
  getProducts: async () => {
    const res = await fetch(API_URL.getProducts);

    const products = (await res.json()) as { id: string; title: string }[];

    return products;
  },

  getProductById: async (id: string) => {
    const res = await fetch(API_URL.getProductById.replace(':productId', id));

    const product = (await res.json()) as { title: string; description: string };

    return product;
  }
};
