var n = parseFloat(n)
var m = parseFloat(m)

const sign = (n) => {
    if (n > 0) return 1
    else if (n == 0) return 0
    return -1
}

const sameSign = (m,n) => {
    if (((m>=0) && (n>=0)) || ((m<0) && (n<0))) return true
    return false
}

console.log(sameSign(-1,-1))

