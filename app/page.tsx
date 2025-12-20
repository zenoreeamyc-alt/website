import PageShell from "@/components/PageShell";
import ProfileCard from "@/components/ProfileCard";
import NavCard from "@/components/NavCard";
import { BagIcon, CodeIcon, GroupIcon, MailIcon, MegaphoneIcon, ToolsIcon, HeartIcon } from "@/components/icons";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import AnimeSlider from "@/components/AnimeSlider";
import CboxEmbed from "@/components/CboxEmbed";

export default function Home() {
  return (
    <PageShell>
      <ProfileCard />

      <div className="mt-5 space-y-3">
        <SpotifyEmbed playlistUrl="https://open.spotify.com/playlist/5oVzQUYicfqlOzCUVh240Z?si=QlN5Ijq1TQusZr6mAAMppw" />
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-extrabold tracking-tight mb-3">Navigation</h3>
        <div className="space-y-3">
          <NavCard href="/kontak" title="Contact" desc="Contact Help Center" icon={<MailIcon />} />
          <NavCard href="/produk" title="Produk" desc="View available products" icon={<BagIcon />} />
          <NavCard href="/tools" title="Tools" desc="Free Downloader & Web Utilities" icon={<ToolsIcon />} />
          <NavCard href="/gudang-script" title="Gudang Script" desc="Free script warehouse" icon={<CodeIcon />} />
          <NavCard href="/donasi" title="Donasi" desc="Support our project voluntarily" icon={<HeartIcon />} />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-extrabold tracking-tight mb-3">Community</h3>
        <div className="space-y-3">
          <NavCard href="/grup-chat" title="Grup Chat" desc="Gabung ke grup support & sharing" icon={<GroupIcon />} />
          <NavCard href="/channel-info" title="Channel Info" desc="Dapatkan notifikasi update penting" icon={<MegaphoneIcon />} />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <AnimeSlider />
        <CboxEmbed />
      </div>

      <div className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400">
        © 2025 ZyrooNour. All rights reserved.
      </div>
    </PageShell>
  );
}
