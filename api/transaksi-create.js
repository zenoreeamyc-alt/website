// api/transaksi-create.js
import { readJsonBody, callAtlantic } from "./_utils";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: false, message: "Method not allowed" });
  }
  const body = await readJsonBody(req);
  const { code, target, reff_id } = body || {};
  if (!code || !target) {
    return res.status(400).json({ status: false, message: "code dan target wajib diisi." });
  }
  const ref = reff_id || `TRX${Date.now()}`;
  try {
    const { httpStatus, json } = await callAtlantic("/transaksi/create", {
      code,
      target,
      reff_id: ref,
    });
    return res.status(httpStatus).json(json);
  } catch (err) {
    console.error("transaksi-create error", err);
    return res.status(500).json({ status: false, message: "Error server saat create transaksi." });
  }
}
