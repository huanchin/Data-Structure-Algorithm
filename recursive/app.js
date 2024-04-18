/**Write a function that takes an integer N as an input and returns the Nth number in Fibonacci Sequence */
// Fibonacci Sequence is defined by:
// F(0) = 0
// F(1) = 1
// F(n) = F(n – 1) + F(n – 2)

function fibonacci(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));

/**Write a function that collects all value in an array of arrays and return an array of values collected. */
// let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];
// collector(arrs) // [a, b, c, d, e, f, g, h]

const collect = [];
function collector(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      collector(arr[i]);
    } else {
      collect.push(arr[i]);
    }
  }

  return collect;
}

// function collector(arr1) {
//   let result = [];
//   helper(arr1);
//   return result;

//   function helper(arr2) {
//     for (let i = 0; i < arr2.length; i++) {
//       if (Array.isArray(arr2[i])) {
//         helper(arr2[i]);
//       } else {
//         result.push(arr2[i]);
//       }
//     }
//   }
// }

let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];
console.log(collector(arrs)); // [a, b, c, d, e, f, g, h]
