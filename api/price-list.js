// api/price-list.js
import { callAtlantic } from "./_utils";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: false, message: "Method not allowed" });
  }
  try {
    // Sesuaikan path dan parameter dengan endpoint pricelist Atlantic kamu.
    const { httpStatus, json } = await callAtlantic("/price_list", {});
    return res.status(httpStatus).json(json);
  } catch (err) {
    console.error("price-list error", err);
    return res.status(500).json({ status: false, message: "Error server saat memuat price list." });
  }
}
