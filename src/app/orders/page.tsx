import { auth, currentUser } from "@clerk/nextjs";

export default async function OrdersPage() {
  return (
    <div>
      <h2>Auth:</h2>
      <pre>{JSON.stringify(auth(), null, 2)}</pre>
      <h2>User:</h2>
      <pre>{JSON.stringify(await currentUser(), null, 2)}</pre>
    </div>
  );
}
