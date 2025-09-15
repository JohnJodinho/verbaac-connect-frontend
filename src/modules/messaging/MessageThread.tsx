export default function MessageThread() {
  return (
    <section aria-label="Message Thread" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Message Thread</h1>
      {/* TODO: Render message thread here */}
      <div className="rounded-2xl shadow-lg p-6 bg-card">
        <p className="text-muted-foreground">No messages in this thread.</p>
      </div>
    </section>
  );
}
