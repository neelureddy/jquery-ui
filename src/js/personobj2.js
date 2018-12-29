function schools(name, location, established)
{
  this.name= name;
  this.location = location;
  this.established= established;

  this.displayinfo= function(){
    document.write(this.name + "was established in" + this.established + "at" + this.location + '<br>')
  }
}

let school1 = new schools("City School", "Delhi", 1995);

school1.displayinfo();

let school2 = new schools("Delhi Public School", "Kolkata", 1990);
school2.displayinfo();
