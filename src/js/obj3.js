var obj= new function(){
   this.name= "";
   this.age="";
   this.printInfo= function(){
     console.log(this.name);
     console.log(this.age);
   };
}
 obj.name= "Vineet";
 obj.age= 20;

 obj.printInfo();

