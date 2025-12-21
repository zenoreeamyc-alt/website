import Image from "next/image";
import { site } from "@/config/site";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function CardLink({
  title,
  desc,
  href
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
    >
      <div className="text-base font-semibold">{title}</div>
      <div className="text-sm text-white/70">{desc}</div>
    </a>
  );
}

function ButtonLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition"
    >
      {label}
    </a>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Cover */}
      <div className="relative h-56 w-full">
        <Image
          src={site.coverImage}
          alt="Cover"
          fill
          priority
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-neutral-950" />
      </div>

      <section className="mx-auto -mt-14 w-full max-w-3xl px-4 pb-16">
        {/* Profile */}
        <div className="flex items-end gap-4">
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src={site.avatarImage}
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold leading-tight">{site.name}</h1>
            <p className="text-sm text-white/70">{site.subtitle}</p>

            <div className="mt-2 flex flex-wrap gap-2">
              {site.tags.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>
        </div>

        {/* Spotify */}
        <div className="mt-8">
          <div className="mb-3 text-sm font-semibold text-white/90">
            Spotify Playlist
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <iframe
              src={site.spotifyEmbedUrl}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8">
          <div className="mb-3 text-sm font-semibold text-white/90">
            Navigation
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {site.navigation.map((n) => (
              <CardLink
                key={n.title}
                title={n.title}
                desc={n.desc}
                href={n.href}
              />
            ))}
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="mt-8 scroll-mt-24">
          <div className="mb-3 text-sm font-semibold text-white/90">Contact</div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold">Contact Help Center</div>
            <div className="text-sm text-white/70">
              Hubungi kami lewat channel berikut
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <ButtonLink label="WhatsApp" href={site.contact.whatsapp} />
              <ButtonLink label="Telegram" href={site.contact.telegram} />
            </div>
          </div>
        </div>

        {/* Community */}
        <div className="mt-8">
          <div className="mb-3 text-sm font-semibold text-white/90">
            Community
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold">Grup Chat</div>
            <div className="text-sm text-white/70">
              Gabung ke grup support &amp; sharing
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {site.community.groupChat.map((x) => (
                <ButtonLink key={x.label} label={x.label} href={x.href} />
              ))}
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold">Channel Info</div>
            <div className="text-sm text-white/70">
              Dapatkan notifikasi update penting
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {site.community.channelInfo.map((x) => (
                <ButtonLink key={x.label} label={x.label} href={x.href} />
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {site.name}
        </footer>
      </section>

      {site.verifiedPopup.enabled ? (
        <VerifiedPopup
          title={site.verifiedPopup.title}
          text={site.verifiedPopup.text}
          buttonText={site.verifiedPopup.buttonText}
        />
      ) : null}
    </main>
  );
}

function VerifiedPopup({
  title,
  text,
  buttonText
}: {
  title: string;
  text: string;
  buttonText: string;
}) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function(){
  const key="verified_popup_closed";
  try {
    if(localStorage.getItem(key)) return;
  } catch (e) {}

  const wrap=document.createElement("div");
  wrap.setAttribute("role","dialog");
  wrap.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.55);z-index:9999;padding:16px;";

  wrap.innerHTML=\`
    <div style="max-width:420px;width:100%;background:#0a0a0a;border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:16px;color:#fff;font-family:ui-sans-serif,system-ui;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
        <div style="font-weight:800;">${title}</div>
        <div style="font-size:12px;opacity:.75;border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:4px 10px;background:rgba(255,255,255,.06);">verified</div>
      </div>
      <div style="font-size:13px;opacity:.82;line-height:1.55;margin-top:8px;">${text}</div>
      <button id="vbtn" style="margin-top:12px;width:100%;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);color:#fff;cursor:pointer;">
        ${buttonText}
      </button>
    </div>\`;

  document.body.appendChild(wrap);

  const close = () => {
    try { localStorage.setItem(key,"1"); } catch (e) {}
    wrap.remove();
  };

  document.getElementById("vbtn").onclick = close;
  wrap.addEventListener("click", (e) => { if (e.target === wrap) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); }, { once: true });
})();`
      }}
    />
  );
}
