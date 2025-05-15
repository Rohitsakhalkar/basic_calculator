//takes the value of the button pressed and displays it on the screen
let display = document.getElementById('display');
 document.addEventListener('keydown', function(event) {{
      switch (event.key) {
              case '1':appendValue('1'); break;
              case '2':appendValue('2'); break;
              case '3':appendValue('3'); break;
              case '4':appendValue('4'); break;
              case '5':appendValue('5'); break;
              case '6':appendValue('6'); break;
              case '7':appendValue('7'); break;
              case '8':appendValue('8'); break;
              case '9':appendValue('9'); break;
              case '0':appendValue('0'); break;
              case '+':appendValue('+'); break;
              case '-':appendValue('-'); break;
              case '*':appendValue('*'); break;
              case '/':appendValue('/'); break;
              case '%':appendValue('%');break;
              case '.':appendValue('.'); break;
              case '(':appendValue('('); break;
              case ')':appendValue(')'); break;
              case '=': event.preventDefault(); 
                        calculateResult();
                        break;
              case 'Enter' :
                        event.preventDefault(); 
                        calculateResult();
                        break;
              case 'Backspace':
                      event.preventDefault(); 
                      deleteLast();
                      break;
              case 'Escape':
                      event.preventDefault();
                      clearDisplay();
                      break;
}
}});
//display numbers and functions on screen
function appendValue(value) {
  display.value += value;
  scrollDisplay();
}
//clears the display
function clearDisplay() {
  display.value = '';
}
//clears the last character
function deleteLast() {
  let lines = display.value.split('\n');
  lines[lines.length - 1] = lines[lines.length - 1].slice(0, -1);
  display.value = lines.join('\n');
}
//calculates the result
function calculateResult() {
    try {
      let lines = display.value.split('\n');
      let expression = lines[lines.length - 1];
      let result = eval(expression);
  
      if (!isFinite(result)) {
        display.value += `\n= Error\n`;
      } else {
        display.value += `\n= ${result}\n\n`; 
      }
  
      scrollDisplay();
    } catch (e) {
      display.value += `\n= Error\n\n`;
      scrollDisplay();
    }
  }
  
//scrolls the display to see previous calculations
function scrollDisplay() {
  display.scrollTop = display.scrollHeight;
}
//changes the display to scientific mode
function more_op()
{
   const moreOp = document.getElementById('default_options');
   const back=op = document.getElementById('more');
   moreOp.classList.toggle('hidden');
    back.classList.toggle('hidden');
}
//Memory Functions
let memory = 0;
// M+ function adds the current value to memory
function memoryAdd() {
  const display = document.getElementById('display');
  memory += parseFloat(display.value) || 0;
  display.value = '';
}
// M- function subtracts the current value from memory
function memorySubtract() { 
  const display = document.getElementById('display');
  memory -= parseFloat(display.value) || 0;
  display.value = '';
}
// MC function clears the memory
function memoryClear() {
  const display = document.getElementById('display');
  memory = 0;
  display.value = '';
}
// MR function recalls the value stored in memory
function memoryRecall() {
  const display = document.getElementById('display');
  display.value = memory.toFixed(5);
  scrollDisplay();
}
// MS function stores the current value in memory
function memoryStore() {
  const display = document.getElementById('display');
  memory = parseFloat(display.value) || 0;
  display.value = '';
}
// Scientific Functions
// calculates square of the current value
function calculateSquare() {
  const display = document.getElementById('display');
  display.value = Math.pow(parseFloat(display.value) || 0, 2).toFixed(5);
}
// calculates square root of the current value
function calculateSquareRoot() {
  const display = document.getElementById('display');
  const value = parseFloat(display.value) || 0;
  display.value = value >= 0 ? Math.sqrt(value).toFixed(5) : 'Error';
}
//calculates sine of the current value
function calculateSin() {
  const display = document.getElementById('display');
  display.value = Math.sin(parseFloat(display.value) || 0).toFixed(5);
}
//calculates cosine of the current value
function calculateCos() {
  const display = document.getElementById('display');
  display.value = Math.cos(parseFloat(display.value) || 0).toFixed(5);
}
//calculates tangent of the current value
function calculateTan() {
  const display = document.getElementById('display');
  display.value = Math.tan(parseFloat(display.value) || 0).toFixed(5);
}
//calculates logarithm of the current value
function calculateLog() {
  const display = document.getElementById('display');
  const value = parseFloat(display.value) || 0;
  display.value = value > 0 ? Math.log10(value).toFixed(5) : 'Error';
}
//calculates exponential of the current value
function calculateExp() {
  const display = document.getElementById('display');
  display.value = Math.exp(parseFloat(display.value) || 0).toFixed(5);
}