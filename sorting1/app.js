// 1. Bubble Sort

function bubbleSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
}

// bubbleSort([8, 4, 17, 2, 1]);

// 2. Insertion Sort

// function insertionSort(arr) {
//   for (let j = 1; j < arr.length; j++) {
//     const key = arr[j];
//     for (let i = j - 1; i >= 0; i--) {
//       if (key < arr[i]) {
//         arr[i + 1] = arr[i];
//         arr[i] = key;
//       }
//     }
//   }
//   console.log(arr);
//   return arr;
// }

function insertionSort(arr) {
  for (let j = 1; j < arr.length; j++) {
    const key = arr[j];
    let i = j - 1;
    while (arr[i] > key && i >= 0) {
      arr[i + 1] = arr[i];
      i--;
    }
    arr[i + 1] = key;
  }
  console.log(arr);
  return arr;
}

// insertionSort([14, -4, 17, 6, 22, 1, -5]);

// 3. Selection Sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap arr[minIndex] and arr[i]
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  console.log(arr);
  return arr;
}

const unsorted = [14, -4, 17, 6, 22, 1, -5];
selectionSort(unsorted);
