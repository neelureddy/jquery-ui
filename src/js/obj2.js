var obj= {
  name:"",
  age:"",
  printInfo: function(){
    console.log(this.name);
    console.log(this.age);
  }

}

obj.name= "Vineet";
obj.age= 19;

obj.printInfo();
