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
 }});1
function appendValue(value) {
  display.value += value;
  scrollDisplay();
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  let lines = display.value.split('\n');
  lines[lines.length - 1] = lines[lines.length - 1].slice(0, -1);
  display.value = lines.join('\n');
}

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
  

function scrollDisplay() {
  display.scrollTop = display.scrollHeight;
}
function more_op()
{
   const moreOp = document.getElementById('default_options');
   const back=op = document.getElementById('more');
   moreOp.classList.toggle('hidden');
    back.classList.toggle('hidden');
}
//Memory Functions
let memory = 0;
function memoryAdd() {
  const display = document.getElementById('display');
  memory += parseFloat(display.value) || 0;
  display.value = '';
}
function memorySubtract() { 
  const display = document.getElementById('display');
  memory -= parseFloat(display.value) || 0;
  display.value = '';
}
function memoryClear() {
  const display = document.getElementById('display');
  memory = 0;
  display.value = '';
}
function memoryRecall() {
  const display = document.getElementById('display');
  display.value = memory.toFixed(5);
  scrollDisplay();
}
function memoryStore() {
  const display = document.getElementById('display');
  memory = parseFloat(display.value) || 0;
  display.value = '';
}
// Scientific Functions
function calculateSquare() {
  const display = document.getElementById('display');
  display.value = Math.pow(parseFloat(display.value) || 0, 2).toFixed(5);
}
function calculateSquareRoot() {
  const display = document.getElementById('display');
  const value = parseFloat(display.value) || 0;
  display.value = value >= 0 ? Math.sqrt(value).toFixed(5) : 'Error';
}
function calculateSin() {
  const display = document.getElementById('display');
  display.value = Math.sin(parseFloat(display.value) || 0).toFixed(5);
}
function calculateCos() {
  const display = document.getElementById('display');
  display.value = Math.cos(parseFloat(display.value) || 0).toFixed(5);
}
function calculateTan() {
  const display = document.getElementById('display');
  display.value = Math.tan(parseFloat(display.value) || 0).toFixed(5);
}
function calculateLog() {
  const display = document.getElementById('display');
  const value = parseFloat(display.value) || 0;
  display.value = value > 0 ? Math.log10(value).toFixed(5) : 'Error';
}
function calculateExp() {
  const display = document.getElementById('display');
  display.value = Math.exp(parseFloat(display.value) || 0).toFixed(5);
}