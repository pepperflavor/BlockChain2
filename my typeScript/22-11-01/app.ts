let userInput : unknown;
let userName : string;

userInput = 5;
userInput = 'Max'
//userName = userInput; // unknown 형식은 string에 할당될 수 없다
// 하지만 입력 값에 대해 판단한다음 넣을 수 는 있음
if( typeof userInput === 'string'){
    userName =userInput;
}


// never로 설정해주면 이 함수는 절대로 값을 생성하지 않는다
// 이를 명시함으로 써 코드의 질을 올림, 아무것도 반환하지 않고 throw로 코드를 충돌시키는걸 명시했기 때문
function generateError (message : string, code :number) : never {
    throw{message : message, errorCode : code};
}

const result = generateError('An error occurred!', 500);
console.log(result);
