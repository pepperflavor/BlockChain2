/* 
    - Flask란
    Micro : 가벼운 기능 만 제공, 가볍게 배우고, 가볍게 사용 할 수 있으며, 확장성 또한 넓다!
    Framework : 라이브러리 그 이상의 의미로, 어플리케이션의 핵심이 되는 기술이라고 보면 된다!

        장점으로는 뭘 꼽을 수 있을까요?
    가볍게 배울 수 있다! (Python, HTML + CSS + Javascript만 할 줄 알면 금방 배운다!)
    가볍게 사용 할 수 있다! (코드 몇 줄이면 금방 만든다!)
    가볍게 배포 할 수 있다! (virtualenv에 Flask 깔고 바로 배포 하면 됨!)



    단점으로는 뭘 꼽을 수 있을까요?
    Django 에 비해서 자유도는 높으나, 제공해 주는 기능이 덜 하다.
    복잡한 어플리케이션을 만들려고 할 때 해야 할 것들이 많다.


    사용방법
        Python 인터프리터가 설치 된 상태, 혹은 가상 환경을 사용 할 시 Virtualenv가 활성 화 된 상태에서
        =========================================
            pip install flask
        =========================================

        실행해볼 수 있는 예시 코드

        from flask import Flask
        app = Flask(__name__)  # Flask 객체 생성
        
        @app.route('/')
        def index():
            return '<h1>Hello World!</h1>'
        
        if __name__ == "__main__":  # 모듈이 실행 됨을 알림
            app.run(debug=True, port=5000)  # 서버 실행, 파라미터로 debug 여부, port 설정 가능
cs

*/