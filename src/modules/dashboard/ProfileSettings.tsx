export default function ProfileSettings() {
  return (
    <section aria-label="Profile Settings" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
      {/* TODO: Render profile settings form here */}
      <form className="max-w-lg mx-auto bg-card p-6 rounded-2xl shadow">
        <label className="block mb-2 font-medium">Name</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="text" placeholder="Enter your name" />
        <label className="block mb-2 font-medium">Email</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="email" placeholder="Enter your email" />
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Save</button>
      </form>
    </section>
  );
}
