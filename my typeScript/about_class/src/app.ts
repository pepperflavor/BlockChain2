class Department{
    // private id: string;
    // private name : string;
    private employees : string[] = [];

    constructor(private id: string, public name: string){

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

const accounting = new Department('d1','Accounting');

accounting.describe();
accounting.name = 'NEW NAME';
accounting.addEmployees('Marry');

// 이런식으로 직접 접근해서 데이터를 추가하는 방법도 있지만
// 가급적 사용안하는게 좋다. 협업시 문제가 될 수 있기때문, 
// 그래서 유효성 검사를 추가하거나 private로 선언해 클래스 내에서만 접근가능하도록 만들어줌
// accounting.employees[2] ="Anna"; 
                                                 
accounting.describe();
accounting.printEmployeeInfo();



