import PageShell from "@/components/PageShell";
import BackButton from "@/components/BackButton";

export default function Donasi() {
  return (
    <PageShell>
      <BackButton />
      <div className="mt-4 card p-5 shadow-soft">
        <h1 className="text-2xl font-extrabold">Donasi</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Support project secara sukarela.
        </p>
        <div className="mt-4 space-y-3">
          <a className="block rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200/40 dark:border-slate-700/40 p-4" href="#" target="_blank">
            QRIS (coming soon)
          </a>
          <a className="block rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200/40 dark:border-slate-700/40 p-4" href="#" target="_blank">
            Saweria (coming soon)
          </a>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400">
        © 2025 ZyrooNour. All rights reserved.
      </div>
    </PageShell>
  );
}
