export default function ReviewAgreement() {
  return (
    <section aria-label="Review Agreement" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Review Agreement</h1>
      {/* TODO: Render agreement review here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <p className="text-muted-foreground">Review the terms before signing.</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Proceed to Sign</button>
      </div>
    </section>
  );
}
