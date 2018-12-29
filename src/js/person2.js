var person={
  first_name: "Sumit",
  last_name: "Ghosh",

  getName: function(){
    return "Person name is " + this.first_name + this.last_name;
  },

  phone_number:
    {
      Mobile: "12345",
      LandLine: "678910"
    }

}
console.log(person.getName());
console.log("Person's First Name " + person.first_name + "LandLine number" + person.phone_number.LandLine);
