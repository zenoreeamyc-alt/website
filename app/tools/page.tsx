import PageShell from "@/components/PageShell";
import BackButton from "@/components/BackButton";

const TOOLS = [
  { cat: "Downloader", items: [
    { title: "TikTok Downloader", desc: "Download media from TikTok without watermark", users: 166, likes: 17, popular: true },
    { title: "YouTube Downloader", desc: "Download media from YouTube", users: 69, likes: 13, popular: false },
    { title: "Instagram Downloader", desc: "Download media from Instagram posts", users: 26, likes: 10, popular: false },
  ]},
  { cat: "Generator", items: [
    { title: "AI Image Generator", desc: "Generate images using AI prompts", users: 77, likes: 7, popular: true },
    { title: "QR Code Generator", desc: "Create QR codes from any text or link", users: 71, likes: 7, popular: false },
    { title: "Remove Background", desc: "Remove Image Background", users: 27, likes: 1, popular: false },
  ]},
  { cat: "Utility", items: [
    { title: "Text to Base64", desc: "Convert plain text into base64 format", users: 48, likes: 6, popular: true },
    { title: "Text Styler", desc: "Apply font styles to your input text", users: 42, likes: 5, popular: false },
  ]},
];

export default function Tools() {
  return (
    <PageShell>
      <BackButton />
      <div className="mt-4 card p-5 shadow-soft">
        <h1 className="text-3xl font-extrabold">Available Tools</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Choose a tool to use from the categories below
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Stat title="Total Tools" value="7" sub="Available" />
          <Stat title="Total Users" value="390" sub="This Month" />
          <Stat title="Total Likes" value="62" sub="Community" />
          <Stat title="Popular Tool" value="TikTok Downloader" sub="166 users • 17 likes" accent />
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {TOOLS.map((sec) => (
          <div key={sec.cat}>
            <h2 className="text-xl font-extrabold mb-3">{sec.cat}</h2>
            <div className="space-y-3">
              {sec.items.map((t) => (
                <div key={t.title} className="card p-4 shadow-soft">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold">{t.title}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{t.desc}</div>
                    </div>
                    {t.popular && (
                      <span className="text-[11px] font-semibold tracking-wide rounded-md px-2 py-1 border border-amber-500/40 text-amber-300 bg-amber-500/10">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex items-center justify-end gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span>👥 {t.users}</span>
                    <span>♡ {t.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400">
        © 2025 ZyrooNour. All rights reserved.
      </div>
    </PageShell>
  );
}

function Stat({ title, value, sub, accent }: { title: string; value: string; sub: string; accent?: boolean }) {
  return (
    <div className="rounded-2xl border border-slate-200/30 dark:border-slate-700/40 bg-white/10 dark:bg-white/5 p-4">
      <div className="text-xs text-slate-500 dark:text-slate-400">{title}</div>
      <div className={"mt-2 font-extrabold " + (accent ? "text-amber-300" : "text-slate-100 dark:text-white")}>
        {value}
      </div>
      <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{sub}</div>
    </div>
  );
}
