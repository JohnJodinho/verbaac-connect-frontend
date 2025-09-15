export default function KYCVerification() {
  return (
    <section aria-label="KYC Verification" className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">KYC Verification</h1>
      {/* TODO: Render KYC verification form here */}
      <form className="max-w-lg mx-auto bg-card p-6 rounded-2xl shadow">
        <label className="block mb-2 font-medium">ID Number</label>
        <input className="w-full mb-4 p-2 border rounded-lg" type="text" placeholder="Enter your ID number" />
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">Verify</button>
      </form>
    </section>
  );
}
