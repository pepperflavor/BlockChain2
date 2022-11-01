/*  
    자바스크립트는 오류를 런타임 도중에 알 수 있고 타입스크립트는 컴파일중에 확인이 가능하다



    끝에 !는 이 값이 절대 null이 되지 않는 다는뜻
    +를 붙이면 이 값이 number라는 뜻. string 타입이었어도 +를 붙이면 number로 바꿔준다

    ++++ 컴파일 툴 설치 명령어
    ================================================
        npm install --save-dev lite-server
    ================================================
    설치후 pack.json에 명령어를 추가한다.
    - "start" : "lite-server"

    사용법은
        tsc 파일명.ts 이렇게 해서 해당 파일을 컴파일하면 결과물을
        바로 localhost에서 확인 할 수 있다.
        그리고 주의할점
        ##### app.js app.ts 이렇게 같은 파일을 동시에 열고 작업할시
        컴파일할 때 에러가 날 수 있다. 같은 함수명, 변수명이 한파일에서
        쓰이고 있다고 인식하기 때문 

*/

/*
    타입스크립트에서는 항상 string 또는 number와 같은 타입을 다룹니다.
    중요:  string , number 등이 아니라 String 및 Number 등 입니다.
    타입스크립트의 주요 원시 타입은 모두 소문자입니다!
*/

/*
    js에서 number형은 기본적으로 float형임
    따라서 5 == 5.0 이라는 말이다


    연산을 출력할 때 string과 number가 같이 있으면 모두 string으로 바뀐다
    => 해결 방법 
        1. 숫자 연산의 결과값을 따로 변수에 저장한다. 그리고 그 결과값을 문자열과 함께 출력하도록한다
*/

/*
    typeScript에 객체임을 알려주기

    object 또는 {} 라고 타입선언해주면 된다.

    배열
    -  안에 담길 데이터 형[]
        ex) string[] 이렇게

    - 여러타입의 데이터가 담긴 배열 선언
        ex) any[]
*/

/*              튜플
    Tuple : js에는 없는 데이터 타입, 컴파일 후 js에서는 일반 베열로 인식하지만 타입스크립트에서는 특수 배열을 작성하게 해준다. 배열의 n번째 인덱스에 어떤 데이터타입을 가진 데이터가 입력되어야 하는지 지정해줄 수 있음. 요소를 지정해준 n개만 가지므로 그 이상으로 입력해도 들어가지 않는다 하지만

    +) 단!!!! push를 막거나 에러로 인식하지는 못한다. 
*/

/*     ENUM 이넘
    /이렇게 선언하면 순서대로 0, 1, 2 이렇게 할당 된다
        enum Role {ADMIN, READ_ONLY, AUTHOR};

        컴파일 후 js 파일을 보면

        var Role;
        (function (Role) {
            Role[Role["ADMIN"] = 0] = "ADMIN";
            Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
            Role[Role["AUTHOR"] = 2] = "AUTHOR";
        })(Role || (Role = {}));
        ;
        이렇게 알아서 코드가 되어있다. 오오.....


    +) 만약 시작값이 0이 아니길 원한다면
    enum Role {ADMIN = 5, READ_ONLY, AUTHOR};
        이렇게 시작값을 지정해주면된다. 이후의 값들은 초기값에서 점점 증가한 값으로 할당된다
        또한 각각 값에 할당해줘도 된다.!! 텍스트도 할당 가능

*/


/*
        ANY 타입
        any를 사용한 곳에서는 타입스크립트 컴파일러가 작동하지 않게된다.
        따라서 런타임 검사를 수행하는곳, 어떤 데이터를 받게될지 모르는 곳에 사용함
        그외에는 잘 사용하지 않는다.
*/

/*
        UNION 타입
        입력받을 데이터가 여러 데이터 타입일 수 있는 경우
        ex) const input : number | string  // 이렇게 지정해준다

        그러면 '+' 연산자를 'string | number' 및 'string | number' 형식에 적용할 수 없습니다.
        이런 오류가 뜰 수 있는데 이때 추가적으로 런타임 타입검사 코드를 추가해주면 된다.
*/

/*
        리터럴 타입
        숫자나 문자열도 아니며 정확한 값을 가지는 타입
        ex) const number = 6; // 이런식으로 값이 상수로 지정된것
*/

/*
        알리어스 타입
        사용자가 지정한 타입
        (*js나 타입스크립트에 내장되어있지 않은 이름 Date같은것은 안됨)
        type 타입이름 =  인코딩할 타입;

        타입 별칭을 사용하여 타입을 직접 “생성”할 수 있습니다. 유니온 타입을 저장하는 것만 가능한 것이 아닙니다. 복잡할 수 있는 객체 타입에도 별칭을 붙일 수 있습니다.

            예:

            type User = { name: string; age: number };
            const u1: User = { name: 'Max', age: 30 }; // this works!
            타입 별칭을 사용하면 불필요한 반복을 피하고 타입을 중심에서 관리할 수 있습니다.

            예를 들어, 다음 코드를 아래와 같이 단순화할 수 있습니다.

            function greet(user: { name: string; age: number }) {
            console.log('Hi, I am ' + user.name);
            }
            
            function isOlder(user: { name: string; age: number }, checkAge: number) {
            return checkAge > user.age;
            }
            단순화 후:

            type User = { name: string; age: number };
            
            function greet(user: User) {
            console.log('Hi, I am ' + user.name);
            }
            
            function isOlder(user: User, checkAge: number) {
            return checkAge > user.age;
            }
*/