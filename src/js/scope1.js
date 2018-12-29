

function Person (fname, lname){
  var firstname= fname;
  var lastname= lname;

  var getdetails_noaccess = function (){
    return "First name is = " + firstname + ", Last name is = "
    + lastname;
  };
     this.getdetails_access = function(){
       return "First name is = " + firstname + ", Last name is = "
         + lastname;
     };
}

var Person = new Person("Sumit", "Ghosh");
  console.log(person.firstname);
  console.log(person.getdetails_noaccess);
  console.log(person.getdetails_access());
