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
    //Test 2
    tempArray2.push(0);
    return tempArray2;
  }else {
    var hasOneTwo = false;
    for (var i = 0; i < tempArray2.length; i++) {
      if (tempArray2[i] < 100) {
        hasOneTwo = true;
      }
    }
    if (!hasOneTwo) {
      //Test 3
      var sum = 0;
      for (var i = 0; i < tempArray2.length; i++) {
        sum = sum + tempArray2[i];
      }
      var avg = sum / tempArray2.length;
      return [avg];
    }else {
      //Test 1
      var result = [];
      var k = 10;
      while (true) {
        if (smallThanKLevel(tempArray2,k)) {
          //Main Test 1
          var l = k / 10;
          while (l >= 1) {
            var sum = 0;
            var count = 0;
            for (var i = 0; i < tempArray2.length; i++) {
              if (tempArray2[i] >= l && tempArray2[i] < (10 * l)) {
                sum += tempArray2[i];
                count++;
              }
            }
            if (count != 0) {
              result.push(sum / count);
            }
            l = l / 10;
          }
          for (var i = 0; i < (result.length-1) / 2; i++) {
            var temp = result[i];
            result[i] = result[result.length-1-i];
            result[result.length-1-i] = temp;
          }
          return result;
        }
        k = k * 10;
      }
    }
  }
}

function smallThanKLevel(arr,k){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] > k) {
      return false;
    }
  }
  return true;
}
