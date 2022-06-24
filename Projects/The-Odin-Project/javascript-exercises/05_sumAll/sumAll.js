const sumAll = function(first, second) {
    let start = first;
    let result = 0;
    if(first <  0 || second < 0 || typeof first != 'number' || typeof second != 'number'){
        return 'ERROR';
    }
    if(first > second){
        start = second;
        second = first;
        for(start; start <= second; start++){
            result += start;
        }
    }
    for(start; start <= second; start++){
        result += start;
    }
    return result;
};
console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
