// typeScript에서의 객체

// const person : {
//     name : string;
//     age : number;
// } = {
//     name : 'Sam',
//     age : 30
// }; // 이렇게 선언할 수도 있지만 원래 하던대로 

// 이방법이 더 낫다고한다
// const person2 ={
//     name : 'Jason',
//     age : 30,
//     hobbies : ['Sports', 'Cooking'],
//     role : [2, 'author']
// }



// enum

// 보통 상수를 지정해서 사용하기도함
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum 사용하기
// 이렇게 선언하면 순서대로 0, 1, 2 이렇게 할당 된다
enum Role {ADMIN, READ_ONLY, AUTHOR};

const person2 ={
    name : 'Jason',
    age : 30,
    hobbies : ['Sports', 'Cooking'],
    role : Role.ADMIN
}


let favoriteActivities : string[];
favoriteActivities =['Sports']

console.log(person2.name);


for(const hobby of person2.hobbies){
    console.log(hobby.toUpperCase());
}

if(person2.role === Role.ADMIN){
    console.log('is user grade : ' + person2.role );
    
}