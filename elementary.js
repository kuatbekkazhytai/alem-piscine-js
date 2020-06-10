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
}


const divide = (a,b) =>{
    if (b== 0) {
        return Number.POSITIVE_INFINITY
    }
    var neg = true
    if (((a>0) && (b>0)) || ((a<0) && (b<0))) {
        neg = false
    } else {
        neg = true
    }
    a = Math.abs(a)
    b = Math.abs(b)
    var resInt = 0
    while (a >= b) {
        a -= b
        resInt++
    } 
    if (neg) {
        return -Math.abs(resInt)
    }
    return resInt
}
const modulo = (a,b) =>  {
    if (b== 0) {
        return Number.POSITIVE_INFINITY
    }
    a = Math.abs(a)
    c = a
    b = Math.abs(b)
    var resInt = 0
    while (a >= b) {
        a -= b
        resInt++
       
    }
    // console.log(c)
    res = c - (resInt * b)
    return res
}
console.log(modulo(-59,-8))

const mod = (a,b) => a%b

console.log(mod(-59, -8))