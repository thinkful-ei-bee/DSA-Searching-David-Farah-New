function search(dataset, item, searchType) {

  if (searchType === "linear") {
    for (let i = 0; i < dataset.length; i++) {
      console.log(i);
      if (dataset[i] === item) {
        return [i + 1, 'found']
      }
    }
    return [dataset.length, 'not found'];
  }

  let start = 0;
  let end = dataset.length;
  let count = 0;
  let index;

  while (start <= end) {
    count++;
    index = Math.floor((start + end) / 2);
    const val = dataset[index];
    if (val === item) {
      return [count, 'found']
    } else if (val < item) {
      start = index + 1;
    } else if (val > item) {
      end = index - 1;
    }
  }

  return [count, 'not found'];
}

export default search;