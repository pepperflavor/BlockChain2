/*
 Module 2
    비트 코인이 무엇인지, 암호화에 대한 전반적인 내용
    어떤 프로토콜이 존재하는지, 비트코인이 왜 프로토콜인지
    코인과 토큰의 차이점이 무엇인지
    온라인에서 고아 블록이 무엇인지

    51% 의 공격이 무엇인지, 왜 위험한지
*/

/*
    1. 비트코인(BITcoin)이란 무엇인가?
    - 암호화폐의 세계에는 중요한 3가지가 있다.
        1층. 기술 - 블록체인

        2층. 프로토콜과 코인 - 비트코인(화폐가 아닌 프로토콜이다)
            +) 프로토콜이란? 네트워크의 참가자가 서로 소통하는 일련의 규칙으로 TCP, IP, HTTP가 그 예이다.
                프로토콜은 공개키와 서명이 어떻게 인증에 사용되어야 하는지 명령해준다
            
            +) 프로토콜 종류
            IP 프로토콜 : 인터넷 프로토콜로 모두 인터넷에 참여할 수 있도록 해준다
            HTTP : 하이퍼 텍스트 전송 프로토콜, 브라우저가 웹사이트를 올바르게 표시하도록한다.

            Bitcoin : 네트워크 참가자들의 소통방법과 어떤것에 대해 어떻게 합의할 것인가에 관한 일련의 규칙인 프로토콜이다.
            Wavws :
            Ethereum :
            Neo :
            Ripple : 
            등등 아주 많다 모두 동일한 기술을 사용하며, 그 기술은 블록체인이다.


        프로토콜은 프로토콜 안에 포함된다. 이 특성을 코인이라고 부르며 각 프로토콜은 각각의 코인을 가진다.
        모든 프로토콜은 코인을 갖고있으며 프로토콜당 코인을 '하나'만 갖고 있다.
            
        3층. 토큰 - ICO는 코인이 아니라 토큰을 지칭하는 말이다 
        두번째 층의 다양한 프로토콜로 구축되는 스마트 계약에 의존한다.
        따라서 이더리움에는 다양한 토큰이 있지만 비트코인에서는 비트코인을 스마트 계약 생성의 개념을 용이하지 않게 해놓았기 때문에
        아무도 토큰을 생성하지 않고 생성할 수 없다.

        ex) 코인에 투자했다 == 그 코인에 기반되는 프로토콜에 투자한 것
        거래의 근본적인 요소는 가치의 교환이기 때문에 코인이 두번째 층의 한 부분이다.


        비트코인 생태계

        - Nodes : 노드, 네트워크에서 채굴하지 않는 참여자가 사용하는 장치
        - Miners : 채굴자들, 블록에 트랜잭션을 추가하고 블록을 채굴해 블록체인이 성장하도록 도움을 주는 참여자
        - Large Miners : 대규모 채굴자, 많은장비 또는 장치를 가진 채굴자
        - Mining Pools : 채굴자들이 함께 모여 채굴작업을 하는 것


        2. 비트코인의 통화정책
        - 크게 두가지가 있다.
            1. 반감기(The Halving) : 시스템에 출시되는 블록에 포함된 코인의 수가 4년마다 반으로 줄어든다.
                                    정확하게는 210,000블록에 도달할 때마다 줄어든다.
                                    각 블록의 비트코인이 출시되고, 블록이 생성될때마다 비트코인이 출시된다.
                                    디플레이션
            2. 블록빈도

            ============================================================
            채굴 난이도 : crrent target / max target (현재의 채굴 가능 논스 값 / 채굴가능한 최대 논스값)
            
                난이도는 어떻게 조정하는가? 2016 블록(2주 마다) 조정한다. (블록은 통상 10분마다 생성되기 때문에 2주만에 2016개가 생성된다.)
                그럼 난이도는 누가 조정하는가? 비트코인 프로토콜에 코딩되어있는 알고리즘이 자동으로 조정한다. 
                    => 매 2주마다 블록이 채굴되는데 걸리는 시간을 확인한다. 블록채굴시간이 10분을 기준으로 빨라지거나 느려지면 난이도를 조정한다
                +) 선행 제로 18개가 0 
                ex) XXXXX : 0 ~ 99999
                    0XXXX : 0 ~ 9999
                    이렇게 선행 제로를 요청하는 것만으로도 풀크기를 10배 줄일 수 있다. hash는 16진수를 채용하기 때문에 16배 줄일 수 있는 것

                    골든 논스를 구할 확률? 
                        - 각 자리수 마다 16개의 옵션이 있기 때문에 16**자리수 만큼 가짓수가 있음
            채굴 대상 0

            Minig Pool - 해싱파워를 모으는 것. 채굴자들이 이중작업(동일한 블록의 작업증명을 하는 것)을 하지 않도록 충분한 논스 값을 배분해준다.
            하나의 체인에 여러 해싱풀이 생길 수 있으며, 해싱풀에서 골든 논스를 찾으면 해당 채굴 풀이 이기고 블록을 보상으로 나눠갖는다. 나눠갖는 블록의 양은
            기여한 해싱 파워에 기반해 나눠받는다. 채굴풀에 기업형 채굴자도 참여가능하며 채굴풀을 옮겨다닐 수도 있음



            채굴자가 트랜잭션을 선택하는 방법 

            
            1. 채굴자는 필드에 들어가는 트랜잭션 리스트를 어떻게 채울까?
            채굴자는 논스 외에는 어떤것도 변경할 수 없다
            트랜잭션은 모든 노드와 모든 채굴자에 연결되어있는 MEMPOOL에서 발생한다. 
            멤풀에 담겨있는 트랜잭션들은 블록내부에 포함되기 전에 저장되는 미확인 트랜잭션이다. 그리고 채굴자 및 모든 노드들이 
            트랜잭션 리스트가 있는 맴풀에 연결되어해 블록에 입력할 것이다.

            만약 강력한 해싱 파워가 있는 채굴자가 1초가 지나기 전에 전체 논스를 해싱하면? => 남는 잉여로 블록의 구성을 변경한다!

            강력한 해싱파워로 높은 트랜잭션 수수료 순으로 고른 트랜잭션들을 해싱하고 나서도 유효한 해시값을 찾지 못했다면 어차피 구성을 바꿔야 한다.
            그렇기 때문에 블록에 골라 넣은 트랜잭션중 가장 낮은 비용의 트랜잭션을 제외하고 멤풀에 남은 트랜잭션중 수수료가 가장 높은 것을 골라 블록에 넣는다
            그렇게 되면 블록의 구성이 변경 됐기 때문에 블록의 내부 데이터가 변경되었고 따라서!!!!  해시 값도 달라질 것!
            타임스탬프의 시간이 끝나기 전까지, 그리고 시간내에 유효한 해시값을 찾을 때까지 이 과정을 반복한다.
            
            해싱풀에 참가해 해싱파워를 채굴 풀에 보내면 작업해야 할 올바른 트랜잭션에 할당한다. 즉 수조의 트랜잭션을 채굴자가 위의 방법처럼
            작업하는 것이 아닌 할당받은 범위내에서 트랜잭션을 처리하면 되기때문. 그리고 알고리즘이 트랜잭션을 어떻게 할당할지 알고 있다.
            어떻게 하면 수수료를 최대로, 효율적으로 조합할지 이미 들어있음. 그렇기 때문에 누군가는 골든 논스나 유효해시를 찾게 된다.

            타임스탬프는 매초 업데이트 된다. 그리고 루프홀을 생성한다.
            문제에 대한 솔루션을 생성한다는 뜻인데 블록의 정보고 1초마다 업데이트 된다는 뜻이 된다.
            그렇게 되면 쇄도효과에 의해 논스를 수정하지 않아도 해싱하면 해당블록의 Hash값이 달라진다.

            위의 말은 논스의 범위를 거칠 시간이 1초가 있다는 뜻이 된다.
            1초 안에 유효한 해시값을 얻을 수 도 못얻을 수 도 있음


            2. 

*/

/*
    채굴에 사용되는 하드웨어 종류
*/

/*
    멤풀의 작동원리
    분산 P2P 네트워크에서 멤풀이 어떻게 작동되는지

    - 노드 - 네트워크 참여자(단순히 거래하는 사람, 채굴자 등 모두)
    각 참여자에게는 멤풀이 있다. 모두가 하나를 공유하는게 아니라 각자 하나씩 있음 따라서 멤풀은 중앙화 X
    누군가 송금을 하는 등 해당 노드에 트랜잭션이 발생하면, 이 트랜잭션은 채굴자를 포함해 가장 가까운 노드로 네트워크를 통해 브로드 캐스팅 또는 릴레이 된다.
    블록의 크기는 1MB로 제한되어있지만 트랜잭션의 크기에 따라 대략 2000(3000이하인듯 )여개 까지 블록에 담길 수 있다.
    블록이 생성되었을 때 새로 생성된 블록에 포함된 트랜잭션들은 네트워크 참여자들의 멤풀에서 제거된다. 블록이 생성된다는 것은 이과정이 반복되는 것이다.
*/

/*
    고아블록이란?
    - 평균적으로 10분이내에 블록이 생성되는데 더 많은 시간이 걸린 블록을 보면 
    새로 생성된 블록은 생성된 노드을 중심으로 가까운 노드들에 그 정보가 릴레이 된다. 그렇게 퍼지다가
    더 긴체인이 살아남는다. 이과정에서 체인에 연결되지 못한 블록을 고아 블록이라고 한다.
    그렇게 되면 고아블록에 속한 모든 트랜잭션은 다시 멤풀로 돌아가게된다
    만약 자전거를 팔고 블록으로 송금을 받았는데 해당블록이 고아가 된다면 돈은 구매자가 다시 돌려받고 판매자인 나만 아무것도 남지않게 된다. 따라서 해당 내 거래 트랜지션이 담긴 블록 이후에 연결된 블록들의 유효성도 확인해봐야함(이중지출 문제)
        => 해당 트랜잭션의 성공을 판가름하기까지 여섯번의 확인을 거치도록 함

    실제 채굴시간은 중요하지 않다. 해당 블록이 더 긴 체인에 연결되었는지가 더 중요하다.(확산이 더 빠른게 중요함)

    그래서 가상화폐 거래소에는 '임계값' 이라는게 있다. 만약 내가 코인을 구매해도 바로 돈을 송금하지 않고 트랜잭션이 확인과정을 한번
    마쳤더라도 대여섯번의 규정해놓은 횟수만큼 확인과정을 거칠때까지 기다리도록 만들어 놓았다.
*/

/*
    51%의 공격이란?
    - 개별적이거나 특정한 블록을 선택해 조작하기 위한 공격이 아니다.
    어떤 네트워크에 기존의 참여자 노드들(A) 보다 더 많은 수의 노드의 무리(B)가 네트워크에 참여해 체인을 복사한 후
    네트워크로 브로드캐스팅을 하지 않으면서 지속적으로 채굴을 한다면?
    실질적으로 공격을 하지는 않지만 B에 더 많은 참여자가 있으므로 해시율이 높을 것이고 기존의 A보다 동시간대에 더 많은 블록을 채굴하기 때문에 결국 더 긴 체인이 생성된다. 그 다음 더 긴체인이 되었을 때 네트워크를 개방한다면???
    더 긴체인이 디폴트가 되기 때문에 기존의 A가 B에 흡수될 것이다. 그리고 A에서 채굴했던 블록들은 그 안에 담긴 트랜잭션들이 다시 멤풀로 돌아가 유효성을 잃게 될 것이다. 그리고 일정시간이 지나면 트랜잭션들도 멤풀에서 벗어나 각 주인에게 돌아간다(72시간 후, 수수료가 너무 낮거나 다른이유로 어떤 작업의 수행에도 쓰이지 않기 때문)
    해당 블록들이 거래에 쓰였을 경우, 물건은 구매자에게 남지만 암호화폐를 송금했다는 사실이 유효성을 잃게 되는 문제가 발생한다.
    직접적인 불법적인 행위는 없었지만 이런 위험이 있을 수 있다. 


    => 51%의 공격은 지배가능한 계산력을 가진 숨은 참가자 그룹이 나머지 네트워크에 자기 체인 버전을 알리지 안ㄹ고 채굴을 하는 경우이다. 
    공격자는 이중 지출문제를 활용하여 이익을 얻을 수 있다.
*/

/*
    블록 필드의 Bits : 사이즈 X, 숫자로 쓰여있지만 코드임. 이 숫자를 16진수로 바꿔야 한다
    (Decimal to Hex converter 이용 ㄱㄱ)

    Bits -> Hex -> Derive target

    ex) 
    Bits : 392009692
    Bits in Hex : 175D97DC => 17 / 5D97DC  이렇게 나눠서 16진수를 10진수로 변환하기
        17 => (23)이 된다. 23*2가 코드의 자리수가 된다. 그리고 나머지 5D97DC가 코드의 시작부분이 되는데,
        
        +) byte는 8 bits 2진법(0 or 1)으로 표현된 데이터이다. 
        Integer.toString(int값, 16) 메서드를 통해서 byte를 16진수 Hex String으로 변환할 때
        1byte = 8bit 를  int 형으로 형변환 하면
        int는 32bit(=8bit * 4) 라서 메모리 공간이 본래 데이터보다 4배 늘어납니다.
        그래서 본래데이터 앞에 늘어날 메모리 공간인 24bit를 0으로 채우기 하기 위해
        0xff = 255 으로 bit and 연산을 해야 합니다.
        왜냐하면 java는 양수일 때는 늘어난 메모리 공간이 0으로 채워지는데
        하지만 음수인 경우 1로 늘어난 메모리 공간 자리수에 채워지기 때문입니다.
        그래서 강제로 0으로 채우기 위해서 bit and 연산인  & 0xff 을 수행하는 것입니다.

        여튼 그래서 내가 가진Bits 를 위와 같은 과정을 거쳐 코드로 만들면 46자리이고 
        64자리가 필요하기 때문에 선행제로 18개를 붙여준다.
    각 대상은 블록에 저장되고 Bits라는 필드 값으로 저장된다.
    모든 숫자가 4비트를 차지하는 64진수의 코드로 저장하는 대신 줄여서 Bits형태로 저장함

*/

