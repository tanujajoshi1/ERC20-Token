# ERC20-Token
## contact details
```
contact address : 0xD3e49163114582BFB53fA81a79e35181253f9C9b
account : 0x1165bd5F770F78D67718A0f97BbF12cD29e3a300

```
## How to run the smart contract
 ```
 Step 1: Install the packages and dependencies in package.json
 npm i
 
 Step 2: Compile and migrate your smart contract to rinkeby network
 truffle compile --network rinkeby
 truffle migrate --network rinkeby 
 
 Step 3: After successfully deploying your smart contract , open truffle console
 truffle console
 
 Step 4: View the functions of your contract and access them
 let x= await x.ExampleToken.deployed()
 x.<tab>
 x.function_name()
 If you wish to check the total supply in your contract, " x.totalSupply() " , will give you a hex vale which won't be readable. Therefore we use the following command
 x.totalSupply().then(l=> l.toString())
 
 
 
 
 
 
 
