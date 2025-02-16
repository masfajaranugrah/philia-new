import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { device, ip_address } = req.body;

     await axios.post(`${process.env.API_URL}/track-visitor`, {
      device,
      ip_address,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error tracking visitor:", error.response?.data || error.message);
    return res.status(500).json({ error: "Failed to send data" });
  }
}
