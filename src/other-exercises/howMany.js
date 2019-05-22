
function binarySearch(array, value, start = 0, end = array.length) {
  // end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  // console.log(start, end);
  console.log(item);
  if (item === value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

function main() {
  const list = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
  binarySearch(list, 8);

  binarySearch(list, 16);
}

main();

// sequence of indexes is 5, 2, 3
// sequece of numbers is 12, 6, 8
//
// 16 is not in list so searching results in
// indexes: 5, 8, 6, 7, -1
// numbers: 12, 17, 14, 15


