//In this file data is sending from from and data automatically upadate daily because date is set API url.
import React, { useState, useEffect } from 'react';
import './NewsItem.css';

function NewsComponent() {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Calculate today's date and the date 7 days ago
    const today = new Date().toISOString().split('T')[0];
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 7); // 7 days ago
    const pastDateStr = pastDate.toISOString().split('T')[0];
    
    // Fetch API data and present it here.
    async function fetchData() {
      const url = `https://newsapi.org/v2/everything?q=apple&from=${pastDateStr}&to=${today}&apiKey=42e230b914bf4e0a8ee13747c8b13584`;
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let parseData = await response.json();
        
        // Sort articles from newest to oldest
        const sortedArticles = parseData.articles
          ? parseData.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
          : [];
          
        setArr(sortedArticles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div id="newscontainer">
      {arr.length === 0 ? (
        <p>No news articles found</p>
      ) : (
        arr.map((article) => (
          article.title && article.description && (
            <div key={article.url} id="newsItem">
              <div id="img">
                {article.urlToImage ? (
                  <img id="image" src={article.urlToImage} alt="News" />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              <div id="box">
                <div id="box_heading">
                  {article.title}
                  <p id="date">
                    {new Date(article.publishedAt).toLocaleDateString()}{" "}
                    {new Date(article.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <div id="box_des">{article.description}</div>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more...</a>
              </div>
            </div>
          )
        ))
      )}
    </div>
  );
}

export default NewsComponent;
