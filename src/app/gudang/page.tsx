import Link from "next/link";

export default function GudangPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto w-full max-w-3xl px-4 py-10">
        <div className="mb-6">
          <Link className="text-sm text-white/70 hover:text-white" href="/">
            ← Back
          </Link>
        </div>

        <h1 className="text-2xl font-bold">Gudang Script</h1>
        <p className="mt-2 text-white/70">
          Halaman gudang script. Kamu bisa isi list script + link download.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold">Contoh</div>
          <div className="text-sm text-white/70">Script A - Link</div>
        </div>
      </div>
    </main>
  );
}
