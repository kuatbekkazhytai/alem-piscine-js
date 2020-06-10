const slice = (strOrArr, start, end) => {
    
    var finish;
    if (!end) {
        finish = strOrArr.length
    } else{
        finish = end
    }
    if (typeof strOrArr === 'string') {
       
        var res = ''
        for (i = start; i < finish; i++) {
            res+=strOrArr[i]
        }
        return res
    } else {
        var res = []
        for (i = start; i < finish; i++) {
            res.push(strOrArr[i])
        }
        return res
    }
}

// console.log(slice([1,2,3,4,5,6], 3, 5))
// console.log([1,2,3,4,5,6].slice(3,5))