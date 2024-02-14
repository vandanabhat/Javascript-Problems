
//find a max and min number in unsored array.

function findMinMax(arr) {
  if (arr.length === 0) {
    // Handle the case where the array is empty
    return { min: null, max: null };
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      // Update min if a smaller value is found
      min = arr[i];
    } else if (arr[i] > max) {
      // Update max if a larger value is found
      max = arr[i];
    }
  }

  return { min, max };
}

// Example usage:
const unsortedIntegerArray = [3, 1, 4, 2, 8, 6, 7, 5];
const { min, max } = findMinMax(unsortedIntegerArray);

console.log("Minimum number:", min);
console.log("Maximum number:", max);
