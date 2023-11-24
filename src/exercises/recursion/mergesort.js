// receives an array of numbers and returns them in a sorted order
// time compexity ...
export function mergeSort(arrToSort) {
    let lengthOfArr = arrToSort.length 
    let smallestArray = lengthOfArr === 0 || lengthOfArr === 1;
    let sortedSmallArray = lengthOfArr === 2 && arrToSort[0] < arrToSort[1];
    if (smallestArray || sortedSmallArray) {
        return arrToSort;
    }

    if (lengthOfArr === 2) {
        let temp = arrToSort[0];
        arrToSort[0] = arrToSort[1];
        arrToSort[1] = temp;
        return arrToSort;
    }

    let splitIndex = Math.floor(lengthOfArr / 2);
    let leftArr = mergeSort(arrToSort.slice(0,splitIndex));
    let rightArr = mergeSort(arrToSort.slice(splitIndex));

    return merge(leftArr, rightArr);
}

// receives 2 sorted arrays and merges them to one sorted array
// time compexity O(n)
let merge = (leftArr, rightArr) => {
    let i = 0, j = 0;
    let resultArr = []
    while( i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            resultArr.push(leftArr[i]);
            i++
        } else {
            resultArr.push(rightArr[j]);
            j++
        }
    }

    if (i === leftArr.length) {
        let rightLeftover = rightArr.slice(j)
        resultArr.push(...rightLeftover);
    }

    if (j === rightArr.length) {
        let leftLeftover = leftArr.slice(i)
        resultArr.push(...leftLeftover);
    }

    return resultArr;
}


