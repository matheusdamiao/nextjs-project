import https from "https";

export default async function handler(req, res) {
  try {
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    });
    const result = await fetch("https://localhost:5077/product/all", {
      agent: httpsAgent,
    });
    const data = await result.json();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json(`${err}: failed to load data`);
  }
}
