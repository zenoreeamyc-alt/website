// api/deposit-status.js
import { readJsonBody, callAtlantic } from "./_utils";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: false, message: "Method not allowed" });
  }
  const body = await readJsonBody(req);
  const { id } = body || {};
  if (!id) {
    return res.status(400).json({ status: false, message: "id deposit wajib diisi." });
  }
  try {
    const { httpStatus, json } = await callAtlantic("/deposit/status", { id });
    return res.status(httpStatus).json(json);
  } catch (err) {
    console.error("deposit-status error", err);
    return res.status(500).json({ status: false, message: "Error server saat cek status deposit." });
  }
}
