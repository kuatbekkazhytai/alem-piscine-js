const escapeStr = "`,\\,/,\",'";
const arr = [4, '2'];
const obj = {
    str : 'hello world',
    num : 5,
    bool : true,
    undef : undefined,
};
const nested = {
    arr : [4, undefined, '2'],
    obj : {
        str : 'hello',
        num : 5,
        bool : false,
    },
};
Object.freeze(obj);
Object.freeze(nested);
