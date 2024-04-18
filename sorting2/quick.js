// 6. Quick Sort
let arr = [15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 666];
function partition(p, r) {
  const pivot = arr[r];
  let i = p - 1;
  for (let j = p; j < r - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  const temp = arr[i + 1];
  arr[i + 1] = pivot;
  arr[r] = temp;
  return i + 1;
}

function quickSort(p, r) {
  if (p < r) {
    let q = partition(p, r);
    quickSort(p, q - 1);
    quickSort(q + 1, r);
  }
}

quickSort(0, arr.length - 1);
console.log(arr);
