"use server";

import { executeGraphql } from "@/api/executeGraphql";
import { CartDeleteItemDocument, CartUpdateQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = (itemId: string, quantity: number) => {
  console.log('productId: ', itemId, 'quantity: ', quantity, 'total: ', 0);
  return executeGraphql(CartUpdateQuantityDocument, { productId: itemId, quantity, total: 0 });
}

export const removeItem = (itemId: string) => {
  return executeGraphql(CartDeleteItemDocument, { orderItemId: itemId });
}
