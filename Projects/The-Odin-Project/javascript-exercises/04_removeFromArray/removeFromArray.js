const removeFromArray = function (ar, ...args) {
    let argAr = args;
    argAr = argAr.reverse();
    for (const key in argAr) {
        if (ar.indexOf(argAr[key]) != -1) {
            let index = ar.indexOf(argAr[key]);
            //console.log(index);
            ar.splice(index, 1);
        }
    }
    return ar;
}
// Do not edit below this line
module.exports = removeFromArray;
