function recursion(tree){
  let result = [];
  for (let prop in tree) {
  if (prop === 'value'){
    result.push(tree[prop]);
    }
  if (prop === 'left'){
    result.push(recursion(tree.left));
    } 
  if (prop === 'right'){
    result.push(recursion(tree.right));
    } 
  
  }
  return result;
  }