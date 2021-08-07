/*1.Get the text input */ //psuedocosde
let button = document.querySelector('button');
button.addEventListener("click",()=>{
  let text = document.querySelector('input').value;
  console.log(text);
})
let even = document.querySelector('.input_cl')
even.addEventListener('keyup',function(e){ //for every key or click there is a ton of values which is expressed as e
  //we are utilising it 

  let text = document.querySelector("input").value;
  if(e.keyCode === 13){ //key code of enter is 13 by which when we press enter
    //the condition is satisfied and the function below gets executed
    pushTo(text);
  }
})
  

function pushTo(text) { //function to push the result to html body
  var container = document.querySelector(".element");
  container.innerHTML = text;

}