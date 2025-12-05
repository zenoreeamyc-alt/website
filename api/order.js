// api/order.js
// Handler serverless Vercel untuk meneruskan order ke API Atlantic H2H.
// Pola mengikuti script WhatsApp:
// POST https://atlantich2h.com/transaksi/create
// Body (x-www-form-urlencoded): reff_id, code, target, api_key

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { service, target, note } = req.body || {};

  if (!service || !target) {
    return res.status(400).json({ message: "service (kode) dan target wajib diisi." });
  }

  const API_KEY = process.env.ATLANTIC_API_KEY;
  if (!API_KEY) {
    return res.status(500).json({ message: "ATLANTIC_API_KEY belum diset di environment Vercel." });
  }

  try {
    // Generate reff_id mirip gaya bot (WEB + timestamp)
    const reff_id = `WEB${Date.now()}`;

    const payload = new URLSearchParams({
      reff_id,
      code: String(service).toUpperCase(),
      target: String(target),
      api_key: API_KEY,
    });

    // NOTE: URL ini diambil dari config bot WhatsApp: base_url + "/transaksi/create"
    const atlanticUrl = "https://atlantich2h.com/transaksi/create";

    const response = await fetch(atlanticUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload.toString(),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return res.status(500).json({
        message: data && data.message ? data.message : "Gagal kirim ke API Atlantic (status bukan 2xx).",
        provider: data,
      });
    }

    if (!data || data.success === false) {
      return res.status(500).json({
        message: data && data.message ? data.message : "Response gagal dari API Atlantic.",
        provider: data,
      });
    }

    return res.status(200).json({
      message: "Order berhasil dikirim ke Atlantic. Cek status di bot / panel.",
      provider: data,
      reff_id,
    });
  } catch (err) {
    console.error("Atlantic API error:", err);
    return res.status(500).json({ message: "Terjadi error di server saat memproses order." });
  }
}
