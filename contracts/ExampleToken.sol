pragma solidity >=0.5.0 <0.7.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract ExampleToken is ERC20, ERC20Detailed {
    constructor() public ERC20Detailed("ExampleToken", "$ERC$", 18) {
        _mint(msg.sender, 10000 * (10**uint256(decimals())));
    }
}
