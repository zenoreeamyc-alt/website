import PageShell from "@/components/PageShell";
import BackButton from "@/components/BackButton";

const PRODUCTS = [
  { title: "Desain Logo", desc: "Desain logo profesional sesuai kebutuhan brand Anda.", price: "Mulai Rp 1,5K", rating: "4.8" },
  { title: "Pembuatan Website", desc: "Jasa pembuatan website murah untuk mengembangkan bisnis Anda.", price: "Mulai Rp 5K", rating: "4.8" },
  { title: "Panel Pterodactyl", desc: "Panel murah performa tinggi untuk hosting bot kamu.", price: "Mulai Rp 1K", rating: "4.8" },
  { title: "Sewa Bot Pushkontak", desc: "Broadcast pesan ke banyak grup atau kontak dalam waktu singkat.", price: "Mulai Rp 2K", rating: "4.8" },
];

export default function Produk() {
  return (
    <PageShell>
      <BackButton />
      <div className="mt-4 card p-5 shadow-soft">
        <h1 className="text-2xl font-extrabold">Produk</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Produk kami & layanan digital.
        </p>
      </div>

      <div className="mt-4 space-y-4">
        {PRODUCTS.map((p) => (
          <div key={p.title} className="card shadow-soft overflow-hidden">
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xl font-bold">{p.title}</div>
                  <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{p.desc}</div>
                </div>
                <span className="shrink-0 rounded-full bg-white/70 dark:bg-white/5 border border-slate-200/40 dark:border-slate-700/40 px-3 py-1 text-xs">
                  {p.price}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button className="rounded-xl bg-blue-600 text-white px-4 py-2 text-sm font-semibold">
                  Selengkapnya
                </button>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  ⭐ {p.rating}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
        © 2025 ZyrooNour. All rights reserved.
      </div>
    </PageShell>
  );
}
