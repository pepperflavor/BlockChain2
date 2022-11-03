
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

// 만약 인수의 개수를 정하고 싶다면  : [number, number, number] 이렇게 원하는 갯수만큼 배열로 지정해줌
const add = (...numbers : number[])=>{
    // reduce 배열의 모든 요소에 대해 작업한다음 결과들을 반환한다음 모두 합한다
    return numbers.reduce((curResult, curValue)=> {
            return curResult + curValue
        }, 0);
}

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);


/*
        *** 구조분해하기
        1. 배열
        const hobby1 = hobbies[0];
        const hobby2 = hobbies[1]; 를 다른 방법으로 써보자!
*/ 

/* 오른쪽에 구조분해하려는 배열 왼쪽의 대괄호에는 값을 할당할 변수
*/
// 이렇게 쓰면 hobbies 배열의 첫번째 인덱스에 담긴 값이 hobby1에 할당되고
// 두번째 인덱스의 값이 hobby2에 할당된다
const [hobby1, hobby2] = hobbies;

// 만약 hobbies의 배열에 요소가 2개 이상이라면 추출하고 남은 요소들이
// remainHobbies라는 배열에 새로 담겨서 남는다. 그리고 추출대상이 사라지는 것도 아님
const [copyhobby1, copyhobby2, ...remainHobbies] = hobbies;

/*
    구조분해하기
    2. 객체
*/
const person2 = {
    firstName : 'Jason',
    age :30
}


// person2 에서 firstName의 밸류 값을 추출해 userName라는 키값으로 다시 할당하겠다는 말이다
const { firstName: userName, age} = person2;

console.log(userName, age);
