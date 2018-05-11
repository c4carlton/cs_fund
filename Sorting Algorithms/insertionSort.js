let insertionSort = items => {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < i; j++) {
      if (items[i] < items[j]) {
        const spliced = items.splice(i, 1);
        items.splice(j, 0, spliced[0]);
      }
    }
  }
  return items;
};
// insertionSort([7, 53, 7, 9, 1, 3]);
insertionSort([32, 44, 22, 12, 55, 77, 2234]);
