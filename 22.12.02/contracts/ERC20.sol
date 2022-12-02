pragma solidity ^0.8.17;

contract ERC20{
    string public name; // 토큰의 이름
    string public symbol; // 토큰의 단위
    uint public decimals = 18; //소수점자리

    uint public totalSupply;// 총 발행량
    // 객체인데 속성명 address(40자리 문자열 20byte) 속성값 uint, 변수명 balances
    mapping(address => uint) public balances;
    // 객체 안의 객체
    // 속성명 address이고 속성값이 객체인데 속성명 address, 속성값 uint인
    // 객체를 가지고 있는 변수명 allowance
    mapping(address => mapping(address => uint)) public allowance;
    // 표현해보면
    /*
    const allowance = {
        "0xsdagsgsgsdf" :{
            "0xfdsgoisjglsjkdlkjcblsdf" : 100
            "0xfdsgoisjglsjkdlkjcblsdf" : 200
        },
        "0xsdagsgsgsdf" : {
            "3번 계정 주소" : 200
            "4번 계정 주소" : 200
            "5번 계정 주소" : 200
        }
    }
    allowance를 사용하는 이유가 3번 계정이 2번계정에게 200개의 토큰의 권한을 위임하는 것이기 때문
    2번 계정도 3번 계정에게 200의 토큰의 권한을 위임하기 위해서
    2번 계정이 200 토큰 이상이 넘지 않는 선에서 3번계정의 토큰을 다른 사람에게 전송할 수 있다.
    */

    // 잔액을 확인하는 함수
    // external은 오직 다른 곳에서 불러서 사용가능 접근 가능
    // 정의된 컨트랙트 안에서는 사용할 수 없다(여기서는 사용 불가)
    // 이 컨트랙트를 다른 컨트랙트에서 불러서 사용할 것
    function balanceOf(address account) view external returns (uint){
        return balances[account];
    }

    function transfer(address recipient, uint amount) external returns (bool){
        balances[msg.sender] -= amount;
        balances[recipient] += amount;

        // 이 Transfer함수는 이벤트로 만들어 줄 예정
        // 등록한 이벤트 함수 사용
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint amount) external returns(bool){
        allowance[msg.sender][spender] =amount;
        // Approval 이 함수도 이벤트로 만들어 줄 예정
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint amount) external returns (bool){
        // 조건문
        require(allowance[sender][msg.sender] >= amount);
        allowance [sender][msg.sender] -= amount;
        balances[sender] -= amount;
        balances[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;

    // sender 전송하는 토큰의 소유자 계정
    // msg.sender transferForm 함수를 호출한 계정으로 특정 소유자로부터 일정량의 토큰을 위임받은 계정
    }

    /*
        internal : 정의된 컨트랙트 내에서 또는 상속받은 자식 컨트랙스에서만 접근 가능
    */
    function mint(uint amount)internal{
        balances[msg.sender] += amount;
        totalSupply += amount;
        // address(0) from 값이 없기 때문에 null로 넣어준것
        emit Transfer(address(0), msg.sender, amount);
    }

    // transfer 이벤트 등록함수
    event Transfer(address from, address to, uint value);
    event Approval(address owner, address spender, uint value);
}