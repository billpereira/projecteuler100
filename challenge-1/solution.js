// Find the latest number before limit
const latest = (limit, r) =>
  limit - (limit % r) < limit ? limit - (limit % r) : limit - (limit % r) - r;

// Find number of elements
// (An - A1)/R + 1
const n = (fistNumber, lastNumber, r) => (lastNumber - fistNumber) / r + 1;

// find mmc
const mmc = (num1, num2) => {
  let rest, a, b;
  a = num1;
  b = num2;
  do {
    rest = a % b;
    a = b;
    b = rest;
  } while (rest != 0);
  return (num1 * num2) / a;
};

// Find Sum
// Sn = (A1 + An)*n / 2
const sum = (firstNum, lastNum, amount) => ((firstNum + lastNum) * amount) / 2;

// Result = Sum of first plus second less the commons

const result = (a, b, c) =>
  c > mmc(a, b)
    ? sum(a, latest(c, a), n(a, latest(c, a), a)) +
      sum(b, latest(c, b), n(b, latest(c, b), b)) -
      sum(
        mmc(a, b),
        latest(c, mmc(a, b)),
        n(mmc(a, b), latest(c, mmc(a, b)), mmc(a, b))
      )
    : sum(a, latest(c, a), n(a, latest(c, a), a)) +
      sum(b, latest(c, b), n(b, latest(c, b), b));

const a = 3;
const b = 5;
const c = 100;
console.time("arithmetic progression")
console.log(`Sum of the Multiple ${a} and ${b} till ${c} = `, result(a, b, c));
console.timeEnd("arithmetic progression")
const test = (a,b,c) => {
  let sum = 0
  for(let i=1;i<c;i++){
    
    if(i%a===0 ||i%b===0 ) sum = sum+i
  }
  return sum
}
console.time("Iteration")
console.log(`Sum of the Multiple ${a} and ${b} till ${c} = `, test(a, b, c));
console.timeEnd("Iteration")
