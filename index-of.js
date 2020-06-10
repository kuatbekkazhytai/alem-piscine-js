var arr = []
const indexOf = (arr, value, fromIndex ) => {

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

    for(let i = arr.length-1; i >= fromIndex; i--) {
        if (arr[i] == value) {
            return i - fromIndex
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

console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1],2,2))

console.log([1, 2, 3, 4, 5, 4, 3, 2, 1].indexOf(2,2));