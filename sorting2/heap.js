// 5. Heap Sort
// O(nlogn)
let heapSize;
let arr = [15, 3, 17, 18, 20, 2, 1, 666];

function buildMaxHeap() {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(i);
  }
}

function maxHeapify(i) {
  let largest;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left <= heapSize && arr[left] > arr[i]) largest = left;
  else largest = i;

  if (right <= heapSize && arr[right] > arr[largest]) largest = right;

  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(largest);
  }
}

function heapSort() {
  buildMaxHeap();
  //   while (heapSize > 0) {
  //     let temp = arr[heapSize];
  //     arr[heapSize] = arr[0];
  //     arr[0] = temp;
  //     heapSize--;
  //     maxHeapify(0);
  //   }

  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapSize -= 1;
    maxHeapify(0);
  }

  console.log(arr);
  return arr;
}

heapSort();
