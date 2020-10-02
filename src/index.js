exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0
    }

    let minNumber = array[0];
    array.forEach((item) => {
        minNumber = item < minNumber ? item : minNumber;
    })

    return minNumber;
}

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0
    }

    let maxNumber = array[0];
    array.forEach((item) => {
        maxNumber = item > maxNumber ? item : maxNumber;
    })
    return maxNumber;
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0
    }

    let sum = 0;
    array.forEach((item) => {
        sum += item;
    })

    return sum / array.length;
}
