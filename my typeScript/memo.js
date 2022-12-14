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
        이렇게 알아서 js 코드가 만들어져 있다. 오오.....


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

        any 와 unknown은 다른 것이다
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

/*
        Function 함수형 타입
        ex) let getfn : Function; // 이렇게 함수형으로 선언

        그러나 이렇게 함수형으로 선언만 해놓으면 다른 함수가 덮어 씌워질 수 도있음
        따라서 동작 방식을 세세하게 써줘야함

        ex) 
        let combineValues : (a : number, b : number) => number; // 이렇게 적어주면
        이와 같은 형식의 함수만 담을 수 있음


        !!! 콜백 함수는 자신이 전달되는 인수가 반환 값을 기대하지 않는 경우에도 값을 반환할 수 있습니다.
*/




// 섹션 3 22-11-02일 학습 ES6 문법 스프레드 연산자, 구조분해

/*
            타입스크립트 글로벌 설치
 ==================================================
            npm i typescript -g
 ==================================================

            tsconfig 생성
 ==================================================
            npx tsc --init
 ==================================================
*/

/*
        타입스크립트로 관리해야할 프로젝트임을 알려주는 방법
        ===============================================
            tsc --init
        ===============================================
        
        ** 이 명령어를 실행하면 config 파일이 생성된다. 컴파일 명령어(tsc)를 실행하면 이 프로젝트 내의 모든 ts 파일을 컴파일 하기 때문에 시간이 조금 걸릴 수 있다.
        

        관찰모드 적용
        ===============================================
            tsc -w 또는 tsc --watch  
        ===============================================
        를 실행하면 모든 파일에 관찰 모드가 적용된다. => 변화된 것을 js파일에 알아서 적용시켜주는듯?
        

        ** 컴파일 시키면 안되는 파일 설정하기

        config 파일에 맨밑으로 내려가서 }(여기)} 마지막 중괄호 사이에
        =========================================
            "exclude": [
                "analytics.ts"
            ]
        }
        =========================================
        이렇게 파일명을 등록해 주면된다. 만약 dev.ts 형태의 파일은 모두 컴파일 시키고 싶지않다면
        =========================================
            "exclude": [
                "*.dev.ts"
            ]
        }
        =========================================
        이렇게 *를 앞에 붙이고 파일 형식을 써주면된다.
        보통 node_module 파일이 default로 설정되어있기 때문에 따로 설정해줄 필요는 없다.
        ** 그러나 만약 exclude를 썼다면 node_module도 써줘야한다!!!!



        반대 개념의 include가 있다
        단, 여기에 속하지 않은 파일은 컴파일과정에서 컴파일하지 않는다. 폴더를 설정할 수 도
        파일만 설정할 수 도있다.

        ** "files" :  지정한 개별 파일만 컴파일한다. 작은 프로젝트에서 쓰임      
*/


/*
        compilerOptions : 컴파일 옵션

        target : 컴파일할 언어를 설정함, 이전 버전의 브라우저에 작동하는 코드를 생성할 수 있음
        lib : 설정을 따로 안하면 기본 설정으로 현재 컴파일할 언어에 기본적으로 내장된 설정을 쓸 수 있다.(ex ) 현재 es6를 쓰면 const let Map() 등을 쓸 수 있음)
        allowJs : 타입스크립트가 자바스크립트를 컴파일 할 수 있도록 해준다.
        checkJs : 
        타입스크립트를 사용하지 않거나 바닐라 js와 함께 ts를 쓰면서 함께 검사하고 싶을때 사용, 컴파일하지 않아도 문법 오류 검사를 해준다.

        두 설정을 쓸때 두번 컴파일 하지 않도록 주의

        sourceMAp : true로 설정하면, 개발자 탭에서 js코드 뿐만 아니라 ts코드도 볼 수 있다. 즉, 디버깅을 ts코드에도 할 수 있다는 뜻

        outDir : ts를 컴파일해서 생성한 js코드를 저장시킬 위치를 지정해준다
        rootDir : 입력파일의 위치를 지정해준다
        
        removeComments : ts에 작성한 모든 주석이 컴파일한 js코드에는 지워진채로 만들어진다.
*/

/*
        ** 컴파일 오류시 js코드 생성 중지하기
        noEmitOnError : true - 로 설정하면 오류가 있는 파일을 컴파일하지 않는다. js코드로 내보내지 않는다는뜻

*/

/*
        **** stric 옵션 설정

        stric : true - 모든 stric유형의 검사 옵션을 사용할 수 있다.(따로 개별로 false를 주는게 아니면 모든 옵션을 true로 설정한 것과 같음)

        noImplicitAny : 코드에서 우리가 작업하고 있는 매개변수와 값을 명확히 할 수 있도록 해준다.

        stricNullChecks : true - null 값을 잠재적으로 가질 수 잇는 값에 접근하고 작업하는 방식을 타입스크립트에게 알려준다. ex) 타입스크립트가 html 요소를 검사하지는 않으므로 html 요소를 가르킬때 에러를 반환할 수 있을지 모름, 이 때 이 설정을 하면 dom노드에 포인터를 반환하지 못하면 null을 반환하도록 할 수 있다 

        stricBindCallApply : 결합하고 호출하고 적용하는데 유용하다. bind 사용시 엮은 함수에 필요한 파라미터의 데이터 타입 등을 확인해준다.

        alwaysStrict : Strict 모드를 사용하는 js가 추가되도록 제어함
*/
/*
        코드 품질
        noUnusedParameters : 사용하지 않는 매개변수, 변수 함수들을 걸러줌

        noImplicitReturns : 함수에서 반환하는 경우가 하나라도 있다면 뭐라도 returndmf wnjdigka
*/


// ** 섹션 4 클래스란? class? 22-11-04일 분량

/*

        class의  constructor는 예약어이다. 해당 클래스와 연결되며 객체가 생성되면서
        실행되는 클래스에 기반해 만드는 모든 객체에도 연결되는 함수이다.
        이를 활요해 구축하는 객체에 대한 초기화 작업을 수행할 수 있다.
*/

/*
        |||||||| 중간 퀴즈

        1. 정적 메소드란?
            클래스를 기반으로 생성된 객체가 아니라 클래스에서 직접 호출하는 메소드입니다.
        2. 상속의 개념?
            상속을 사용하면 일부 공통적인 기능을 공유하면서 특수화된 청사진을 생성할 수 있다.
        3. 추상 클래스란 무엇인가?
            인스턴스화 될 수 없고 확장되어야 하는 클래스이다.
        4. 싱글톤 클래스의 개념?
            싱글톤 클래스는 하나의 인스턴스만 생성할 수 있다.
*/