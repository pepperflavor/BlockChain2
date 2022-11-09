/*  
    <블록체인이란?>
    블록은
    1. 데이터
    2. 이전 블록의 해쉬값( pre.hash)
    3. 해쉬값
    4. 논스
    으로 이뤄져있다.

    가장 첫번째 블록을 제네시스(GENESIS) 블록이라고 한다. 
    제네시스 블록의 이전 해시값은 없다. 0임

    해쉬란? 사람으로 치면 지문이라고 할 수 있다. 즉 데이터의 지문이다. 
    그렇기 때문에 체인의 중간 블록의 해시값이 바뀌면 그 다음 블록의 이전해시값이 달라지기 때문에
    체인이 끊긴다

    SHA256 : 해시의 길이는 64, 1문자(0~9와 A~F 까지의 문자로 이루어졌다)에 4비트 크기이기 때문에 
    메모리에서 차지하는 크기는 256비트이다. 그래서 이름이 이렇게 지어졌다.


    <해싱알고리즘>

    만족해야하는 조건이 5가지가 있다

    1. 단방향
        데이터 -> 해시 로는 가능하지만 데이터 <- 해시 는 불가능해야한다.
        즉 해시를 바탕으로 문서를 복원하거나 역설계할 수 없어야 한다.

    2. 결정적이어야 한다.
        동일한 데이터를 해싱알고리즘에 적용하면 똑같은 해시값을 얻어야 한다.

    3. 연산이 빨라야한다.

    4. 쇄도 효과
        동일한 문서에 아주 작은 변형을 가했을때, 아주작은 변화여도 해시값이 변화해야한다.

    5. 충돌 저항성
        알고리즘이 인위적인 충돌을 견딜 수 있어야 한다. 만약 해커가 다른 데이터이지만 공격하려는 대상과
        고의로 같은 해시값을 갖게 한다면 문서를 위조할 수 있게 된다. 예를 들어 집소유주에 관한 문서인데
        다른사람의 것이지만 이 집이 내 소유라는 문서를 만들어서 해시값을 같게 조작한다면 그 집의 소유가
        내것이라고 해버릴 수 있다.

    <불변 원장>
    불변원장이란 
        블록체인의 블록은 정보가 추가될때 마다 블록이 추가된다(트랜젝션). 만약 누군가 특정 블록에 접근해
        데이터를 변경하려고 한다면 해시 값이 달라지고 그 블록 이후의 모든 블록들의 chain이 끊긴다.
        그렇기 때문에 데이터가 한번 블록으로 등록되면 수정이 매우 어렵다.


    
    <분산 P2P 네트워크> 
        누군가 오랜 시간을 들여서라도 블록들 해시값을 전부 변경하거나 누군가 입력오류 또는 시스템상의 오류로
        데이터가 불일치 할 경우 발생할 문제를 해결할 수 있다!
        다수의 컴퓨터에 블록체인의 정보가 복사 되는 것이다. 원장의 모든 트랜잭션이 수백 수천개의 컴퓨터에 저장되는 것
        이러한 환경은 당사자들간의 합의가 있기 때문에 모두가 공유하는것이 가능하다

        만약 해커가 일부 네트워크에 접근해 블록들의 정보를 변경하려고 해도 연결되어있는 다른 네트워크의 블록체인 정보와
        비교해 다를 경우 해킹했다는 것을 알 수 있게 해준다. 그리고 그렇게 변경한 정보를 기존의 제대로 된 블록으로
        다시 변경해준다. 따라서 해커는 동시의 모든 네트워크상의 블록을 동시에 해킹해야하며 특정 블록 이후의 블록들까지
        모두 변경해야하기 때문에 사실상 불가능하다고 봐야한다ㅎㅎ


        +) 하나의 블록에 여러 트랜지션을 저장할 수 있다.

    <Minig>
    어떤 블록에 계속해서 무작위 논스값을 대입해 블록체인에 포함될 수 있는 범위의 해시값으로 만드는 것
    찾으면 해당 블록체인에 블록을 추가하고 보상을 받는다. 하지만 논스값이 크다고 해시값이 커지는게 아니고
    작다고 해시값이 작아지는 것이 아니기 때문에 일정한 논리를 찾기 어렵다. 
        ****** 논스값에 해시값이 비례도 반비례도하지 않는다는 뜻
    블록체인에 블록을 추가하기 위한 범위안의 해시값을 찾기위해 채굴하려면 논스값을 계속대입해 연산을 해야한다

    그래서 해싱알고리즘과 쇄도 효과가 중요하다.

        논스(Nonce)
            채굴에서 가장 중요한 필드이며 한번만 쓰인다. 블록번호, 이전해시값을 변경할 수 없고 데이터를 변경하는 것은
            블록의 의미자체를 훼손하는 것이기 때문에 해시값에 변경을 줄 수 있는 요소는 논스밖에없다.
            해시를 제어할 수 는 없지만 논스를 변경함으로써 해시값에 변화를 줄 수는 있다.
    
    
    
    
    <비잔틴 내결합성>

     만약 성을 함락하려는데 네명의 장군이 있다. 이때 공격 / 후퇴 명령 두가지가 있는데 총 사령관이 명령을
     전달하고 한명의 배신자가 있다고하자. 배신자는 전달받은 명령을 반대로 전달한다. 그리고 네 장군이 서로
     전달받은 명령에 대해 모두에게 전달한다. 따라서 장군들은 어떤 명령에 따라야할지 결정할 수 있다.
     직접해보면 알겠지만 결국 다수결에 따른 결정이 결론으로 정해진다.

     이러한 합의 프로토콜이 있어야  내부결합성이 올라 외부로부터 안전을 확보할 수 있다.

     구성원 중에 배신자가 있을 수 있다. 하지만 참여자들이 서로 커뮤니케이션을 하기 때문에 다수결에 의해
     일정한 결정을 할 수 있다.

      합의 프로토콜은 탈중화된 시스템에서 중요한 역할을 한다.



    <합의 프로토콜>
        공격자가 체인의 끝에 블록을 새로 추가하려고 할 때, 멀리 떨어진 노드는 통신에 지연이 발생할 수 있다.
        그리고 또는 두 노드에서 동시에 채굴성공이 발생했을 때가 있을 수 있다. 이런 경우들이 문제가 될 수 있기 때문에
        블록의 증가하는 방법에 관한 합의가 필요하다. 그렇지 않으면 서로 다른 블록체인에 대한 정보를 갖게될 것이다.



        채굴자가 새로 블록을 추가하면 그 보상으로 네트워크나 블록체인이 12.5 비트코인을 보상으로 제공한다.
        그리고 해당 블록을 등록한 채굴자는 해당 블록에 포함된 트랜잭션에 대한 수수료를 받는다.
        채굴에 대한 금전적 인센티브를 주기도 하는데 이는 채굴자가 기각되었던 블록을 추가하거나 암호화 퍼즐을 풀어서
        블록을 추가할 수 도 있기 때문이다. 악의적으로 트랜잭션을 추가하거나 다른 작업을 했다면 보상을 받을 수 없게 하기
        위해서 이다.

        그렇다면 어떻게 부정적인 방법으로 블록을 추가했는지 아는 걸까?
            - 블록이 추가되기 전에 단일 노드에서 일련의 확인을 엄격하게 한다. (이 일련의 과정에 대해 정해져있다)
                이 과정을 모두 통과하지 않으면 기각된다. 

        
        채굴자는 위와 같은 복잡하고 오랜 시간이 걸리는 작업을 해야하는데 
        입증및 확인은 해당 블록의 모든 정보를 해싱알고리즘에 대입하기만 하면된다.


        ---------------------------------------여기까지가 공격에 대한 방어 부분

        작업증명


    가장 유명한 합의 프로토콜 POW(proof - of - Work)
            satoshi Nakamoto 가 논문에서 처음 제안함


*/