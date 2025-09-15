export default function ProductDetail() {
  return (
    <section aria-label="Product Detail" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Product Details</h1>
      {/* TODO: Render product details here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <h2 className="text-xl font-semibold">Sample Product</h2>
        <p className="text-muted-foreground">Category: Electronics</p>
        <p className="font-bold mt-2">N50,000</p>
        <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">Escrow</span>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Add to Cart</button>
      </div>
    </section>
  );
}
