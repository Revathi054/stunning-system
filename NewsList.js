import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NewsList.css';

function NewsList() {
  const [articles, setArticles] = useState([]);

 // src/components/NewsList.js
useEffect(() => {
  setLoading(true);
  fetch('http://localhost:5000/api/news')
  // Backend URL for fetching news list
    .then((res) => res.json())
    .then((data) => {
      setNews(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    });
}, []);

  return (
    <div className="news-list">
      {articles.map(article => (
        <div key={article.id} className="news-item">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <Link to={`/news/${article.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}