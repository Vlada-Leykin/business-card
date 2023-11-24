import {mergeSort} from '../src/exercises/recursion/mergesort.js';

describe('minimal cases', function() {
  it('should return empty array', function() {
    const sortedArr = mergeSort([])
    expect(sortedArr).toEqual([]);
  });

  it('should return array with one number unchanged', function() {
    const sortedArr = mergeSort([1000])
    expect(sortedArr).toEqual([1000]);
  });

  it('should return sorted array with length of 2', function() {
    const sortedArr = mergeSort([2, 8]);
    expect(sortedArr).toEqual([2, 8]);
  });
});

describe('sorting cases', function() {
    it('should sort simple array', function() {
        const sortedArr = mergeSort([2,3,1])
        expect(sortedArr).toEqual([1,2,3]);
    });

    it('should sort more comprehensive array', function() {
        const sortedArr = mergeSort([20, 31, 1, 9, 89, 200, 49, 66, 7])
        expect(sortedArr).toEqual([1, 7, 9, 20, 31, 49, 66, 89, 200]);
    });

    it('should sort negative and positive value array', function() {
        const sortedArr = mergeSort([-20, 31, 1, 9, 0, 89, -200, 49, 66, 7])
        expect(sortedArr).toEqual([-200, -20, 0, 1, 7, 9, 31, 49, 66, 89]);
    });
});

 