// 기본타입 boolean, number, string, undefined, null 등이 있다

// 숫자 타입
const num : number = 1;

// 문자 타입
const str : string = 'hi';

// bool 타입
const isbool : boolean = true;

// 배열은 타입 []을 붙여주면된다
const arr : number[] = [1, 2]

// undefined
const undefinedType : undefined = undefined;

// null 타입
const nullType : null = null;

// 객체타입
const obj : {str : string} = {str : "안녕"}
/*  객체 타입은 속성명? :타입 형태로 지정하면 속성은 있어도 되고 없어도 된다 없어도 오류가 없음
*/


// typeScript는 별칭 타입 사용이 사능한데
type blockHeader = {
    version : string,
    height : number
}

// block header라는 사용자가 지정 타입을 만ㄷ르엇고
// 필요할 때마다 재활용이 가능하다

const block : blockHeader ={
    version : '1.0.0',
    height : 0,
}

// tuple(튜플) : typle은 배열을생성할 수 있게 해주는데 특정위체이 특정 타입이 있어야 한다

const tuple : [string, number, boolean] = ['안녕', 100, true]

/*
    any : 타입 제한없다. typeScript의 검사를 비활성화 시킨다고 보면됨
    any는 말 그대로 아무 타입이나 될 수 있음. 그렇다고 남발하면 안된다ㅏ.

    undefined : 이건 undefined의 값만 가질 수 맀다.
*/ 

/*  unkown : 어떤 타입인지 모를 대 아직 변수를 사용하는 경우 데이터를 받아올 건데 미리 타입을 알지 못할때 사용하지만 그냥 사용하면 안되고 unknowm 타입으로 변수를 정의 하면 컴파일러에세 '변수 타입이 unknown이라 어떤 값이든 올 수 있다 엄격하게 검사해라. 라고 경고를 준다'
이게 any와의 차이점
*/


// // 오류코드 예시
// const numUnknown : unknown = "100";

// if( typeof numUnknown === 'string'){
//     console.log(numUnknown.length);
    
// }

/*
    void : 비어있다는 걸 의미 typestript서 함수를 정의 할때 매개변수의 타입과 return값의 타입을 지정해주는 return 값이 없는 함수는 void 타입을 사요ㅕㅇ하고 있다.
*/

/*  function 함수명() : return타입()
    void는 안쓰면 typScript는 그냥 자동으로 void타입을 준다.
    그래서 굳이 안써도 된다
*/

function fun() : void{
    console.log('안녕');
    
}
