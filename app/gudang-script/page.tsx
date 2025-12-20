import PageShell from "@/components/PageShell";
import BackButton from "@/components/BackButton";

export default function GudangScript() {
  return (
    <PageShell>
      <BackButton />
      <div className="mt-4 card p-5 shadow-soft">
        <h1 className="text-2xl font-extrabold">Gudang Script</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Free script warehouse.
        </p>
        <div className="mt-4 rounded-2xl bg-white/10 dark:bg-white/5 border border-slate-200/30 dark:border-slate-700/40 p-4 text-sm">
          Konten gudang script bisa kamu sambungkan ke API / database kamu sendiri.
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400">
        © 2025 ZyrooNour. All rights reserved.
      </div>
    </PageShell>
  );
}
