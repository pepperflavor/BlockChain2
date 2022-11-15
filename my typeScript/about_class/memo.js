/*
    클래스는 객체를 정의하는 방식
    인스턴스 : 클래스내의 객체
    this : 클래스 내부의 클래스 속성이나 메소드를 참조할 때 쓰는 키워드


    private 로 선언 : 해당 클래스, 즉 생성된 객체 내부에서만 접근가능


    // 이런식으로 처음에 선언따로 초기화따로 안해도된다
    constructor 에서 변수명 앞에 private / public 등 필요한것 선언해주면서 초기화하면됨

    class Department{
        // private id: string;
        // private name : string;
        private employees : string[] = [];

        constructor(private id: string, public name: string){

    }


    ***** 초기화 후 변경되면 안되는 필드에 readonly 선언
*/