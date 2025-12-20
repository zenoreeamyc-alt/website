import PageShell from "@/components/PageShell";
import BackButton from "@/components/BackButton";

export default function Kontak() {
  return (
    <PageShell>
      <BackButton />
      <div className="mt-4 card p-5 shadow-soft">
        <h1 className="text-2xl font-extrabold">Contact</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Hubungi saya melalui informasi di bawah.
        </p>

        <div className="mt-4 space-y-3">
          <Item label="Email" value="zenoreamyc@gmail.com" href="mailto:zenoreamyc@gmail.com" />
          <Item label="WhatsApp" value="+62 851-8965-6447" href="https://wa.me/6285189656447" />
          <Item label="GitHub" value="github.com/caevzz" href="https://github.com/caevzz" />
        </div>
      </div>

      <div className="mt-4 card p-5 shadow-soft">
        <h2 className="text-xl font-bold">Contact Form</h2>
        <form className="mt-3 space-y-3" action="mailto:zenoreamyc@gmail.com" method="post" encType="text/plain">
          <input className="w-full rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200/40 dark:border-slate-700/40 p-4 outline-none" placeholder="Full Name" name="name" />
          <input className="w-full rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200/40 dark:border-slate-700/40 p-4 outline-none" placeholder="Email Address" name="email" />
          <textarea className="w-full min-h-[120px] rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200/40 dark:border-slate-700/40 p-4 outline-none" placeholder="Your Message" name="message" />
          <button className="w-full rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 py-4 font-semibold border border-slate-200/20">
            Send Message
          </button>
        </form>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          *Untuk form yang benar-benar kirim tanpa aplikasi email, nanti tinggal sambungkan ke API (Telegram/Email).
        </p>
      </div>

      <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
        © 2025 ZyrooNour. All rights reserved.
      </div>
    </PageShell>
  );
}

function Item({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="cardInner p-4 flex items-center justify-between gap-3">
      <div>
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-sm text-slate-500 dark:text-slate-400">{value}</div>
      </div>
      <a className="text-sm text-blue-400 hover:underline" href={href} target="_blank">
        Open
      </a>
    </div>
  );
}
