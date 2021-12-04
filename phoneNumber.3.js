// function phoneNumber(num){
// let arr = num.toString().split('');
// if(arr.length < 10){
//     console.log("Bad number!")
//     }else if(arr.length > 10){
//         console.log("Bad number!")
//     }else {
//         for(let i = 0; i < arr.length; i ++){
//         if(arr[i] === ' '){
//         let newArr = arr.filter(elem => typeof(elem) === 'number');
//         console.log(newArr);
//             }
//         }
//     }
//     return ;
// }
// phoneNumber("123456 890");




function phoneNumber(num){
let str1 = num.split(' ').join('');
for(let i = 0; i< str1.length; i ++){
if(str1.length < 10){
    console.log('Bad number !');
    break ;
}else if(str1.length > 10 && str1.split('')[0] === '+'){
    console.log(str1.split('').slice(1,str1.length-1).join(""));
    break;
}else if(str1.length > 10 && str1[i] === '+'){
    console.log('Bad Number!');
    break ;
}else if(str1.length > 10){
    console.log('Bad number!');
    break;
}else {
    console.log('good number!');
    break;
             }
      }
}
phoneNumber("244445678900");