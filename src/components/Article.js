
function Article({title, date = "January 1, 1970", preview, minutes}){
let count= 0; 
  if(minutes<30){
    emoji ='☕️'; 
    count = Math.ceil(minutes/5)}
  else{
emoji = '🍱'
count = Math.ceil(minutes/10)}
display = emoji.repeat(count);
  return(

    <article>
      <h3>{title}</h3>
      <small >{date}</small>
      <p>{preview}
        <br/>{display} {minutes} </p>
    </article>
  );
}

export default Article;