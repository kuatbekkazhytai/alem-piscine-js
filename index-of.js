var arr = []
const indexOf = (arr, value, fromIndex ) => {
    var start;
    if (!fromIndex) {
         start = 0;
    } else {
        start = fromIndex
    }
    for (let i = start; i < arr.length; i++) {
        if (arr[i] == value) {
            return i
        }
    }
    return -1
}

const lastIndexOf = (arr, value, fromIndex) => {
    var start;
    if ((!fromIndex) || (fromIndex >= arr.length)) {
         start = arr.length-1;
    } else {
        start = fromIndex
    }
    for(let i = start; i >= 0; i--) {
        if (arr[i] == value) {
            return i
        }
    }
    return -1
}
const includes = (arr, value) => {
    for(let i = 0; i < arr.length; i++) {
        if  (arr[i] == value) {
            return true
        }
    }
    return false
}

console.log(lastIndexOf([0, 0, 't', 't'], 't', 3))

// console.log([0,1, 2, 3, 4, 5, 4, 3, 2, 1].lastIndexOf(1));