//each time the function is called
//print one element from the array
//in a row

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var index = -1;
  return function() {
    /* your code here */
    index++;
    if (index >= list.length) {
      index = 0;
    }
    return list[index];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6