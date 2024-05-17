import React from "react";
import blogData from "../data/blog";
import Header from "./header";
import About from "./about";
import ArticleList from "./ArticleList"
import Article from "./article";

console.log(blogData);

function App() {
  const posts = blogData.posts;

  return (
    <div className="App">
      <Header name="Blog Name" />
      <About image="" about="About this blog" />
      <ArticleList posts={posts} />
      <Article />
    </div>
  );
}

export default App;
