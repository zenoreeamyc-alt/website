import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="card p-5 shadow-soft">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full overflow-hidden border border-slate-200/40 dark:border-slate-700/40 bg-black/20">
          <Image
            src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=200&q=60"
            alt="Profile"
            width={128}
            height={128}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold truncate">ZyrooNour</h1>
            <span className="inline-flex h-5 items-center rounded-full bg-blue-500/15 text-blue-400 px-2 text-xs border border-blue-500/20">
              ✓
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
            Personal Website
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-3 text-sm">
        <span className="rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1">Coder</span>
        <span className="rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-3 py-1">Game</span>
        <span className="rounded-full bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20 px-3 py-1">Music</span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <a className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-200" href="https://github.com/caevzz" target="_blank">GitHub</a>
        <a className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-200" href="https://t.me/" target="_blank">Telegram</a>
        <a className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-200" href="https://wa.me/6285189656447" target="_blank">WhatsApp</a>
      </div>
    </div>
  );
}
