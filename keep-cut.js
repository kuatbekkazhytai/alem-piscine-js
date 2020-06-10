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
    if (str.length > 2 ) {
        var res = ''
        for (let i = 0; i < 2; i++) {
            res += str[i]
        }
        return res
    }
    return str
}
const keepLast = (str) => {
    if (str.length > 2 ) {
        var res = ''
        for (let i = str.length-2; i < str.length; i++) {
            res += str[i]
        }
        return res
    }
    return str

}
const keepFirstLast  = (str) => {
    if (str.length > 2 ) {
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
    return str
}


// console.log(keepFirstLast('hello world'))