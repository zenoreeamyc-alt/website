// api/transaksi-status.js
import { readJsonBody, callAtlantic } from "./_utils";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: false, message: "Method not allowed" });
  }
  const body = await readJsonBody(req);
  const { id, type } = body || {};
  if (!id) {
    return res.status(400).json({ status: false, message: "id transaksi wajib diisi." });
  }
  try {
    const { httpStatus, json } = await callAtlantic("/transaksi/status", {
      id,
      type: type || "prabayar",
    });
    return res.status(httpStatus).json(json);
  } catch (err) {
    console.error("transaksi-status error", err);
    return res.status(500).json({ status: false, message: "Error server saat cek status transaksi." });
  }
}
