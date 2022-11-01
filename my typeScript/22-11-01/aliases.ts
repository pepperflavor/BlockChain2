// js또는 typescript에 내장되어있지 않은 이름을 사용해야한다

type Comninable = number | string;
type ConversionDescriptor = 'as-number'| 'as-text'

function combine(input1 : Comninable, input2 : Comninable, resultConversion : ConversionDescriptor){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
         result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine( 30, 26, 'as-number');
console.log("combineAges : "+ combineAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log("combinedStringAges : "+ combinedStringAges);

const combineName = combine('Max', 'Anna', 'as-text');
console.log("combineName : "+ combineName);
