/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type Product } from "@/types";

export const isProductValid = (product: any): product is Product => {
  return (
    product &&
    typeof product.id === "string" &&
    typeof product.name === "string" &&
    typeof product.slug === "string" &&
    Array.isArray(product.categories) &&
    typeof product.description === "string" &&
    Array.isArray(product.images) &&
    typeof product.price === "number"
  );
};