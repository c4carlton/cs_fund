const quickSort = items => {
  if (items.length <= 1) {
    return items;
  }
  const right = [];
  const left = [];
  const pivot = items[items.length - 1];
  for (let i = 0; i < items.length - 1; i++) {
    if (items[i] < pivot) {
      left.push(items[i]);
    } else {
      right.push(items[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

// quickSort([7, 53, 7, 9, 1, 3]);
quickSort([4123, 433, 22, 114, 55, 433]);
