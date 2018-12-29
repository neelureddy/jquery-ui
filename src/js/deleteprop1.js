let obj1={
  propfirst: "Name"
}

document.write(obj1.propfirst + '<br>')
let obj2 = Object.create(obj1)

document.write(obj2.propfirst+ '<br>')

document.write(delete obj2.propfirst+ '<br>')

document.write(obj2.propfirst)
