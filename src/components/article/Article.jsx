import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, data }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{data}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  );
};

export default Article;
