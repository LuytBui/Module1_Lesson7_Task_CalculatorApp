function notYetDeveloped(){alert("Rất tiếc!!!  \nTính năng này chưa được hoàn thiện. \n huhuhu");}
function expressionAdd(symbol){
    expression += symbol;
    display(expression);
    console.log(expression);
}
function display(something){
    monitor.innerText = something;
}
function newTask(){
    expression ="";
}


function radSymbolClicked()                 {expressionAdd('radians');}
function degSymbolClicked()                 {expressionAdd('°');}
function factorialSymbolClicked()               {expressionAdd('!');}
function openParenthesisSymbolClicked()         {expressionAdd('(');}
function closeParenthesisSymbolClicked()         {expressionAdd(')');}
function percentSymbolClicked()                 {expressionAdd('%');}
function ACClicked() {
    newTask();
    display(expression);
}
function inverseClicked() { notYetDeveloped(); }
function sineClicked()              {expressionAdd('sin(');}
function logNepeClicked()           {expressionAdd('ln(');}
function number7Clicked()           {expressionAdd('7');}
function number8Clicked()           {expressionAdd('8');}
function number9Clicked()           {expressionAdd('9');}
function devideClicked()            {expressionAdd('÷');}
function PIClicked()                {expressionAdd('π');}
function cosineClicked()            {expressionAdd('cos(');}
function log10Clicked()             {expressionAdd('log(');}
function number4Clicked()           {expressionAdd('4');}
function number5Clicked()           {expressionAdd('5');}
function number6Clicked()           {expressionAdd('6');}
function multiplyClicked()          {expressionAdd('×');}
function numberEClicked()           {expressionAdd('e');}
function tangentClicked()           {expressionAdd('tan(');}
function rootClicked()              {expressionAdd('√(');}
function number1Clicked()           {expressionAdd('1');}
function number2Clicked()           {expressionAdd('2');}
function number3Clicked()           {expressionAdd('3');}
function minusClicked()             {expressionAdd('-');}
function answerClicked() {
    expression = result;
    display(expression);
}
function EXPClicked() { notYetDeveloped(); }
function powerClicked()         {expressionAdd('^');}
function number0Clicked()       {expressionAdd('0');}
function dotClicked()           {expressionAdd('.');}
function actionClicked() {
    calculate();
}
function addClicked()            {expressionAdd('+');}


