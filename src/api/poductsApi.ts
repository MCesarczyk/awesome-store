import { API_URL } from "@/api/urls";

export const productsApi = {
  getProducts: async () => {
    const res = await fetch(API_URL.getProducts);

    const products = (await res.json()) as { id: string; title: string }[];

    return products;
  },

  getProductsByPage: async (page: number, perPage: number = 10) => {
    const take = perPage;
    const offset = perPage * (page - 1);

    const res = await fetch(`${API_URL.getProducts}?take=${take}&offset=${offset}`);

    const products = (await res.json()) as { id: string; title: string }[];

    return products;
  },

  getProductById: async (id: string) => {
    const res = await fetch(API_URL.getProductById.replace(':productId', id));

    const product = (await res.json()) as { title: string; description: string };

    return product;
  }
};
