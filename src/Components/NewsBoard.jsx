import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;
    let url = `https://gnews.io/api/v4/top-headlines?lang=en&country=us&topic=${category}&token=${key}`;
    
    setLoading(true);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticle(data.articles);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setLoading(false); // Stop loading on error too
      });
  }, [category]);

  return (
    <div>
      <div>
        <h1 className='font-medium mt-6 text-center text-xl'>
          Latest <span className='bg-red-600 text-white rounded p-0.5'>News</span>
        </h1>
      </div>

      {loading ? (
        <div className="text-center font-semibold text-gray-600 text-xl mt-8">Loading...</div>
      ) : (
        <div className='flex flex-wrap justify-center gap-6 p-6 mt-4'>
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.image}
              url={news.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
