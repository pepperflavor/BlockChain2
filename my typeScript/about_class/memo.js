/*
    클래스는 객체를 정의하는 방식
    인스턴스 : 클래스내의 객체
    this : 클래스 내부의 클래스 속성이나 메소드를 참조할 때 쓰는 키워드


    private 로 선언 : 해당 클래스, 즉 생성된 객체 내부에서만 접근가능하다. 상속받는 클래스에서도 사용 불가능하다.

    protected : 상속받는(확장하는) 클래스에서도 접근할 수 있으면서도 외부에서 변경 불가능한 속성으로 만들어준다


    // 이런식으로 처음에 선언따로 초기화따로 안해도된다
    constructor 에서 변수명 앞에 private / public 등 필요한것 선언해주면서 초기화하면됨

    class Department{
        // private id: string;
        // private name : string;
        private employees : string[] = [];

        constructor(private id: string, public name: string){

    }


    ***** 초기화 후 변경되면 안되는 필드에 readonly 선언

    private, public, readonly 같은 설정은 js에는 없고 ts에만 있음
    컴파일된 js 파일을 보면 프로토타입에 메서드들이 추가되고 필드에 대한 선언들은 안보임

    +)
        클래스는 자바스크립트 객체에 대한 청사진이다.
        클래스의 속성이란 클래스의 변수를 의미한다 
        private 는 속성을 "클래스 밖에서 접근할 수 없는 것"으로 규정한다


        class Product {
            title: string;
            price: number;
            private isListed: boolean;
            
            constructor(name: string, pr: number) {
                this.title = name;
                this.price = pr;
                this.isListed = true;
            }
        }


===============> 이렇게 줄일 수 있다

        class Product{
            private isListed: boolean;

            constructor(public title: string, public price: number){
                this.isListed = true;
            }
        }


        상속받은 클래스에 고유 생성자를 추가하지 않는 하위 클래는 부모 클래스의 생성자를 그대로 갖다 쓴다

        하위클래스 constructor에 
        super()를 실행시켜줘야한다
        super() : 부모 클래스의 생성자를 호출한다. 


        ===========================================================

        게터, 세터 : 값을 가지고 올때 함수나 메소드를 실행하는 속성으로 좀더 복잡한 로직을 짤 수 있게해준다 ** 게터에는 반드시 return이 있어야한다

        static : this는 클래스 기반으로 생성된 인스턴스를 참조하는 반면/ 정적속성은 인스턴스에서
            유효하지 않다. 정적 속성과 정적메소드의 전체적인 개념은 인스턴스와 분리되어 있기 때문이다.
            만약 클래스 내부에서 정적속성 메서드에 접근하려면 this가 아니라 [클래스명.정적속성] 이렇게 접근해야한다.


    - 추상클래스 abstract
     추상메서드가 하나라도 있으면 추상 클래스이다.
     자체적으로 인스턴스화 할 수 없는 클래스이다. 상속되어야 하는 클래스이다. 이를 상속받는 클래스들이
     인스턴스화 되고 구체적인 구현을 제공하도록 할 수 있다.


     - 싱글톤 & 개인 생성자
        싱글턴패턴 : 특정 클래스의 인스턴스를 오직 하나만 갖도록 한다. 이 패턴은
            정적 메서드나 속성을 사용할 수 없거나 사용하지 않으려고 하면서 클래스를 기반으로 
            정확히 하나의 객체만 만들고자 할 때 쓴다.
    
*/