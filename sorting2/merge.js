// 4. Merge Sort
// O(nlogn)

function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  //   if (i < arr1.length) {
  //     for (let k = i; k < arr1.length; k++) {
  //       result.push(arr1[k]);
  //     }
  //   }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  //   if (j < arr2.length) {
  //     for (let k = j; k < arr2.length; k++) {
  //       result.push(arr2[k]);
  //     }
  //   }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  console.log(result);
  return result;
}

merge([1, 3, 5], [2, 4, 6]);

function mergeSort(arr) {
  if (arr.length == 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

mergeSort([2, 8, 5, 7, 4, 1]);
