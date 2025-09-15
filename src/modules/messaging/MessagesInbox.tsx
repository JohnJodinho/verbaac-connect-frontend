export default function MessagesInbox() {
  return (
    <section aria-label="Messages Inbox" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Messages Inbox</h1>
      {/* TODO: Render message threads here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <p className="text-muted-foreground">No messages.</p>
      </div>
    </section>
  );
}
