/// <reference types="stripe-event-types" />
import { type NextRequest } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    redirect("/");
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Stripe secret key is not set");
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error("Stripe webhook secret is not set");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
    typescript: true,
  })

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return new Response("Stripe signature is not set", { status: 401 });
  }

  const event = stripe.webhooks.constructEvent(await request.text(), signature, process.env.STRIPE_WEBHOOK_SECRET) as Stripe.DiscriminatedEvent;

  switch (event.type) {
    case "checkout.session.completed":
      console.log(event.data.object.metadata?.cartId);
      break;
    case "checkout.session.expired":
      console.dir(event);
      break;
    case "checkout.session.async_payment_failed":
      console.log("Payment intent failed", event.data.object);
      break;
    case "checkout.session.async_payment_succeeded":
      console.log("Payment intent succeeded", event.data.object);
      break;
    default:
      console.log("Unhandled event", event.type);
      break;
  };

  new Response("OK", { status: 200 });
}
