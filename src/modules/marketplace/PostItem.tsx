export default function PostItem() {
  return (
    <section aria-label="Post Item" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Post New Item</h1>
      {/* TODO: Render post item form here */}
      <form className="max-w-lg mx-auto bg-card p-6 rounded-2xl shadow">
        <label className="block mb-2 font-medium">Product Name</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="text" placeholder="Enter product name" />
        <label className="block mb-2 font-medium">Category</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="text" placeholder="Enter category" />
        <label className="block mb-2 font-medium">Price</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="number" placeholder="Enter price" />
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Submit</button>
      </form>
    </section>
  );
}
