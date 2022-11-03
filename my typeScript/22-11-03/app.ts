const userName = 'Max';

// 기본값 함수 매개변수 할당

// arrow function 화살쵸 함수
// const fnName = (params) => {}
// {}를 생략하면 암묵적으로 return이 앞에 붙는다, 단 표현식이 하나만 있는 경우에 가능
// 파라미터 타입 지정후에 = 등호 다음의 내용은 초기값을 설정해주는 것이다
// const add = (a: number , b: number = 1 ) => a + b; 


// // 매개변수를 하나만 받는 함수
// const printOutput : (a : string | number)=> void = output => console.log(output);

// if(button){
//     button.addEventListener('click', (event) => console.log(event));
// }

// // b의 초기값을 1로 지정해줬기 때문에 여기서 인수를 안넣어줘도 에러가 안뜸
// printOutput(add(5))



// ... spread 연산자
//  Next.Gen js 문법

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies)
// 또는 activeHobbies = ['Hiking', ...hobbies];

const person = {
    name : 'Max',
    age :30
}

const copiedPerson = person; 
//person 객체를 가져오는게 아니라 person 객체의 위치를 가져오는 것이다

// 만약 객체를 복사하고 싶다면
const copiedPerson2 = {...person};

const add = (...numbers : number[])=>{
    // reduce 배열의 모든 요소에 대해 작업한다음 결과들을 반환한다음 모두 합한다
    return numbers.reduce((curResult, curValue)=> {
            return curResult + curValue
        }, 0);
}

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
