
function About({image ="https://via.placeholder.com/215Links to an external site.", about }){

  return(
    <aside>
      <img src= {image}
      alt = "blog logo"/>
      <p>{about}</p>
    </aside>

  );
}
//  About.defaultProps = {
//   image: "https://via.placeholder.com/215",}; 

export default About; 