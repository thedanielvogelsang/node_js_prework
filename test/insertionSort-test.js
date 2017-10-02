const assert = require('chai').assert;
const insertionSort = require('../insertionSort')

describe("insertion_sort", function(){
  it("sorts bubbly-like", function(){
    var unsortedArray = [100, 105, 23, 85, 15, 0.1, 90, 77, 46, 3];
    var sortedArray = [0.1, 3, 15, 23, 46, 77, 85, 90, 100, 105];
    assert.deepEqual(sortedArray, insertionSort(unsortedArray))
  })
})
