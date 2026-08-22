const currDisplay = document.querySelector("#currentDisplay");
const prevDisplay = document.querySelector("#previousDisplay");

// const numberButtons = document.querySelectorAll("[data-number]");

const clearBtn= document.querySelector("#clear");
const deleteBtn= document.querySelector("#delete");
const percentageBtn= document.querySelector("#percentage");
const decimalBtn= document.querySelector("#decimal");
const equalBtn= document.querySelector("#equal");

const operators={
    divide :"/",
    multiply:"*",
    subtract:"-",
    add:"+",
};

let current = "";
let previous = "";
let operators= "";


// Numbers Button 
document.querySelectorAll(".number").forEach((button) => {
    button.addEventListener("click",()=>{
        const value = button.textContent;

        if(value=="." && current.includes("."))return;
       
        current += value;

          updateDisplay();
       
    });
   

    
});

//operator butn

Object.keys(operators).forEach((id) => {
    document.getElementById(id).addEventListener("click",()=>{

        if(current === "" && previous === "") return; 
        
        if(current  !==""){
            if( previous !==""){
                calculate();
            }

            previous=current;
            current="";

        }
        operator=operators[id];
        updateDisplay();
    });
});

//equals


//clear

clearBtn.addEventListener("click",()=> {
    ((current=""), (previous=""),(operator=""));
    updateDisplay();
})


//delete

//percentage


//claculate
const calculate = ()=>{};




const updateDisplay = ()=>{

    currDisplay.textContent = current||"0";

    if(previous && operator){
        prevDisplay.textContent = ` ${previous} ${operator}`;

    }
    else{
        prevDisplay.textContent="";
    }
};



