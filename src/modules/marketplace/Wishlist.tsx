export default function Wishlist() {
  return (
    <section aria-label="Wishlist" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Wishlist</h1>
      {/* TODO: Render wishlist items here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <p className="text-muted-foreground">No items in wishlist.</p>
      </div>
    </section>
  );
}
