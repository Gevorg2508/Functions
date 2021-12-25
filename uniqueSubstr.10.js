let uniq = function(str){
   let str1 = str.split("");
let string = [];
let result = [];
for(let i = 0; i<str1.length; i++){
    if(string.includes(str1[i]) === false){
        string.push(str1[i]);
    }else{
        result.push(string);
        string = [];
        string.push(str[i]);
    }
}
return result.sort((a,b)=>a.length - b.length)[result.length - 1].join('');
}

let some = 'there are no two words in the english language more harmful than "goodjob".';
console.log(uniq(some));