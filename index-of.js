var arr = []
const indexOf = (arr, value, fromIndex ) => {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] == value) {
            return i
        }
    }
    return -1
}

const lastIndexOf = (arr,  value, fromIndex) => {
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

// console.log(lastIndexOf([1,2,3,4,5,6,8,5,1,2],2, 2))

// console.log([1,2,3,4,5,6,8,5,1,2].lastIndexOf(2, 2));