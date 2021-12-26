let longSub = function(str){
    str = str.split("");
    let akk = [];
    let flag = true;
    let result = [];
    for(let i = 0; i<str.length; i++){
        if(akk.includes(str[i]) === false){
            akk.push(str[i]);

        }else{
            result.push(akk);
            akk = [];
            akk.push(str[i]); 
            result.push(akk);
            flag = false;
        }
    }
    // console.log(akk);
    //  result.push(akk);
    result = result.sort((a,b)=>a.length - b.length)[result.length -1];
    return flag === true ? akk :result;
}
let str = 'there are no two words in the english language more harmful than "good job".';
console.log(longSub(str));