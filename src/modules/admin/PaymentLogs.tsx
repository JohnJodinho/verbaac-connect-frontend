export default function PaymentLogs() {
  return (
    <section aria-label="Payment Logs" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Payment Logs</h1>
      {/* TODO: Render payment logs here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <p className="text-muted-foreground">No payments found.</p>
      </div>
    </section>
  );
}
