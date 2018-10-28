function make(n){
  let nums = Array.from(arguments);

  function f(b) {
    if(typeof arguments[0] !== 'function'){
    nums=nums.concat(Array.from(arguments));}
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
 