export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null){
    throw new Error('Flatten undefined or null array');
  }
  return flattenWithDepth(array, [], 1);//展开2leve

  //throw new Error('Please delete this line and implement the function');
}

function flattenWithDepth (array, result, depth) {
  for (var i = 0; i < array.length; i++) {
      var value = array[i]

      // 判断是否到了指定的深度 或者 当前数组是否已经全部展开
      if (depth > 0 && Array.isArray(value)) {
          flattenWithDepth(value, result, depth - 1)
      } else {
          result.push(value)
      }
  }

  return result
}
