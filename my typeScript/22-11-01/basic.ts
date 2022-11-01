function add(n1 :number, n2 : number, showResult : boolean, pharse : string){
    const result= n1 + n2
    if(showResult){
        console.log(pharse + result); // 숫자형과 문자열을 결합해서 resultPharse + 52.8이 출력된다
    }else{
        return n1 + n2;
    }
}


const num1 = 5;
const num2 = 2.8;
let printResult = true;
const resultPharse = 'Result is : '

add(num1, num2, printResult, resultPharse);
