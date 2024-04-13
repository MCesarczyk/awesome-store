export default function StaticLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="p-8">{children}</main>
    </div>
  );
}
