const slice = (strOrArr, start, end) => {
    
    var finish;
    if (!end) {
        finish = strOrArr.length
    } else{
        finish = end
    }
    if (start < 0) {
        start = strOrArr.length + start
    }
    if (typeof strOrArr === 'string') {
       
        var res = ''
        // console.log(start)
        for (let i = start; i < finish; i++) {
            res+=strOrArr[i]
        }
        return res
    } else {
        var res = []
        for (let i = start; i < finish; i++) {
            res.push(strOrArr[i])
        }
        return res
    }
}

console.log(slice('abcdef', -2))
// console.log([1,2,3,4,5,6].slice(3,5))