
let queue = [];
queue.push(tree);
let result = [];

function recursion(tree){
    if (queue.length===0){
        return result
    }

    let temp = queue.shift();
    result.push(temp.value);
    
    if(temp.left){
        queue.push(temp.left);
    }
    if(temp.right){
        queue.push(temp.right);
    }
    
    recursion(queue[0]);
    
return result
}

    
