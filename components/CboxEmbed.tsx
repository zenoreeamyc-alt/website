export default function CboxEmbed() {
  const src = "https://www3.cbox.ws/box/?boxid=3550944&boxtag=FnAAxT";
  return (
    <div className="card p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">@Fronzy</h2>
        <a
          className="text-sm text-blue-400 hover:underline"
          target="_blank"
          href={src}
        >
          Open
        </a>
      </div>
      <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200/40 dark:border-slate-700/40 bg-white">
        <iframe
          src={src}
          width="100%"
          height="420"
          frameBorder="0"
          scrolling="yes"
          title="Cbox"
        />
      </div>
    </div>
  );
}
