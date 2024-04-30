export const dynamic = "force-dynamic";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { StripeForm } from "./StripeForm";
import { executeGraphql } from "@/api/executeGraphql";
import { CartGetByIdDocument } from "@/gql/graphql";
 
export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;
 
	if (!cartId) {
		redirect("/");
	}

	if(!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe secret key is not set");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-04-10",
		typescript: true,
	})
	
	const { order: cart } = await executeGraphql(CartGetByIdDocument, { 
		id: cartId, status: "PENDING", next: {
			revalidate: 0,
		}
	});

	if(!cart) {
		redirect("/");
	}
	
	const totalAmount = cart.orderItems.reduce((acc, item) => acc + (item ? 100 : 0), 0);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: totalAmount,
		currency: "usd",
		automatic_payment_methods: {
			enabled: true,
		},
		metadata: {
			orderId: cart.id,
		}
	});

	if(!paymentIntent.client_secret) {
		throw new Error("Payment intent client secret is not set");
	}

	return <StripeForm clientSecret={paymentIntent.client_secret} />;
}
