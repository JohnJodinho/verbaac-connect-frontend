export default function InviteRoommate() {
  return (
    <section aria-label="Invite Roommate" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Invite Roommate</h1>
      {/* TODO: Render invite UI here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <p className="text-muted-foreground">Send an invite to connect.</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Send Invite</button>
      </div>
    </section>
  );
}
