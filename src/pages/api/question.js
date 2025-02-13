export default async function handler(req, res) {
    try {
      const response = await fetch("http://192.168.1.22:8000/api/question");
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Error fetching questions", error });
    }
  }
  