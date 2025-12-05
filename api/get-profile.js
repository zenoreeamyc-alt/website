// api/get-profile.js
import { callAtlantic } from "./_utils";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: false, message: "Method not allowed" });
  }
  try {
    const { httpStatus, json } = await callAtlantic("/get_profile", {});
    return res.status(httpStatus).json(json);
  } catch (err) {
    console.error("get-profile error", err);
    return res.status(500).json({ status: false, message: "Error server saat memuat profil." });
  }
}
