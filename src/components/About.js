import React from "react";
import blogData from "../data/blog";

function About({image, about }){
  return(
    <aside>
      <img src= {image}
      alt = "blog logo"/>
      <p>{about}</p>
      </aside>

  );
}

 About.defaultProps = {
  image: "https://via.placeholder.com/215",}; 


export default About; 