const multiply = (a, b) => {
    var neg = true
    if (((a>0) && (b>0)) || ((a<0) && (b<0))) {
        neg = false
    } else {
        neg = true
    }
    a = Math.abs(a)
    b = Math.abs(b)

    var res = 0;
    for (let i = 0; i < b; i ++ ) {
        res+=a
    }

    if (neg) {
        return -Math.abs(res)
    }
    return res
};
// const divide = (a,b) =>{
//     var neg = false

//     resInt = 0
//     while (a >= b) {
//         a -= b
//         resInt++
//     } 
//     return resInt
// };
// const modulo = (a,b) => a%b;

console.log(multiply(4,-1))