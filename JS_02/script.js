// power of number calculated using a simple function

let powers = function(num, power){

    let result=1;

    if(num===0){
        console.log("0");

    }
    if(power=== 0){
        console.log("1");
    }
    else{       
        for(let i=1; i<=power; i++){
            result = result*num;
        }
         return result;
    }


};

console.log(powers(2,4));



// power of number calculated using a arrow function

 powers = (num, power) =>{

    let result=1;

    if(num===0){
        console.log("0");

    }
    if(power=== 0){
        console.log("1");
    }
    else{       
        for(let i=1; i<=power; i++){
            result = result*num;
        }
         return result;
    }


};
console.log(powers(3,2))



// program to find the power of a number


let num=3;
let result = 1;
let power=4     // this can be changed to 2 for claculating square, to 3 for calculating cube and so on

for(let i=1; i<=power;i++){
    result= result*num;
    
}
console.log(result);


