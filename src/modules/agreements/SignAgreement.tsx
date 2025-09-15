export default function SignAgreement() {
  return (
    <section aria-label="Sign Agreement" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Sign Agreement</h1>
      {/* TODO: Render signing UI here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <p className="text-muted-foreground">Sign the agreement below.</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Sign</button>
      </div>
    </section>
  );
}
