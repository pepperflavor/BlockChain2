const helloWorld = artifacts.require("HelloWorld");

// 테스트 코드 실행 명령어
// npx truffle test
contract("HelloWorld", (account) => {
  console.log(account);

  let hello;
  describe("hello contract", () => {
    it("contract", async () => {
      hello = await helloWorld.deployed();
    });
    it("get value", async () => {
      console.log(await hello.value.call());
    });
    it("set value", async () => {
      await hello.setValue("jinny");
      console.log(await hello.value.call());
    });
  });
});
