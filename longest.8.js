let func = function (str){
    str = str.split(' ').sort((a,b) => a.length - b.length);
    return str[str.length - 1];
}
console.log(func('My birthday is today !'));