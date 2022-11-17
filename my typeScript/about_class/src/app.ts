class Department{
    // private readonly id: string;
    // private name : string;
    static fiscalYear = 2022;
    protected employees : string[] = [];

    constructor(private readonly id: string, public name: string){
    }

    // 인스턴스화 하지 않고 접근할 수 있는 정적 메소드로 만들기 위해 static사용
    static createEmployee(name: string){
        return {name : name}

    }
    
    describe(this : Department){
        console.log(`Department (${this.id}):  +  ${this.name}`);
    }

    addEmployees(employee : string){
        this.employees.push(employee);
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

//===== 상속
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, 'IT'); // 여기에 넣으면 기본 클래스에 전달함
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport(){
        if(this.lastReport){

            return this.lastReport;
        }
        throw new Error('No report found')
    }

    set mostRecentReport(value : string){
        if(!value){
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value);
    }

    constructor(id : string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0]
    }

    addEmployee(name: string){
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports);
    }
}


const accounting = new Department('d1', 'Accounting');

// const accounting = new ITDepartment('d1','Accounting');  // 이 코드도 같은 결과를 보여준다(단, 생성자를 설정하지 않았을때). 상속했기 때문

accounting.describe();
accounting.name = 'NEW NAME';
accounting.addEmployees('Marry');

// 이런식으로 직접 접근해서 데이터를 추가하는 방법도 있지만
// 가급적 사용안하는게 좋다. 협업시 문제가 될 수 있기때문, 
// 그래서 유효성 검사를 추가하거나 private로 선언해 클래스 내에서만 접근가능하도록 만들어줌
// accounting.employees[2] ="Anna"; 
                                                 
accounting.describe();
accounting.printEmployeeInfo();

const accounting_IT = new AccountingDepartment('d2', []);

// 게터 접근하기
// () 괄호 X, 속성에 접근하듯이 써야한다.
console.log(accounting_IT.mostRecentReport);

// 세터 접근하기
// 값에 접근하듯이 사용한다. 이렇게 하면 위의 메소드에 값을 전달한다
accounting_IT.mostRecentReport = '';


accounting_IT.addReport('Something went wrong...');

accounting_IT.printReports();
accounting_IT.printEmployeeInfo();

const it = new ITDepartment('s1', ['Max']);

it.addEmployees('Jerry');


// new 키워드 없이 직접 클래스에서 호출하는 것이기 때문에 클래스를 그룹화 메커니즘으로 사용하는 것이라도 할 수 있다.
const employee1 = Department.createEmployee('Max');
console.log(employee1);
console.log(Department.fiscalYear);

