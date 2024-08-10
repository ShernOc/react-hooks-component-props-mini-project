import React from "react";
import Article from "./Article"


function ArticleList({posts}){
  const ArticleArrays = posts.map((posts)=>{
    return (
    <Article key = {posts.id}
    title={posts.title} date={posts.date} preview={posts.preview} />
    )
})
  return (
    <main> 
      {ArticleArrays}
    </main>
  );
}

export default ArticleList;
