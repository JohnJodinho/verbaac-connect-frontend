export default function RoommateMatch() {
  return (
    <section aria-label="Roommate Match" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Roommate Match</h1>
      {/* TODO: Render match form here */}
      <form className="max-w-lg mx-auto bg-card p-6 rounded-2xl shadow">
        <label className="block mb-2 font-medium">Preferences</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="text" placeholder="Enter preferences" />
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Find Matches</button>
      </form>
    </section>
  );
}
