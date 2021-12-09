let expression = "";
let result;

function $get(id) {return document.getElementById(id);}

let monitor = $get("monitor");
let radSymbol = $get("radSymbol");
let degSymbol = $get("degSymbol");
let factorialSymbol = $get("factorialSymbol");
let openParenthesisSymbol = $get("openParenthesisSymbol");
let closeParenthesisSymbol = $get("closeParenthesisSymbol");
let percentSymbol = $get("percentSymbol");
let AC = $get("AC");

let inverse = $get("inverse");
let sine = $get("sine");
let logNepe = $get("logNepe");
let number7 = $get("7");
let number8 = $get("8");
let number9 = $get("9");
let devide = $get("devide");

let PI = $get("PI");
let cosine = $get("cosine");
let log10 = $get("log10");
let number4 = $get("4");
let number5 = $get("5");
let number6 = $get("6");
let multiply = $get("multiply");

let numberE = $get("numberE");
let tangent = $get("tangent");
let root = $get("root");
let number1 = $get("1");
let number2 = $get("2");
let number3 = $get("3");
let minus = $get("minus");

let answer = $get("answer");
let EXP = $get("EXP");
let power = $get("power");
let number0 = $get("0");
let dot = $get(".");
let action = $get("=");
let add = $get("add");



radSymbol.addEventListener("click",radSymbolClicked);
degSymbol.addEventListener("click",degSymbolClicked);
factorialSymbol.addEventListener("click",factorialSymbolClicked);
openParenthesisSymbol.addEventListener("click",openParenthesisSymbolClicked);
closeParenthesisSymbol.addEventListener("click",closeParenthesisSymbolClicked);
percentSymbol.addEventListener("click",percentSymbolClicked);
AC.addEventListener("click",ACClicked);
inverse.addEventListener("click",inverseClicked);
sine.addEventListener("click",sineClicked);
logNepe.addEventListener("click",logNepeClicked);
number7.addEventListener("click",number7Clicked);
number8.addEventListener("click",number8Clicked);
number9.addEventListener("click",number9Clicked);
devide.addEventListener("click",devideClicked);
PI.addEventListener("click",PIClicked);
cosine.addEventListener("click",cosineClicked);
log10.addEventListener("click",log10Clicked);
number4.addEventListener("click",number4Clicked);
number5.addEventListener("click",number5Clicked);
number6.addEventListener("click",number6Clicked);
multiply.addEventListener("click",multiplyClicked);
numberE.addEventListener("click",numberEClicked);
tangent.addEventListener("click",tangentClicked);
root.addEventListener("click",rootClicked);
number1.addEventListener("click",number1Clicked);
number2.addEventListener("click",number2Clicked);
number3.addEventListener("click",number3Clicked);
minus.addEventListener("click",minusClicked);

answer.addEventListener("click",answerClicked);
EXP.addEventListener("click",EXPClicked);
power.addEventListener("click",powerClicked);
number0.addEventListener("click",number0Clicked);
dot.addEventListener("click",dotClicked);
action.addEventListener("click",actionClicked);
add.addEventListener("click",addClicked);



