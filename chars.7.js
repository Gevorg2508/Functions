let func = function (str){
    let res = '';
    let result = function(str){
        return str.length === 3 ? str.substr(1,2) + str.split('').shift()  :str ;
    }
    for(let i = 0 ; i<str.length ; i+=3){
        res += result(str.substr(i,3));
    }
    return res;
}
console.log(func('home'));