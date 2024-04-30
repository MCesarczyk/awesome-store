import { useState, useEffect, type FormEvent } from "react";
import {
	PaymentElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";

import "./stripe.css";

export function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();

	const [message, setMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(
			window.location.search,
		).get("payment_intent_client_secret");

		if (!clientSecret) {
			return;
		}

		stripe
			.retrievePaymentIntent(clientSecret)
			.then(({ paymentIntent }) => {
				switch (paymentIntent?.status) {
					case "succeeded":
						setMessage("Payment succeeded!");
						break;
					case "processing":
						setMessage("Your payment is processing.");
						break;
					case "requires_payment_method":
						setMessage(
							"Your payment was not successful, please try again.",
						);
						break;
					default:
						setMessage("Something went wrong.");
						break;
				}
			})
			.catch(console.error);
	}, [stripe]);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setIsLoading(true);

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: "http://localhost:3030/cart/success",
			},
		});

		if (
			error.type === "card_error" ||
			error.type === "validation_error"
		) {
			setMessage(error.message ?? "Something went wrong");
		} else {
			setMessage("An unexpected error occurred.");
		}

		setIsLoading(false);
	};

	const paymentElementOptions = {
		layout: "tabs",
	} as const;

	return (
		<div className="stripe bg-gray-300">
			<form id="payment-form" className="min-w-1/3 w-96 self-center shadow-sm rounded-lg p-10" onSubmit={handleSubmit}>
				<PaymentElement
					id="payment-element"
					options={paymentElementOptions}
				/>
				<button
        className="bg-blue-700 text-white p-4 rounded-md mt-8 hover:bg-blue-500 focus:bg-blue-800 w-full"
					disabled={isLoading || !stripe || !elements}
					id="submit"
				>
					<span id="button-text">
						{isLoading ? (
							<div className="spinner" id="spinner"></div>
						) : (
							"Pay now"
						)}
					</span>
				</button>
				{message && <div id="payment-message">{message}</div>}
			</form>
		</div>
	);
}
