import VerificationForm from "./forms/verificationForm";

// this function is rendered server-side
export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <VerificationForm />
      </div>
    </main>
  );
}
