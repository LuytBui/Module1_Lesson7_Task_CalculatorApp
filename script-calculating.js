function calculate(){

    console.log('expression: '+expression   );
    try {
        result = eval(formatExpression(expression));
        display(expression + ' = ' + result);
        console.log('result: '+result);
    }    catch (e) {
        display("Error!!!");
        console.log('error occurred');
    }
    finally {
        newTask();
    }

}

function formatExpression(expression) {
    // format string into Javascript expression
    // such as:
    //      2×3×4  --> 2*3*4
    //      π  --> Math.PI
    //      √(100)  --> Math.sqrt(100)

    let result;
    result = expression.replaceAll('×','*');
    result = result.replaceAll('÷','/');
    result = result.replaceAll('%','*0.01');
    result = result.replaceAll('e','Math.E');
    result = result.replaceAll('π','Math.PI');
    result = result.replaceAll('sin','Math.sin');
    result = result.replaceAll('cos','Math.cos');
    result = result.replaceAll('tan','Math.tan');
    result = result.replaceAll('√','Math.sqrt');
    result = result.replaceAll('log','Math.log10');
    result = result.replaceAll('ln','Math.log');
    result = result.replaceAll('radians','');
    result = result.replaceAll('°','*Math.PI/180'); // sin(30°) = sin(30*π/180)

    return result;
}