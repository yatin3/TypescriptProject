var num1Element = document.getElementById('num1') as HTMLInputElement;
var num2Element = document.getElementById('num2') as HTMLInputElement;
var ButtonElement = document.querySelector('button') !;

const numResults: number[] = [];
const textResults: string[] = [];

type numOrString = number | string;
type result =  {val: number; timestamp: Date };

interface ResultObj {
    val: number;
    timestamp: Date
}

function Add (num1: numOrString , num2: numOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1+num2;
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}

// function printResult(resultObj: result){
//     console.log(resultObj.val);
// }

function printResult(resultObj: ResultObj){
    console.log(resultObj.val);
}

ButtonElement.addEventListener('click',()=>{
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    const result = Add(+num1,+num2);
    numResults.push(result as number);
    const stringResult = Add(num1,num2);
    textResults.push(stringResult as string);
    printResult({ val:result as number, timestamp: new Date()});
    console.log(numResults);
    console.log(textResults);
});
