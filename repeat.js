const repeat = (str, n) => {
    var res = '';
    let count = 0;
    while (count < n) {
        res += str;
        count++
    }
    return res
} 

// console.log(repeat('a', 3))