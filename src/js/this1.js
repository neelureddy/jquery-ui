function myFunc(){
  console.log(this.a);
}
 var a ="Global";

 var myObj1={
   a: "myObj1",
   myFunc: myFunc
 };

 var myObj2={
   a: "myObj2",
 };
// Call the function in global scope.
 myFunc();
//Call the function from the reference of owner.
 myObj1.myFunc();
// Call the function from the reference of object other than owner.
 myFunc.call(myObj2);
// Create a new undefined object.
 new myFunc();
