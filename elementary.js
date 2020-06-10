const multiply = (a, b) => {
    var res = 0;
    for (let i = 0; i < b; i ++ ) {
        res+=a
    }
    return res
};
const divide = (a,b) =>{
    var neg = false

    resInt = 0
    while (a >= b) {
        a -= b
        resInt++
    } 
    return resInt
};
const modulo = (a,b) => a%b;

// console.log(divide(30,5))