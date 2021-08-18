let button = document.getElementById('rel_bt'); //grabing the button element
button.addEventListener("click",()=>{ //adding an event listner click to the button
  let text = document.querySelector('input').value; //function to be executed after the event
  api(text);
});
let even = document.querySelector('.input_cl')
even.addEventListener('keyup',(e)=>{ /*for every key or click there is a ton of informations which is expressed as e
  we are utilising it */
  let text = document.querySelector("input").value;
  if(e.keyCode === 13){ /*key code of enter is 13 by which when we press enter
    the condition is satisfied and the function below gets executed*/
    api(text);
    
  }
});
// API
function api(text){
  if (text == false){
    var url = "https://api.giphy.com/v1/gifs/search?api_key=Kwt76tthWXcO4cC8UfFjx4lxS8Q9VWQ6&q=github&limit=25&offset=0&rating=g&lang=en";
    console.log(url);
    let giphy = new XMLHttpRequest();
    giphy.open('GET',url);
    giphy.send();
    giphy.addEventListener('load',(d)=>{
      // console.log(d);
      let load = d.target.response;
      // console.log(load);
      pushTo(load);
    });
  }
  else{
    var url = "https://api.giphy.com/v1/gifs/search?api_key=Kwt76tthWXcO4cC8UfFjx4lxS8Q9VWQ6&q=query&limit=25&offset=0&rating=g&lang=en";
    url = url.replace('query',text);
    // console.log(url);
    let giphy = new XMLHttpRequest();
    giphy.open('GET',url);
    giphy.send();
    giphy.addEventListener('load',(d)=>{ //arrow function
      // console.log(d);
      let load = d.target.response;
      pushTo(load);
    
    });
  }
}

function pushTo(input) { //function to push the result to html body
  let response = JSON.parse(input);
  let imgUrl = response.data;
  imgUrl.forEach(function(image){
    var src = image.images.fixed_height.url;//basic object manipulation
    console.log(src);
    var foot = document.querySelector('.footer');
    var container = document.querySelector(".elements");
    container.innerHTML += "<img src=\"" + src + "\" class=\"img-fluid\">";
  });
}
function reLoad(){
  window.location.reload();
}
