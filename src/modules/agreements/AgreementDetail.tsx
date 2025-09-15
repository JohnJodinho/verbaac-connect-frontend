export default function AgreementDetail() {
  return (
    <section aria-label="Agreement Detail" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Agreement Details</h1>
      {/* TODO: Render agreement details here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <h2 className="text-xl font-semibold">Sample Agreement</h2>
        <p className="text-muted-foreground">Parties: Student, Landlord</p>
        <p className="font-bold mt-2">Status: Pending</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Sign Agreement</button>
      </div>
    </section>
  );
}
