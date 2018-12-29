function doSomething(){
  'use strict';

  document.write(this + '<br>')
      function innerFunction (){
         document.write(this)
      }
      innerFunction();
}
doSomething();
