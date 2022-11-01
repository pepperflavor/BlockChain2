
function add(n1 : number, n2: number){
    return n1 + n2;
}


// // 반환 void 타입 
// function printResult(num : number) : void {
//     console.log('Result: ' + num);
// }


// x타입스크립트는 함수가 undefined를 반환하도록 하지 않음 그래서 에러가떴었는데
// return;문을 써서 값을 반환하지 않는 반환문이 있을 것이라고 여겨서 에러 ㄴㄴ
// 값을 반환하지 않을 때 사용
function printResult(num : number) : void {
    console.log('Result: ' + num);
}

/*
콜백을 여기에 정의하면 밑에 실행문에서 함수내에 callback을 전달하고 타입스크립트가 해당 결과가 number가 될 것이라고 추론할 수 있다.

addAndHandle(10, 20, (result)=>{
    console.log(result);
});
*/ 
function addAndHandle(n1 : number, n2 : number, cb: (num: number)=> void){
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

//let someValue : undefined;

let combineValues : (a : number, b : number) => number; //

combineValues = add;
// combineValues = printResult; => 에러뜸
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result)=>{
    console.log(result);
    // cb에서 return을 void로 했기 때문에 반환하는 동작은 아무것도 하지 않는다
});