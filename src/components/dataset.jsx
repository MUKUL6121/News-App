import React, { useState, useEffect, useCallback } from 'react';
import './NewsItem.css';

function Dataset({ query }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to introduce delay
  const delay = useCallback((ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }, []);

  // Function to fetch data with retry logicn
  const fetchWithRetry = useCallback(async (url, retries = 5, backoff = 1000) => {
    try {
      const response = await fetch(url);
      if (response.status === 401) {
        throw new Error('Unauthorized: Please check your API key.');
      }
      if (response.status === 429) {
        throw new Error('Too many requests');
      }
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      if (retries > 0) {
        await delay(backoff);
        return fetchWithRetry(url, retries - 1, backoff * 2); // Exponential backoff
      } else {
        throw error;
      }
    }
  }, [delay]);

  useEffect(() => {
    async function fetchData() {
      try {
        const today = new Date().toISOString().split('T')[0];
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 7); // 7 days ago
        const pastDateStr = pastDate.toISOString().split('T')[0];
        const page = 1;

        const url = `https://newsapi.org/v2/everything?q=${query}&from=${pastDateStr}&to=${today}&apiKey=42e230b914bf4e0a8ee13747c8b13584&page=${page}`;

        const data = await fetchWithRetry(url);
        const sortedArticles = data.articles?.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)) || [];

        setArticles(sortedArticles);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching the news.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query, fetchWithRetry]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div id="newscontainer">
      {articles.length === 0 ? (
        <p>No news articles found</p>
      ) : (
        articles.map((article) => (
          article.url && article.urlToImage && article.title && article.description && (
            <div key={article.url} id="newsItem">
              <div id="img">
                <img id="image" src={article.urlToImage} alt="News" />
              </div>
              <div id="box">
                <div id="box_heading">
                  {article.title}
                  <p id="date">{new Date(article.publishedAt).toLocaleDateString()}</p>
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

export default Dataset;
