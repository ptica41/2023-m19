f = function() {
    obj = {};
    return obj;
  }
  
  obj = f();
  
  console.log(typeof(obj));
  
  console.log(Object.getPrototypeOf(obj));