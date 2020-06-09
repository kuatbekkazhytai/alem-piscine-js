var n = parseFloat(n)
var m = parseFloat(m)

const max = (m,n) => {
    if (m>n) return m
        return n
}

const min = (m,n) => {
    if (m<n) return m
        return n
}

console.log(max(1,5))