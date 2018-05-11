let mergeSort = items => {
  if (items.length < 2) {
    return items;
  }
  const length = items.length;
  const middle = Math.floor(length / 2);
  const left = items.slice(0, middle);
  const right = items.slice(middle, length);

  return stitch(mergeSort(left), mergeSort(right));
};

let stitch = (left, right) => {
  const results = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return results.concat(left, right);
};
// mergeSort([7, 53, 7, 9, 1, 3]);
mergeSort([32, 44, 22, 12, 55, 77, 2234]);
