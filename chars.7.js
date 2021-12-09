let str = ['aa','ba','ca'];

function ret(arr){
    for(let i = 0; i<arr.length ; i++){
        if(arr[i] && i === 0){
            arr.push(arr[i]);
           arr.shift();
        }
    }
    return console.log(arr);
}
ret(arr);

