let school ={
  name: "City Schools",
  location: "Delhi",
  established: 1995,
  20: 1000,
  displayinfo: function(){
    document.write(this.name + "was established in" + this.established + "at" + this.location)
  }
}
 document.write(school.name + '<br>')

 document.write(school.established)
