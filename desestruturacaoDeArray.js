const array = [1, 2, 3, 4, 5, 6];

const [x, y, ...resto] = array;

console.log(x); // 1
console.log(y); // 2
console.log(resto); // [3, 4, 5, 6]