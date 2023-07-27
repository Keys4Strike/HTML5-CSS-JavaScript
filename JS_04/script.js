const num1 = Math.ceil(Math.random()*100);   // this gives us no. between 1 to 100

// console.log(num1)

const num2 = Math.ceil(Math.random()*10);         // Math.random and Math.ceil are inbuilt JS functions.

// console.log(num2)

let result =num1 * num2;  //This stores the num1*num2 value result.

// console.log(result);

// <----------------------------------*---------------------------*------------------------------------------------------------------------->

let score= JSON.parse (localStorage.getItem("score")); // This helps to get the value of score from the browser.

if(!score){
    score=0;
}

// <----------------------------------*---------------------------*------------------------------------------------------------------------->

// This cahnges the value of Score on screen

const value = document.getElementById("scores");

value.innerHTML =`score: ${score}`; 

// <----------------------------------*---------------------------*------------------------------------------------------------------------->
// This is to get the "What is 9 multiply 1" value anmd then change it on screen.
// This changes the numbers in the line randomly(9 and 1 will keep on geeting replaced everytime the submit button is pressed.)

const text = document.getElementById("text");  
text.innerHTML= `What is '${num1}' multiply by '${num2}'?`;     

// <----------------------------------*---------------------------*------------------------------------------------------------------------->

// This is to get the input from the input box created in HTML

const input= document.getElementById("input");  
// console.log(input);

// <----------------------------------*---------------------------*------------------------------------------------------------------------->

const form= document.getElementById("container"); // 

// console.log(container);

form.addEventListener("submit", ()=>{
    const userInput = +input.value             // + helps us to convert string values to no.
    if(userInput === result){                 // If the value is correct then Score will increase
        score++;
        updateLocalStorage();
        console.log(score);
    }else{                                 // If the value is incorrect then Score will decrease
        score--
        updateLocalStorage();
        console.log(score)
    }
    // console.log(userInput, typeof userInput);
})

// <----------------------------------*---------------------------*------------------------------------------------------------------------->

//Function to store the values on locaal browser storage and store it so that it can be changed- everytime the ancswer is given.
function updateLocalStorage(){          
    localStorage.setItem("score", JSON.stringify(score))  // localStorage.setItem is used to set the value and store it.
                                // JSON.stringify is function to convert the value to string.
}

                                    //End Of Program
// <----------------------------------*---------------------------*------------------------------------------------------------------------->

//The commented portion was just to play with the code while working on this project.
//Since all the work has been done on Local stoarge the commented portion is to show that I tried.


// const multiply = function(num1, num2){
    
//     let result = num1*num2;
//     return result;

// }

// console.log(multiply(10,20));

// <----------------------------------*---------------------------*------------------------------------------------------------------------->