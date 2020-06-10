const cutFirst = (str) => {
    var res = ''
    for (let i = 2; i < str.length; i++) {
        res += str[i]
    }
    return res
}
const cutLast = (str) => {
    var res = ''
    for (let i = 0; i < str.length-2; i++) {
        res += str[i]
    }
    return res
}
const cutFirstLast = (str) => {
    var res = ''
    for (let i = 2; i < str.length; i++) {
        res += str[i]
    }
    var output = ''
    for (let i = 0; i < res.length-2; i++) {
        output += res[i]
    }
    return output
}
const keepFirst = (str) => {
    var res = ''
    for (let i = 0; i < 2; i++) {
        res += str[i]
    }
    return res
}
const keepLast = (str) => {
    var res = ''
    for (let i = str.length-2; i < str.length; i++) {
        res += str[i]
    }
    return res
}
const keepFirstLast  = (str) => {
    var res = ''
    var second = ''
    for (let i = 0; i < 2; i++) {
        res += str[i]
    }
    // console.log(res)
    for (let i = str.length-2; i < str.length; i++) {
        second += str[i]
    }
    return res + second
}


// console.log(keepFirstLast('hello world'))