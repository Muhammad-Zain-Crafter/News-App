import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_API_KEY; 
        const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=us&topic=${category}&token=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("Fetched news data:", data);

        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <div>
        <h1 className="font-medium mt-6 text-center text-xl">
          Latest{" "}
          <span className="bg-red-600 text-white rounded p-0.5">News</span>
        </h1>
      </div>

      {loading ? (
        <div className="text-center font-semibold text-gray-600 text-xl mt-8">
          Loading...
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 p-6 mt-4">
          {articles.length > 0 ? (
            articles.map((news, index) => (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.image}
                url={news.url}
              />
            ))
          ) : (
            <p className="text-gray-500 text-lg text-center">
              No news available right now.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
