import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
     const [articles, setArticle] = useState([]);
    useEffect(() => {
    const key = '821593c6d3711eb2403ccfaf4cc67e37';
    let url = `https://gnews.io/api/v4/top-headlines?lang=en&country=us&topic=${category}&token=${key}`;
    fetch(url).then(response => response.json()).then(data => setArticle(data.articles));
    }, [category]);
  return (
    <div>
      <div>
         <h1 className='font-medium mt-2 text-center text-xl '>Latest <span className='bg-red-600 text-white rounded p-0.5'>News</span></h1>
      </div>

      <div className='flex flex-wrap justify-center gap-6 p-6'>
          {/* API attributes:
          title
          description
          image
          url */}
          {articles.map((news, index) => {
              return <NewsItem key={index} title={news.title} description={news.description} src={news.image} url={news.url} />
          })}
      </div>
    </div>
  )
}

export default NewsBoard
