let mainArr = ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec'];
let result = [] ; 
 function anagram(word,...arr){
    let word1 = word.split('').sort().join('');
    for(let i = 0 ; i <arr.length ; i ++){
       if (arr[i].split('').sort().join('').includes(word1)){
         console.log(arr[i].split( ));
        }
    }
}
 anagram("pencil",...mainArr);