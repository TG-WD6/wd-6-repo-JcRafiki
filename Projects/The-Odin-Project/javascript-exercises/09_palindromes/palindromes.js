const palindromes = function (string) {
 let base = string.toLowerCase().replace(/[^\w\s]/gi, '');

 string = string.replace(/[^\w\s]/gi, '').toLowerCase().split('').reverse().join('');
 string = string.replace(/\s/g,'');
 base = string.replace(/\s/g,'');

 console.log(string);
 console.log(base);
 if(base == string){
    return true;
 }
 return false;
};


palindromes('ZZZZ car, a man, a maracaz.');





// Do not edit below this line
module.exports = palindromes;


