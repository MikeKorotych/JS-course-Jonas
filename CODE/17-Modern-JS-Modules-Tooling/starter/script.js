// 0! = 1
// n! = n * (n-1)!

// 2! = 1 * 2 = 2
// 3! = 1 * 2 * 3 = 6
// 4! = 1 * 2 * 3 * 4 = 24

// function factorial(n) {
//   if (n < 0) {
//     console.error('n must be greater than 0');
//     return;
//   } else if (n === 0) return 1;
//   else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(-1));

// fibinacci(0) = 0;
// fibinacci(1) = 1;
// fibinacci(n) = fibinacci(n - 1) + fibinacci(n - 2), n> 1

function fibinacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibinacci(n - 1) + fibinacci(n - 2);
  }
}

console.log(fibinacci(6));
