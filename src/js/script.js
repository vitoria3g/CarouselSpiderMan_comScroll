document.querySelector('#items').addEventListener("wheel", event=>{
  if(event.deltaY > 0){ //scrool rolando para cima
    //movendo o scrool (x e y)
    event.target.scrollBy(300,0);
  }
  else{ //scrool rolando para baixo
    event.target.scrollBy(-300,0);
  }
});