let arr = [0,1,2,3,4,5,6,7];
let odd = [];
let even = [];
function oddFilter(...arr){
    for (let i =0; i < arr.length; i++){
    if(!(arr[i] % 2)){
        odd.push(arr[i]);
    }else{
        even.push(arr[i]);
        }
    }
    return ;
}
oddFilter(...arr);
console.log(odd);
console.log(even);