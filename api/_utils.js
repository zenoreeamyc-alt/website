// api/_utils.js
// Helper umum untuk memanggil API Atlantic dari backend Vercel.

export async function readJsonBody(req) {
  return await new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        resolve({});
      }
    });
    req.on("error", reject);
  });
}

export async function callAtlantic(path, extraParams = {}) {
  const API_KEY = process.env.ATLANTIC_API_KEY;
  if (!API_KEY) {
    return {
      httpStatus: 500,
      json: { status: false, message: "ATLANTIC_API_KEY belum diset di environment Vercel." },
    };
  }

  const params = { api_key: API_KEY, ...extraParams };
  const search = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null) return;
    search.append(k, String(v));
  });

  const url = "https://atlantich2h.com" + path;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: search.toString(),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    return {
      httpStatus: 500,
      json: {
        status: false,
        message: (data && data.message) || "Gagal memanggil API Atlantic.",
        provider: data,
      },
    };
  }

  return {
    httpStatus: 200,
    json: data || { status: true, message: "OK" },
  };
}
