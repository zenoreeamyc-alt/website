export const site = {
  name: "ZyrooNour",
  subtitle: "Just a personal hub.",
  tags: ["Dev", "Music", "Community"],

  coverImage: "/images/cover.jpg",
  avatarImage: "/images/avatar.jpg",

  // Replace with your own embed URL
  spotifyEmbedUrl:
    "https://open.spotify.com/embed/playlist/5oVzQUYicfqlOzCUVh240Z?utm_source=generator",

  cboxEmbedUrl:
    "https://www3.cbox.ws/box/?boxid=3550944&boxtag=FnAAxT",

  navigation: [
    { title: "Contact", desc: "Contact Help Center", href: "#contact" },
    { title: "Produk", desc: "View available products", href: "/produk" },
    { title: "Tools", desc: "Free Downloader & Web Utilities", href: "/tools" },
    { title: "Gudang Script", desc: "Free script warehouse", href: "/gudang" },
    { title: "Donasi", desc: "Support our project voluntarily", href: "/donasi" }
  ],

  contact: {
    whatsapp: "https://wa.me/6281234567890",
    telegram: "https://t.me/username"
  },

  community: {
    groupChat: [
      { label: "WhatsApp", href: "https://chat.whatsapp.com/XXXX" },
      { label: "Telegram", href: "https://t.me/XXXX" }
    ],
    channelInfo: [
      { label: "Info [wa]", href: "https://whatsapp.com/channel/XXXX" },
      { label: "Info [tele]", href: "https://t.me/XXXX" },
      { label: "NeoShiroko", href: "https://t.me/XXXX" }
    ]
  },

  verifiedPopup: {
    enabled: true,
    title: "Verified Account",
    text: "This is a verified website. All authentic content and can be trusted.",
    buttonText: "Got it"
  }
} as const;
