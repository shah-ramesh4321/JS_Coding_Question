// method 1
function minMaxVal(arr) {
    const max = arr.reduce((curVal, nextVal) => {
      return curVal > nextVal ? curVal : nextVal;
    });
    const min = arr.reduce((curVal, nextVal) => {
      return curVal < nextVal ? curVal : nextVal;
    });
    return [min, max];
}
let result = minMaxVal([2, 4, 1, 100, 7, 10, 3, 2]);
console.log("==============Method 1====================");
console.log("min==>", result[0]);
console.log("max==>", result[1]);

// Method 2
function minMax(arr) {
  
  let max = arr[0];
  let min = arr[0];
  arr.forEach((item, i) => {
    if (item > max) {
      max = item;
    }
    if (item < min) {
      min = item;
    }
  });
  return [min, max];
}

let result1 = minMax([2,3,1,4,5]);
console.log("===============Method 2===============");
console.log("min==>", result1[0]);
console.log("max==>", result1[1]);