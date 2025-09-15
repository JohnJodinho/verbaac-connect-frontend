import { Card } from "../../components/ui/card";

export default function MarketplaceList() {
  return (
    <section aria-label="Marketplace" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Marketplace</h1>
      {/* TODO: Render product cards here */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder card */}
        <Card aria-label="Product Card">
          <div className="p-6">
            <h2 className="text-xl font-semibold">Sample Product</h2>
            <p className="text-muted-foreground">Category: Electronics</p>
            <p className="font-bold mt-2">N50,000</p>
            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">Escrow</span>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Add to Cart</button>
          </div>
        </Card>
      </div>
    </section>
  );
}
