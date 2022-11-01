var userInput;
var userName;
userInput = 5;
userInput = 'Max';
//userName = userInput; // unknown 형식은 string에 할당될 수 없다
// 하지만 입력 값에 대해 판단한다음 넣을 수 는 있음
if (typeof userInput === 'string') {
    userName = userInput;
}
// never로 설정해주면 이 함수는 절대로 값을 생성하지 않는다
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occurred!', 500);
console.log(result);
