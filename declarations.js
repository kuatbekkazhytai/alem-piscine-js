var escapeStr = "`,\\,/,\",'";
var arr = [4, '2'];
var obj = {
    str = 'hello world',
    num = 5,
    bool = true,
    undef = undefined,
};
var nested = {
    arr = [4, undefined, '2'],
    obj = {
        str = 'hello',
        num = 5,
        bool = false,
    },
};
Object.freeze(obj);
Object.freeze(nested);
