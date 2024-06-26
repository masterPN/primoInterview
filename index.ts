export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let numberArray: number[] = collection_1.concat(collection_2, collection_3);
  
  let sortedNumber: number[] = mergeSort(numberArray, 0, numberArray.length-1);

  return sortedNumber;
}

function mergeProcess(
  arr: number[],
  l: number,
  m: number,
  r: number
): number[] {
  let n1 = m - l + 1;
  let n2 = r - m;

  // Create temp arrays
  let L = new Array(n1);
  let R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) L[i] = arr[l + i];
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  let i = 0;

  // Initial index of second subarray
  let j = 0;

  // Initial index of merged subarray
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }

  return arr;
}

function mergeSort(arr: number[], l: number, r: number): number[] {
  if (l >= r) {
    return [];
  }
  let m = l + Math.floor((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  arr = mergeProcess(arr, l, m, r);
  return arr;
}
