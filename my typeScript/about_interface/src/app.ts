interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

// Person이 객체 형태로 정의 되었기 때문에 user1의 데이터 타입도 객체가 된다.
let user1: Person;

user1 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet('Hi there - I am');
