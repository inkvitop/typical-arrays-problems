
exports.min = function min (array) {
  try {
    let minNumber = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] < minNumber) {
      minNumber = array[index]
    }
  }
  if (array.length === 0) {
    return 0
  }else{
    return minNumber;
  }
  } catch (error) {
    return 0
  }
}

exports.max = function max (array) {
  try {
    let maxNumber = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > maxNumber) {
      maxNumber = array[index]
    }
  }
  if (array.length === 0) {
    return 0
  }else{
    return maxNumber;
  }
  } catch (error) {
    return 0
  }
}

exports.avg = function avg (array) {
  try {
    let summ = 0;
    let arrayLength = array.length;
    array.forEach(element => {
      summ += element;
    });
    if (arrayLength === 0) {
      return 0
    }else {
      return summ/arrayLength;
    }
  } catch (error) {
    return 0
  }
}
