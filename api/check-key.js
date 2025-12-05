// api/check-key.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: false, message: "Method not allowed" });
  }
  const API_KEY = process.env.ATLANTIC_API_KEY;
  if (!API_KEY) {
    return res.status(500).json({ status: false, message: "ATLANTIC_API_KEY belum diset." });
  }
  return res.status(200).json({ status: true, message: "API key terdeteksi di server." });
}
