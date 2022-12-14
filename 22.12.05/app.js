/*
    전에 만든 ERC20토큰 편하게 만들어보기
    오픈 제플린을 사용해서 토큰의 표준 인터페이스 가져와서 사용할 수 있다.
    ERC20을 우리가 직접 만들어봤는데 직접 만들어서 사용하는게 아니고 
    설치 받아서 편하게 사용해 보자
    표준 규격 있다고 했는데 그렇기 때문에 이미 만들어 놓은걸 가져다가 사용하면 된다


    package.json 만들고
    ============================
        npm init -y
    ============================
    

    오픈 제플린 설치 
    ============================================================
        npm install openzeppelin-solidity
    ============================================================


    트러플 초기화
    ============================================================
        npx truffle init
    ============================================================

    constracts 폴더에 SoonToken.sol, EthSwap.sol 만들고 

    migrations 폴더에 2_deploy_EthSwap.js 만들고 작성


    =======================================--------------------
    npx ganache-cli --chainId 7722 --networkId 7722
    =======================================--------------------
    배포진행
    =======================================--------------------
    npx truffle migration
    =======================================--------------------

    Available Accounts
==================
(0) 0x57653312F32EAc749A698aaC51ec34a3907cFF9F (100 ETH)
(1) 0x5E1774C8012f2CEe2f9b5a7ada3FAaBFE474EDa5 (100 ETH)
(2) 0x67DD9c7F3153B23Fa8DE93380D572004224c91d3 (100 ETH)
(3) 0x2a544502bF7103338c29E729f0Eb6Dc5E6B87c9a (100 ETH)
(4) 0x57b1FAaf64cE1E11f95900adc4D0778302c28232 (100 ETH)
(5) 0x2b751E7e1993aF6116a553bd40F7e4995360Dccd (100 ETH)
(6) 0x514348e37AedEF0862799332152e6dD67545B58A (100 ETH)
(7) 0xE4873AB308833b6EF642b988716Ff0cD13e0082B (100 ETH)
(8) 0x4DBbECBb2a8C442b3C8CDA52B26Fc2fF3bbf5efB (100 ETH)
(9) 0xd61240C2828cb1078649052979cC5Ac463813D51 (100 ETH)

Private Keys
==================
(0) 0xd405d22e312a119473be9208031b22427e5437e86e414964c6533c4a091bf990
(1) 0x79084373b5ba6defea8342a31fd200c22bf1a0615d5279828854387889b13f27
(2) 0x476b418d0e764db2f103ea17ba17c1c3b5166ab34f7933fc0c9505aaa1a40db6
(3) 0x667b447b45ca20f6473c1d51a0a4ef949ad6379a0131f4ef24d57204bd6f5cd4
(4) 0x1cfe0e149307d76cfc9ee6ae64237e5b3cc7e548942745d0976f23267a6caa23
(5) 0x579aa25f4f47c888091b394faa0726c3918440429083a115396f93146ca5b87b
(6) 0x2009b8837375c839eaa2c81e3953b347692e7086259206dc0f3ac31fbd1840ef
(7) 0x9ba9370eefab80d34fbf8f7cbce61e161f5a703e10054b717c5ba8b206c52e28
(8) 0x36d66518e21922e893b48bbb807bdadd6ad4905d53b7d5985f1363fbac36c4db
(9) 0xca6c4a2f989c36528d7267f50359e66bdd9ae5a609a2ae338c9518af66e3cdda

*/