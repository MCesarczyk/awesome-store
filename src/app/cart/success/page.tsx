export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { redirect_status: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	return <div className="p-4"><h1 className="text-xl font-semibold">{searchParams.redirect_status}</h1></div>;
}
