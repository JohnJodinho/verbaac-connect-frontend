export default function CreateAgreement() {
  return (
    <section aria-label="Create Agreement" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Agreement</h1>
      {/* TODO: Render agreement form here */}
      <form className="max-w-lg mx-auto bg-card p-6 rounded-2xl shadow">
        <label className="block mb-2 font-medium">Agreement Title</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="text" placeholder="Enter agreement title" />
        <label className="block mb-2 font-medium">Parties Involved</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="text" placeholder="Enter parties" />
        <label className="block mb-2 font-medium">Start Date</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="date" />
        <label className="block mb-2 font-medium">End Date</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="date" />
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Submit</button>
      </form>
    </section>
  );
}
