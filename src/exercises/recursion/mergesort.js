// receives an array of numbers and returns them in a sorted order
// time compexity ...
export default function mergeSort(arrToSort) {
  const lengthOfArr = arrToSort.length;
  const smallestArray = lengthOfArr === 0 || lengthOfArr === 1;
  const sortedSmallArray = lengthOfArr === 2 && arrToSort[0] < arrToSort[1];
  if (smallestArray || sortedSmallArray) {
    return arrToSort;
  }

  if (lengthOfArr === 2) {
    return [arrToSort[1], arrToSort[0]];
  }

  const splitIndex = Math.floor(lengthOfArr / 2);
  const leftArr = mergeSort(arrToSort.slice(0, splitIndex));
  const rightArr = mergeSort(arrToSort.slice(splitIndex));

  return merge(leftArr, rightArr);
}

// receives 2 sorted arrays and merges them to one sorted array
// time compexity O(n)
let merge = (leftArr, rightArr) => {
  let i = 0; let
    j = 0;
  const resultArr = [];
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      resultArr.push(leftArr[i]);
      i += 1;
    } else {
      resultArr.push(rightArr[j]);
      j += 1;
    }
  }

  if (i === leftArr.length) {
    const rightLeftover = rightArr.slice(j);
    resultArr.push(...rightLeftover);
  }

  if (j === rightArr.length) {
    const leftLeftover = leftArr.slice(i);
    resultArr.push(...leftLeftover);
  }

  return resultArr;
};
