export default function MyListings() {
  return (
    <section aria-label="My Listings" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">My Property Listings</h1>
      {/* TODO: Render user's property listings here */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder card */}
        <div className="rounded-2xl shadow-lg p-6 bg-card">
          <h2 className="text-xl font-semibold">Sample Property</h2>
          <p className="text-muted-foreground">Location: University Area</p>
          <p className="font-bold mt-2">N150,000 / year</p>
          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">Available</span>
        </div>
      </div>
    </section>
  );
}
