export default function ListProperty() {
  return (
    <section aria-label="List Property" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Add New Property</h1>
      {/* TODO: Render property form here */}
      <form className="max-w-lg mx-auto bg-card p-6 rounded-2xl shadow">
        <label className="block mb-2 font-medium">Property Name</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="text" placeholder="Enter property name" />
        <label className="block mb-2 font-medium">Location</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="text" placeholder="Enter location" />
        <label className="block mb-2 font-medium">Price per year</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="number" placeholder="Enter price" />
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Submit</button>
      </form>
    </section>
  );
}
