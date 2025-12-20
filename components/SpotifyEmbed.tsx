export default function SpotifyEmbed({ playlistUrl }: { playlistUrl: string }) {
  // Convert a share URL to embed URL
  const embed = playlistUrl.replace("open.spotify.com/", "open.spotify.com/embed/");
  return (
    <div className="card p-5 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold">Spotify Playlist</h2>
        <a href={playlistUrl} target="_blank" className="text-sm text-blue-400 hover:underline">
          Open in Spotify
        </a>
      </div>
      <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200/40 dark:border-slate-700/40">
        <iframe
          style={{ border: 0 }}
          src={`${embed}?utm_source=generator`}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
}
