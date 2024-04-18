// Write a function that takes two arrays as parameters,
// and then return an array that is the intersection of these two arrays.
// For example, Intersection([1, 2, 3], [5, 16, 1, 3]) should return [1, 3].

function intersection(arr1, arr2) {
  const result = [];
  const arr3 = arr1.concat(arr2);
  console.log(arr3);
  const counter = {};

  for (i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  console.log(counter);

  for (const prop in counter) {
    if (counter[prop] > 1) {
      result.push(prop);
    }
  }
  return result;
}

console.log(intersection([15, 3, 6, 8, 24, 16], [11, 3, 9, 6, 15, 8])); // [15, 3, 6, 8]

//Write a function that takes two strings and check if they have the same letters. Order doesn’t matter.
// Ex.
// sameFrequency(“abbc”, “aabc”)  false
// sameFrequency(“abba”, “abab”) true
// sameFrequency(“aasdebasdf”, ”adfeebed”) false

function sameFrequency(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  let counter1 = {};
  let counter2 = {};

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (!counter1[arr1[i]]) {
      counter1[arr1[i]] = 1;
    } else {
      counter1[arr1[i]]++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!counter2[arr2[i]]) {
      counter2[arr2[i]] = 1;
    } else {
      counter2[arr2[i]]++;
    }
  }

  console.log(counter1, counter2);

  for (let prop in counter1) {
    if (!counter2[prop]) return false;
    if (counter2[prop] !== counter1[prop]) return false;
  }

  return true;
}

const ans = sameFrequency("abba", "aeee");
console.log(ans);
