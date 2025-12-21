import Link from "next/link";

export default function ProdukPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto w-full max-w-3xl px-4 py-10">
        <div className="mb-6">
          <Link className="text-sm text-white/70 hover:text-white" href="/">
            ← Back
          </Link>
        </div>

        <h1 className="text-2xl font-bold">Produk</h1>
        <p className="mt-2 text-white/70">
          Halaman produk. Isi daftar produk kamu di sini.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold">Contoh item</div>
          <div className="text-sm text-white/70">Produk A - Rp XX.XXX</div>
        </div>
      </div>
    </main>
  );
}
