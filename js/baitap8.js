// Truy cập vào các ô input
let display=document.getElementById("display");
//các số từ 0->9, và dấu +-*/
function appendToDisplay(number){
    display.value=display.value+number;
}
//button c
function clearDisplay(){
    display.value="";
}
//button dấu =
function calculate(){
    display.value=eval(display.value);
}