let bubbleSort = items => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i] > items[i + 1]) {
        let temp = items[i];
        items[i] = items[i + 1];
        items[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return items;
};
// bubbleSort([7, 53, 7, 9, 1, 3]);
bubbleSort([32, 44, 22, 12, 55, 77, 2234]);
