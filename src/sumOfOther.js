function sumOfOther(arr) {
    let sum = arr.reduce((res, elem) => res + elem, 0);
    return arr.map((elem) => sum - elem);
}
