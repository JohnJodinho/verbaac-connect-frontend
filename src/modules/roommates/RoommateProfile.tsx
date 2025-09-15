export default function RoommateProfile() {
  return (
    <section aria-label="Roommate Profile" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Roommate Profile</h1>
      {/* TODO: Render roommate profile here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <h2 className="text-xl font-semibold">Sample Roommate</h2>
        <p className="text-muted-foreground">Major: Computer Science</p>
        <p className="font-bold mt-2">Match: 85%</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Connect</button>
      </div>
    </section>
  );
}
