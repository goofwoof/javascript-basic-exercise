export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:

  var length = Math.abs(end - start);
  var array = [];
  if (start <= end){
    for(var i=0;i<length; i++){
      array.push(start++);
    }
  }
  else{
    for(var i=0;i<length; i++){
      array.push(start--);
    }
  }
  return array;
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  //throw new Error('Please delete this line and implement the function');
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  var s = 0;
  for (var i=numbers.length-1; i>=0; i--) {
    s += numbers[i];
  }
  return s;
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  //throw new Error('Please delete this line and implement the function');
}
