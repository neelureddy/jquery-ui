class Person{
  constructor(name){
    this.name= name;;
  }
  //toString method returns the name
  toString_Person(){
    return "Name of person= " + this.name;
  }
}

class Student extends Person{
  constructor(name, Sid){
     super(name);
     this.Sid= Sid;
  }

  toString_Student(){
    return super.toString_Person() + ", Student Id = " + this.Sid
  }
}
 var Student_1= new Student("Sumit", "GFG_123");

// Printing the name and Sid of Student_1
console.log(Student_1.toString());
