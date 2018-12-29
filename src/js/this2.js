<div id ="clickMe">Welcome to GFG!</div>

function clickedMe(){
    console.log(this.innerHTML);
}

clickedMe(); //undefined because its a global object.

var myElem = document.getElementById('clickMe');
  myElem.onclick= clickedMe;

  myElem.onclick(); //Welcome to GFG!
