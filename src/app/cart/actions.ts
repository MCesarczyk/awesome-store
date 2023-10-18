"use server";

import { revalidatePath } from "next/cache";
import { executeInstantGraphql } from "@/api/executeGraphql";
import { CartDeleteItemDocument, CartUpdateQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = (itemId: string, quantity: number) => {
  revalidatePath(`/app/cart`);
  return executeInstantGraphql(CartUpdateQuantityDocument, 0, { productId: itemId, quantity, total: 0 });
}

export const removeItem = (itemId: string) => {
  revalidatePath(`/app/cart`);
  return executeInstantGraphql(CartDeleteItemDocument, 0, { orderItemId: itemId });
}
