function doSomething(a,b){
  this.propone= "test value";
}
doSomething();
document.write(window.propone);
