import Link from "next/link";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto w-full max-w-3xl px-4 py-10">
        <div className="mb-6">
          <Link className="text-sm text-white/70 hover:text-white" href="/">
            ← Back
          </Link>
        </div>

        <h1 className="text-2xl font-bold">Tools</h1>
        <p className="mt-2 text-white/70">
          Halaman tools. Isi tools downloader/utility kamu di sini.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold">Placeholder</div>
          <div className="text-sm text-white/70">
            Nanti kamu tambahin fiturnya.
          </div>
        </div>
      </div>
    </main>
  );
}
