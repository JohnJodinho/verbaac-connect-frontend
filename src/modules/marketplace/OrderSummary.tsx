export default function OrderSummary() {
  return (
    <section aria-label="Order Summary" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Order Summary</h1>
      {/* TODO: Render order summary here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <p className="text-muted-foreground">No orders yet.</p>
      </div>
    </section>
  );
}
