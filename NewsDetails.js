// src/components/NewsDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './NewsDetails.css';

function NewsDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

 // src/components/NewsDetails.js
useEffect(() => {
  setLoading(true);
  fetch(`http://localhost:5000/api/news/${id}`)  // Backend URL for fetching a single article
    .then((res) => res.json())
    .then((data) => {
      setArticle(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    });
}, [id]);


  if (!article) return <div>Loading...</div>;

  return (
    <div className="news-details">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Published at:</strong> {article.publishedAt}</p>
    </div>
  );
}

export default NewsDetails;
