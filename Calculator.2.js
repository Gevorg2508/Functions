function calculator(num1,op,num2){
    
    if(op === "+"){
        let sum = num1 + num2;
        console.log("the sum of num1 and num2 two is " + sum)
    }else if(op === '-'){
        let diff = num1 - num2;
        console.log("the difference of num1 and num2 is" + diff)
    }else if(op === '*'){
        let mult = num1*num2;
        console.log("the multiplication of num1 and num2 is " + mult);
    }else if(op === "/"){
        let div = num1 / num2;
        console.log('the division of num1 and num2 is ' + div);
    }

    return;
}
calculator(1,"/",2);