export default function MyItems() {
  return (
    <section aria-label="My Items" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">My Posted Items</h1>
      {/* TODO: Render user's posted items here */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder card */}
        <div className="rounded-2xl shadow-lg p-6 bg-card">
          <h2 className="text-xl font-semibold">Sample Product</h2>
          <p className="text-muted-foreground">Category: Electronics</p>
          <p className="font-bold mt-2">N50,000</p>
          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">Escrow</span>
        </div>
      </div>
    </section>
  );
}
