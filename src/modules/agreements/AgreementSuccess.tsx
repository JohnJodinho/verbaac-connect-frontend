export default function AgreementSuccess() {
  return (
    <section aria-label="Agreement Success" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Agreement Success</h1>
      {/* TODO: Render success message here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <p className="text-green-600 font-semibold">Agreement signed successfully!</p>
      </div>
    </section>
  );
}
