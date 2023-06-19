const sortBySelection = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      debugger;
      if (j !== minIndex && list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [list[i], list[minIndex]] = [list[minIndex], list[i]];
    }
  }
};

const myList = [50, 30, 40, 10, 20, 80, 0];

sortBySelection(myList);
console.log(myList);

// function quickSort(list) {
//   if (list.length <= 1) {
//     return list;
//   }

//   const pivot = list[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < list.length; i++) {
//     if (list[i] < pivot) {
//       left.push(list[i]);
//     } else {
//       right.push(list[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

function quickSort(list) {
  if (list.length <= 1) {
    return list;
  }

  const pivot = list[0];
  const left = [];
  const right = [];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < pivot) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
