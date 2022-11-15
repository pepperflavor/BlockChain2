class Department{
    name : string;

    constructor( n: string){
        this.name = n;
    }
    
    describe(){
        console.log('Department : '+ this.name);
        
    }
}

const accounting = new Department('Accounting');

console.log(accounting);

accounting.describe(); // accounting 이 출력된다.

// 그렇다면 다음코드의 출력 결과물은?
const accountingCopy = { describe : accounting.describe };

accountingCopy.describe();

// 결과 => undifine

/*
    컴파일 에러는 발생하지않지만 런타임에서는 에러가 발생한다.
    더미 객체로 생성되었기 때문인데
    왜 ?  accountingCopy 이 객체에 describe 속성값을 부여했기 때문이다

    그리고 describe의 속성값은 
    new Department로 생성한 accounting 객체의 describe를 가리키고 있으면서 () 가 없어서
    함수를 실행하지는 않으므로 함수자체만 전달해준다.

    그리고 
    accountingCopy.describe(); 에서
    describe 함수를 호출해 실행해준다. 
    
    그러나 
    Department class에 정의된 describe 함수의 내용 중 this.name을 참조하지 않는다.
    
    왜냐?
    accountingCopy 라는 객체에는 name이라는 속성이 없는 객체이기 때문이다.

*/

// 클래스에 기반한 인스턴스를 참조하도록 수정한 것
// 타입을 해당 클래스로 지정해줘야한다. 타입스크립트는 this가 무엇으로 참조되어야 하는지 인식하기 때문

class Department_2{
    name : string;

    constructor( n: string){
        this.name = n;
    }
    describe(this : Department_2){
        console.log('Department : '+ this.name);
        
    }
}
// 하지만 이렇게만 쓰면 
/*
    const accountingCopy = { describe : accounting.describe };

    accountingCopy.describe();
    이렇게 외부에서 참조했을 때는 클래스타입의 객체를 참조하지 않기 때문에 오류가 난다. 따라서 더미 매개변수를 추가해 타입안정성을 추가해주어야 한다.
*/

const accountingCopy_2 = { name : 'add-name',describe : accounting.describe };

accountingCopy_2.describe();


