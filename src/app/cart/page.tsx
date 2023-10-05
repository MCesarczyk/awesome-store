import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { executeGraphql } from "@/api/executeGraphql";
import { CartGetByIdDocument } from "@/gql/graphql";
import { formatMoney } from "@/utils";
import { UpdateButtons } from "@/app/cart/updateButtons";
 
export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;
 
	if (!cartId) {
		redirect("/");
	}
 
	const { order: cart } = await executeGraphql(CartGetByIdDocument, { 
		id: cartId, status: "PENDING"
	});
 
	if (!cart) {
		redirect("/");
	}
 
	return (
		<div className="p-24">
			<h1>Order #{cart.id} summary</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Total:</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map((item) => {
						if (!item.productId) {
							return null;
						}

						return (
							<tr key={item.id}>
								<td>{item.quantity}</td>
								<td>{formatMoney(item.total)}</td>
								<td>
									<UpdateButtons itemId={item.id} quantity={item.quantity} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
