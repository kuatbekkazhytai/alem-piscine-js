var n = parseFloat(n)
var m = parseFloat(m)

const sign = (n) => {
    if (n > 0) return 1
    else if (n == 0) return 0
    return -1
}

const sameSign = (m,n) => {
    return m*n > 0
}

