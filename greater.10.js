let func = function(arr,number){
    return arr.filter(elem => elem > number).length === 0 ? "Such values do not exists" :arr.filter(elem => elem > number)
;}
console.log(func([10, 25, 16, -5, 30, 15, 24],16));