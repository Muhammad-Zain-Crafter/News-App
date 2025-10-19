export default async function handler(req, res) {
  const { category } = req.query;
  const apiKey = import.meta.env.VITE_API_KEY; 
  const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=us&topic=${category}&token=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching from GNews:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
