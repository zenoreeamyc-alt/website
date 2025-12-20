import PageShell from "@/components/PageShell";
import BackButton from "@/components/BackButton";

export default function GrupChat() {
  return (
    <PageShell>
      <BackButton />
      <div className="mt-4 card p-5 shadow-soft">
        <h1 className="text-2xl font-extrabold">Grup Chat</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Gabung ke grup support & sharing.
        </p>
        <div className="mt-4 grid gap-3">
          <a className="rounded-2xl bg-emerald-600 text-white p-4 font-semibold text-center" href="https://wa.me/6285189656447" target="_blank">
            WhatsApp
          </a>
          <a className="rounded-2xl bg-sky-600 text-white p-4 font-semibold text-center" href="https://t.me/" target="_blank">
            Telegram
          </a>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400">
        © 2025 ZyrooNour. All rights reserved.
      </div>
    </PageShell>
  );
}
