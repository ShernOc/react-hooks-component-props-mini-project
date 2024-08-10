import React from "react";


function Article({title, date, preview}){
  return(
    <article>
      <h3>{title}</h3>
      <small >{date}</small>
      <p>{preview} </p>
    </article>
  );
}
   // default props
Article.defaultProps = { date: "January 1, 1970"};

export default Article;