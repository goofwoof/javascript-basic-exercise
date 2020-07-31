export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  //start
  if(string == null || string == undefined){
    return 0;
  }
  if(prediction == null || prediction == undefined || prediction.length == 0){
    return string.length;
  }
  var count = 0;
  var reg = new RegExp(prediction, 'g')
  string.replace(reg,function (m, i) {count++;});
  return count;
  //end
  //throw new Error('Please delete this line and implement the function');
}
