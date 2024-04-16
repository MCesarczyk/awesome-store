import { currentUser } from "@clerk/nextjs";

export default async function OrdersPage() {
  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;

  if(!email) {
    return (
      <div>
        <p>No email found</p>
      </div>
    );
  }

  // TODO: Fetch orders for the user

  return (
    <div>
      <pre>{JSON.stringify(await currentUser(), null, 2)}</pre>
    </div>
  );
}
