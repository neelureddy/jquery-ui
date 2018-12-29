var obj= new copyClass("Vineet", 20);

function copyClass(name, age){
  this.name= name;
  this.age= age;
  this.printInfo= function(){
    console.log(this.name);
    console.log(this.age);
  }
}
  obj.printInfo();
