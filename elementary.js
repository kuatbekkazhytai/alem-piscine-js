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
    var neg = false
    if (a < 0) {
        neg = true
    } else {
        neg = false
    }
    a = Math.abs(a)
    var c = a
    b = Math.abs(b)
    var resInt = 0
    var res = 0
    while (a >= b) {
        a -= b
        resInt++ 
    }
    res = c - multiply(resInt, b)
    if (neg) {
        return -Math.abs(res)
    }
    return res
}