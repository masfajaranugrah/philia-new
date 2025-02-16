export default async function handler(req, res) {
    try {
      const response = await fetch(`${process.env.API_URL}/wahana`);
      console.log(response)
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error fetching questions", error });
    }
  }
  