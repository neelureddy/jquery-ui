let school={
  name: "City School",
  location: "Delhi",
  established: 1995,
  20: 1000,
  displayinfo: function () {
    document.write(this.name + "was established in" + this.established + "at" + this.location + '<br>');
  }
}
school.displayinfo()
document.write(school['20']);
