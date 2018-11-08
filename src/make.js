function make(...nums){
  
  function f(...args) {

    if(typeof arguments[0] !== 'function'){
      nums=nums.concat(args);
    }

    if(typeof arguments[0] === 'function'){
      return nums.reduce((res,elem) => arguments[0](res, elem));
      }
    return f;

  }
  
  f.toString = function() {
    return nums;
  };
  
  return f;
  
}  
 