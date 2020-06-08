
// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
//   }
const get = function(key) {
    return sourceObject[key];
};
const set = function(key, value) {
    sourceObject['key'] = value;
    return sourceObject['key'];
};



