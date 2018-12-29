var school = new Object();
school.name = "City School";
school.location = "Delhi";
school.established = 1995;

school.displayinfo= function(){
  document.write(this.name + "was established in " + this.established + "at" + this.location)
}
school.displayinfo();

