const school = {
    address: 'Саратов',
    maxNumOfStudent: 1000
  };
  
  const klass = Object.create(school);
  klass.name = '9A';
  klass.NumOfStudent = 29;  
      
        
  f = function(arg) {
    for (let key in arg) {
      if (arg.hasOwnProperty(key)) {
          console.log(key, arg[key]);
      }
    }
  }
  
  f(klass);
  