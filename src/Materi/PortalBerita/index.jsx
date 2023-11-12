import React, { useState, useEffect } from "react";

function NewsApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1>News App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mt-3"
        placeholder="Cari berita..."
      />
      <div id="newsList" className="mt-3">
        {articles.map((article) => (
          <div className="card mb-2" key={article.id}>
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.body}</p>
              <a href="#" className="btn btn-primary">
                Baca Selengkapnya
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsApp;
