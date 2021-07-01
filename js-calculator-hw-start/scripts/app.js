// ! 💻 Remember when working in the browser, be sure to save the changes in this file, and refresh the browser window to run the code again.

// ! 👨‍🏫 Read the readme carefully, and practice using "window.prompt()" to gather user input

// * Write your code below!

// calling 

const button = document.querySelectorAll("input");
const display = document.querySelector(".display");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

// adding event listener

for(let i = 0 ; i < 15 ; i++){
    button[i].addEventListener("click" , number_input);
}

equal.addEventListener("click", calculate);
clear.addEventListener("click", restart);

// function for the button 
var display_value = [];
var pressed_value = [];
var ready_value = [];

function number_input(e){
    
    e.preventdefault;

    display.innerHTML = ""
    
    display_value.push(this.value);

    // put value together
    if (this.value === "x" || this.value === "-" || this.value === "÷" || this.value === "+"){
        ready_value.push(pressed_value.join(""));
        ready_value.push(this.value);
        pressed_value = [];
    }else{
        pressed_value.push(this.value);
    }
    
    // display purpose
    display_value.forEach(element => {
        display.innerHTML += element;
    });

}

function calculate(e){

    e.preventdefault;
    
    ready_value.push(pressed_value.join(""));
    pressed_value = [];
    
    let final_value = [];

    for(let i = 0; i < ready_value.length; i++ ){
        
        if(!isNumber(ready_value[i])){
            if(ready_value[i] === "x"){
                final_value.push("*");
            }else if(ready_value[i] === "-"){
                final_value.push("-");
            }else if(ready_value[i] === "÷"){
                final_value.push("/");
            }else{
                final_value.push("+");
            }
        }else{
            final_value.push(parseFloat(ready_value[i]));
        }
    }

    try {
        display.innerHTML = eval(final_value.join(""));
    } catch (error) {
        alert("Syntax ERROR");
    }

    display_value = [];
    pressed_value = [];
    ready_value = [];
}

function isNumber(n) { 
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
} 

function restart(e){

    e.preventdefault;

    display_value = [];
    pressed_value = [];
    ready_value = [];

    display.innerHTML = display_value;
}