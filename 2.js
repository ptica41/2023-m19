const school = {
    address: 'Саратов',
    maxNumOfStudent: 1000
  };
        
  f = function(arg, str) {
    for (let key in arg) {
      if (arg.hasOwnProperty(key) && key === str) {
          return true;
      }
    }
    return false;
  }
  
  console.log(f(school, 'address'));
  console.log(f(school, 'info'));
  