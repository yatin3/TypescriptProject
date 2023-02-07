var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var ButtonElement = document.querySelector('button');
var numResults = [];
var textResults = [];
function Add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
ButtonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = Add(+num1, +num2);
    numResults.push(result);
    var stringResult = Add(num1, num2);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults);
    console.log(textResults);
});
