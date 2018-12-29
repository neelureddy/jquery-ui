let person = {
  name: "John",
  age: 30,
  logInfo: function(){
    document.write(this.name + "is" + this.age + "years old")
  }
}
person.logInfo()
