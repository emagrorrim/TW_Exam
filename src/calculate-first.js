function single_element(arr) {
  var result = [];
  var hasNoSameNumber = true;
  for (var i = 1;i < arr.length;i+=2) {
    for (var j = 1; j < arr.length; j+=2) {
      if (i != j && arr[i] == arr[j]) {
        hasNoSameNumber = false;
      }
    }
    if (hasNoSameNumber) {
      result.push(arr[i]);
    }
    hasNoSameNumber = true;
  }
  return result;
}
