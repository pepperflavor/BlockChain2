/*
    __innit__ 에 
    self.nodes = set() : 정렬하기 위해 이렇게 설정


    def replace_chain(self):
        network = self.nodes -> 이 변수는 해당 체인에 속한 노드들의 집합이다.
        longest_chain = None // 채굴자가 잇을 테니 그중 가자ㅓㅇ 긴 체인
        max_length = len(self.chain) // 현재 체인의 길이


    f 문자열
    일반적인 문자열 앞에 f 또는 F 문자를 붙여주면 f-string이 된다.
    {}를 사용하면 표현식 및 변수를 사용할 수 있다. 즉, 함수나 변수 값을 삽입하는 용도로 사용할 수 있다는 말이다!
    +) 객체도 문자열로 출력가능


    GET POST 요청의 차이
    - 응답을 받을 때 무언가를 생성해야 하는지 여부에 달려있다.
    ex) 블록을 찾을때 -> get
        블록을 등록할때 -> post
*/

/*
    #Connecting new nodes
    @app.route('/connect_node', methods = ['POST'])
    def connect_node():                             
    json = request.get_json()                       
    json.get('')
    
    // 인수가 필요없는데 본 블록체인의 변수만이 필요하며 이미 블록체인의


*/