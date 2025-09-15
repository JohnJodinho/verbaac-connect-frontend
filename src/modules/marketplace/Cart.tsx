export default function Cart() {
  return (
    <section aria-label="Cart" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {/* TODO: Render cart items here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <p className="text-muted-foreground">Your cart is empty.</p>
      </div>
    </section>
  );
}
