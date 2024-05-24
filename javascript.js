
let currentNumber='';
let previousNumber='';
let operator='';

let displayCurrentNumber= document.querySelector(".currentDisplay");
let displayPreviousNumber= document.querySelector(".previousDisplay");

let equal = document.querySelector('.equal');
equal.addEventListener('click',()=>{
    if(currentNumber!=='' && previousNumber!==''){
        calculate();
    }
});



let clear = document.querySelector('.clear');
clear.addEventListener('click',()=>{
    displayClear();
});


let numbers = document.querySelectorAll('.number');
numbers.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
        handleNumber(e.target.textContent)
    })
})


let operators = document.querySelectorAll('.operator');
operators.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
        handleOperator(e.target.textContent)
    })
})


function handleNumber(num){
    currentNumber += num
    displayCurrentNumber.textContent=currentNumber;
    
}

function handleOperator(op){
    operator=op;
    previousNumber=currentNumber;
    displayPreviousNumber.textContent=previousNumber+""+operator;
    currentNumber=''
    displayCurrentNumber.textContent='';
    
}

function calculate(){
    previousNumber=Number(previousNumber);
    currentNumber=Number(currentNumber);
    if(operator=='+'){
        previousNumber += currentNumber;
    }else if(operator=='-'){
        previousNumber -= currentNumber;
    }else if(operator=='/'){
        if(currentNumber<=0){
            previousNumber='error';
            displayPreviousNumber='';
            displayCurrentNumber.textContent=previousNumber;
        }
        previousNumber /= currentNumber;
    }else if(operator=='X'){
        previousNumber *= currentNumber;
    }else if(operator=='%'){
        previousNumber %= currentNumber;
    }
    previousNumber=previousNumber.toString();
    currentNumber='';
    operator='';
    displayCurrentNumber.textContent=previousNumber;
    displayPreviousNumber.textContent='0';
}

function displayClear(){
    displayPreviousNumber.textContent='0';
    displayCurrentNumber.textContent='0';   
    operator='';
    currentNumber='';
    previousNumber='';
}
