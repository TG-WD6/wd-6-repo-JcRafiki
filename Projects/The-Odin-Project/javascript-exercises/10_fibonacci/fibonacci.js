const fibonacci = function(num) {
    if(num < 0 ){
        return 'OOPS';
    }
    let fibArray = [0,1];
    let a = 0;
    let b = 1;
    for(let i=0; i <=50; i++){
        letnewNumber = 1;
        newNumber =  fibArray[a] + fibArray[b];
        fibArray.push(newNumber);
        a++;
        b++;
    }
    return fibArray[num];
};

// Do not edit below this line
module.exports = fibonacci;
