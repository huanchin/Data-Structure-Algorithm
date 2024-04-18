// Write two functions that calculate the max and min sum of n consecutive numbers in an array.
// maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);  // 12
// minSum ([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum(arr, size) {
  if (size > arr.length) return null;

  let maxValue = 0;

  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  let tempValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];

    if (tempValue > maxValue) {
      maxValue = tempValue;
    }
  }

  console.log(maxValue);
  return maxValue;
}

// maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
// maxSum([2, 7, 3, 7, 25, 0, 6, 1, -5, 12, -11], 3);

function minSum(arr, size) {
  if (size > arr.length) return null;

  let minValue = 0;

  for (let i = 0; i < size; i++) {
    minValue += arr[i];
  }

  let tempValue = minValue;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];

    if (tempValue < minValue) {
      minValue = tempValue;
    }
  }

  console.log(minValue);
  return minValue;
}

// minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);

/* Write a function called minSubLength which accepts two parameters, an array of positive integers and a positive integer. This function should return the minimal length of a continuous subarray – the sum of elements inside this subarray has to be greater than or equal to the positive integer parameter. If subarray not found, then return 0. */
// minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11)); // 2

// function minSubLength(arr, num) {
//   let left = 0;
//   let right = 0;
//   let currentSum = 0;
//   let minLength = Infinity;

//   while (right <= arr.length && left <= right) {
//     for (let i = left; i <= right; i++) {
//       currentSum += arr[i];
//     }

//     if (currentSum >= num) {
//       minLength = right - left + 1;
//       currentSum = 0;
//       left++;
//     } else {
//       currentSum = 0;
//       right++;
//     }
//   }

//   console.log(minLength);
//   return minLength;
// }

function minSubLength(arr, sum) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < arr.length) {
    currentSum += arr[right];
    // console.log("currentSum:", currentSum);

    while (currentSum >= sum) {
      // update the value of minLength
      if (minLength > right - left + 1) {
        minLength = right - left + 1;
      }
      currentSum -= arr[left];
      // console.log("currentSum:", currentSum);
      left++;
    }

    right++;
  }

  if (minLength == Infinity) {
    return 0;
  } else {
    return minLength;
  }
}

// minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11);
// minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60);

/* Write a function called uniqueLetterString, which accepts a string and returns the length of the longest substring with all distinct characters. */
// uniqueLetterString(“thisishowwedoit”) // 6

function uniqueLetterString(str) {
  let left = 0;
  let right = 0;
  let longest = 0;
  let counter = {};

  while (right < str.length) {
    if (counter[str[right]]) {
      counter[str[left]] = 0;
      left++;
    } else {
      counter[str[right]] = 1;
      if (right - left + 1 > longest) {
        longest = right - left + 1;
      }
      right++;
    }
  }

  console.log(longest);
  return longest;
}

// uniqueLetterString("thisishowwedoit");

// The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
// Find the n adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
let thousandDigits = [
  7, 3, 1, 6, 7, 1, 7, 6, 5, 3, 1, 3, 3, 0, 6, 2, 4, 9, 1, 9, 2, 2, 5, 1, 1, 9,
  6, 7, 4, 4, 2, 6, 5, 7, 4, 7, 4, 2, 3, 5, 5, 3, 4, 9, 1, 9, 4, 9, 3, 4, 9, 6,
  9, 8, 3, 5, 2, 0, 3, 1, 2, 7, 7, 4, 5, 0, 6, 3, 2, 6, 2, 3, 9, 5, 7, 8, 3, 1,
  8, 0, 1, 6, 9, 8, 4, 8, 0, 1, 8, 6, 9, 4, 7, 8, 8, 5, 1, 8, 4, 3, 8, 5, 8, 6,
  1, 5, 6, 0, 7, 8, 9, 1, 1, 2, 9, 4, 9, 4, 9, 5, 4, 5, 9, 5, 0, 1, 7, 3, 7, 9,
  5, 8, 3, 3, 1, 9, 5, 2, 8, 5, 3, 2, 0, 8, 8, 0, 5, 5, 1, 1, 1, 2, 5, 4, 0, 6,
  9, 8, 7, 4, 7, 1, 5, 8, 5, 2, 3, 8, 6, 3, 0, 5, 0, 7, 1, 5, 6, 9, 3, 2, 9, 0,
  9, 6, 3, 2, 9, 5, 2, 2, 7, 4, 4, 3, 0, 4, 3, 5, 5, 7, 6, 6, 8, 9, 6, 6, 4, 8,
  9, 5, 0, 4, 4, 5, 2, 4, 4, 5, 2, 3, 1, 6, 1, 7, 3, 1, 8, 5, 6, 4, 0, 3, 0, 9,
  8, 7, 1, 1, 1, 2, 1, 7, 2, 2, 3, 8, 3, 1, 1, 3, 6, 2, 2, 2, 9, 8, 9, 3, 4, 2,
  3, 3, 8, 0, 3, 0, 8, 1, 3, 5, 3, 3, 6, 2, 7, 6, 6, 1, 4, 2, 8, 2, 8, 0, 6, 4,
  4, 4, 4, 8, 6, 6, 4, 5, 2, 3, 8, 7, 4, 9, 3, 0, 3, 5, 8, 9, 0, 7, 2, 9, 6, 2,
  9, 0, 4, 9, 1, 5, 6, 0, 4, 4, 0, 7, 7, 2, 3, 9, 0, 7, 1, 3, 8, 1, 0, 5, 1, 5,
  8, 5, 9, 3, 0, 7, 9, 6, 0, 8, 6, 6, 7, 0, 1, 7, 2, 4, 2, 7, 1, 2, 1, 8, 8, 3,
  9, 9, 8, 7, 9, 7, 9, 0, 8, 7, 9, 2, 2, 7, 4, 9, 2, 1, 9, 0, 1, 6, 9, 9, 7, 2,
  0, 8, 8, 8, 0, 9, 3, 7, 7, 6, 6, 5, 7, 2, 7, 3, 3, 3, 0, 0, 1, 0, 5, 3, 3, 6,
  7, 8, 8, 1, 2, 2, 0, 2, 3, 5, 4, 2, 1, 8, 0, 9, 7, 5, 1, 2, 5, 4, 5, 4, 0, 5,
  9, 4, 7, 5, 2, 2, 4, 3, 5, 2, 5, 8, 4, 9, 0, 7, 7, 1, 1, 6, 7, 0, 5, 5, 6, 0,
  1, 3, 6, 0, 4, 8, 3, 9, 5, 8, 6, 4, 4, 6, 7, 0, 6, 3, 2, 4, 4, 1, 5, 7, 2, 2,
  1, 5, 5, 3, 9, 7, 5, 3, 6, 9, 7, 8, 1, 7, 9, 7, 7, 8, 4, 6, 1, 7, 4, 0, 6, 4,
  9, 5, 5, 1, 4, 9, 2, 9, 0, 8, 6, 2, 5, 6, 9, 3, 2, 1, 9, 7, 8, 4, 6, 8, 6, 2,
  2, 4, 8, 2, 8, 3, 9, 7, 2, 2, 4, 1, 3, 7, 5, 6, 5, 7, 0, 5, 6, 0, 5, 7, 4, 9,
  0, 2, 6, 1, 4, 0, 7, 9, 7, 2, 9, 6, 8, 6, 5, 2, 4, 1, 4, 5, 3, 5, 1, 0, 0, 4,
  7, 4, 8, 2, 1, 6, 6, 3, 7, 0, 4, 8, 4, 4, 0, 3, 1, 9, 9, 8, 9, 0, 0, 0, 8, 8,
  9, 5, 2, 4, 3, 4, 5, 0, 6, 5, 8, 5, 4, 1, 2, 2, 7, 5, 8, 8, 6, 6, 6, 8, 8, 1,
  1, 6, 4, 2, 7, 1, 7, 1, 4, 7, 9, 9, 2, 4, 4, 4, 2, 9, 2, 8, 2, 3, 0, 8, 6, 3,
  4, 6, 5, 6, 7, 4, 8, 1, 3, 9, 1, 9, 1, 2, 3, 1, 6, 2, 8, 2, 4, 5, 8, 6, 1, 7,
  8, 6, 6, 4, 5, 8, 3, 5, 9, 1, 2, 4, 5, 6, 6, 5, 2, 9, 4, 7, 6, 5, 4, 5, 6, 8,
  2, 8, 4, 8, 9, 1, 2, 8, 8, 3, 1, 4, 2, 6, 0, 7, 6, 9, 0, 0, 4, 2, 2, 4, 2, 1,
  9, 0, 2, 2, 6, 7, 1, 0, 5, 5, 6, 2, 6, 3, 2, 1, 1, 1, 1, 1, 0, 9, 3, 7, 0, 5,
  4, 4, 2, 1, 7, 5, 0, 6, 9, 4, 1, 6, 5, 8, 9, 6, 0, 4, 0, 8, 0, 7, 1, 9, 8, 4,
  0, 3, 8, 5, 0, 9, 6, 2, 4, 5, 5, 4, 4, 4, 3, 6, 2, 9, 8, 1, 2, 3, 0, 9, 8, 7,
  8, 7, 9, 9, 2, 7, 2, 4, 4, 2, 8, 4, 9, 0, 9, 1, 8, 8, 8, 4, 5, 8, 0, 1, 5, 6,
  1, 6, 6, 0, 9, 7, 9, 1, 9, 1, 3, 3, 8, 7, 5, 4, 9, 9, 2, 0, 0, 5, 2, 4, 0, 6,
  3, 6, 8, 9, 9, 1, 2, 5, 6, 0, 7, 1, 7, 6, 0, 6, 0, 5, 8, 8, 6, 1, 1, 6, 4, 6,
  7, 1, 0, 9, 4, 0, 5, 0, 7, 7, 5, 4, 1, 0, 0, 2, 2, 5, 6, 9, 8, 3, 1, 5, 5, 2,
  0, 0, 0, 5, 5, 9, 3, 5, 7, 2, 9, 7, 2, 5, 7, 1, 6, 3, 6, 2, 6, 9, 5, 6, 1, 8,
  8, 2, 6, 7, 0, 4, 2, 8, 2, 5, 2, 4, 8, 3, 6, 0, 0, 8, 2, 3, 2, 5, 7, 5, 3, 0,
  4, 2, 0, 7, 5, 2, 9, 6, 3, 4, 5, 0,
];

// function largestProduct(n) {
//   let currentProduct;
//   let maxProduct = -Infinity;
//   let left = 0;
//   let right = n - 1;

//   while (right < thousandDigits.length) {
//     currentProduct = 1;
//     for (let i = left; i <= right; i++) {
//       currentProduct *= thousandDigits[i];
//     }
//     if (currentProduct > maxProduct) {
//       maxProduct = currentProduct;
//     }
//     right++;
//     left++;
//   }

//   console.log(maxProduct);
//   return maxProduct;
// }

function largestProduct(n) {
  let left = 0;
  let right = n - 1;
  let product = -Infinity;
  let currentProduct;

  while (right < thousandDigits.length) {
    currentProduct = 1;
    for (let i = left; i <= right; i++) {
      if (thousandDigits[i] === 0) {
        left = i + 1;
        right = left + n - 1;
      }
      currentProduct *= thousandDigits[i];
    }
    if (currentProduct > product) {
      product = currentProduct;
    }
    right++;
    left++;
  }

  console.log(product);
  return product;
}

largestProduct(13); // 23514624000
largestProduct(4); // 5832
