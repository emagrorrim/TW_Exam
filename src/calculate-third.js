function even_group_calculate_average(arr) {
  var tempArray1 = [];
  for (var i = 1; i < arr.length; i+=2) {
    tempArray1.push(arr[i]);
  }
  var tempArray2 = [];
  for (var i = 0; i < tempArray1.length; i++) {
    if (tempArray1[i] % 2 == 0) {
      tempArray2.push(tempArray1[i]);
    }
  }
  if (tempArray2.length == 0) {
    tempArray2.push(0);
  }

}
