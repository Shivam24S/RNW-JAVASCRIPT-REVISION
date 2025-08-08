function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

let count1 = outer();

console.log(count1());

console.log(count1());

console.log(count1());
