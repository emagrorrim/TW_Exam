function calculate_median(arr) {
  for (var i = 0;i < arr.length;i++) {
    for (var j = 0; j < arr.length;j++) {
      if (arr[j] > arr[i]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  if (arr.length % 2 == 0) {
    return arr[arr.length / 2]
  }else {
    var number1 = arr[(arr.length-1) / 2 - 1];
    var number2 = arr[(arr.length-1) / 2 + 1];
    return (number1 + number2) / 2;
  }
}
