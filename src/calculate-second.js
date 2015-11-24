function calculate_median(arr) {
  var ar = [];
  for (var i = 1; i < arr.length; i+=2) {
    ar.push(arr[i]);
  }
  for (var i = 0;i < ar.length;i++) {
    for (var j = 0; j < ar.length;j++) {
      if (ar[j] > ar[i]) {
        var temp = ar[i];
        ar[i] = ar[j];
        ar[j] = temp;
      }
    }
  }
  if (ar.length % 2 == 1) {
    return ar[(ar.length-1) / 2]
  }else {
    var number1 = ar[ar.length / 2];
    var number2 = ar[ar.length / 2 - 1];
    return (number1 + number2) / 2;
  }
}
