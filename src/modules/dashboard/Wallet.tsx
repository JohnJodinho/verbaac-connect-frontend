export default function Wallet() {
  return (
    <section aria-label="Wallet" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Wallet</h1>
      {/* TODO: Render wallet info here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <p className="text-muted-foreground">Your wallet balance: N0.00</p>
      </div>
    </section>
  );
}
