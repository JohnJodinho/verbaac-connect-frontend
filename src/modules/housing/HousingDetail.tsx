export default function HousingDetail() {
  return (
    <section aria-label="Housing Detail" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Property Details</h1>
      {/* TODO: Render property details here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <h2 className="text-xl font-semibold">Sample Property</h2>
        <p className="text-muted-foreground">Location: University Area</p>
        <p className="font-bold mt-2">N150,000 / year</p>
        <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">Available</span>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Contact Landlord</button>
      </div>
    </section>
  );
}
