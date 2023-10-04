"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { executeGraphql } from "@/api/executeGraphql";
import { CartUpdateQuantityDocument } from "@/gql/graphql";
 
export function IncreaseButton({ itemId, quantity }: { itemId: string; quantity: number }) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);
 
	return (
		<form className="flex">
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<button
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await executeGraphql(CartUpdateQuantityDocument, {productId: itemId,quantity: optimisticQuantity + 1, total: 0});
				}}
			>
				+
			</button>
		</form>
	);
}
