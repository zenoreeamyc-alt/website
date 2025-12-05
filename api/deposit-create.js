// api/deposit-create.js
import { readJsonBody, callAtlantic } from "./_utils";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: false, message: "Method not allowed" });
  }
  const body = await readJsonBody(req);
  const { nominal, type = "ewallet", metode = "qris", ref_id } = body || {};
  if (!nominal) {
    return res.status(400).json({ status: false, message: "nominal wajib diisi." });
  }
  const reff_id = ref_id || `DEP${Date.now()}`;
  try {
    const { httpStatus, json } = await callAtlantic("/deposit/create", {
      ref_id: reff_id,
      nominal,
      type,
      metode,
    });
    return res.status(httpStatus).json(json);
  } catch (err) {
    console.error("deposit-create error", err);
    return res.status(500).json({ status: false, message: "Error server saat create deposit." });
  }
}
