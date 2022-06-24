const caesar = function (string, num) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~/ /]/;
    const uni = [];
    const result = [];
    let b = 0;
    const remainder = Math.round(num % 26);
    num = remainder;

    for (let index = 0; index < string.length; index++) {
        let l = string.charCodeAt(index);
        if (specialChars.test(string[index]) != true) {
            b = l + num;

            if (remainder > 5) {
                b = l + remainder -26;
                uni.push(b);
            } else if (remainder < -5) {
                b = l + remainder - 26;
                uni.push(b);
            } else {
                //without remainder
                if (((b >= 65 && b <= 90) || (b >= 97 && b <= 122)) ) {
                    uni.push(b);
                }else {
                    //A-Z
                    if (b < 65 && num < 0) {
                        b = (b - 65) + 91;
                        uni.push(b);
                    //a-z
                    } else if (b < 97 && num < 0) {
                        b = (b - 97) + 122;
                        
                        uni.push(b);
                    //Z-A
                    } else if (b > 90 && num > 0) {
                        b = (b - 90) + 64;
                        uni.push(b);
                    //z-a
                    } else if (b > 122 && num < 0) {
                        b = (b - 122) + 96;
                        uni.push(b);
                    }
                }
            }
        

    } else {
        uni.push(l);
    }

}

uni.forEach(letter => {
    result.push(String.fromCharCode(letter));

});
const end = result.join('');
return end;

};

console.log(caesar('Hello, World!', 75));

// Do not edit below this line
module.exports = caesar;
