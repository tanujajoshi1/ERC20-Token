
//const MetaCoin = artifacts.require("MetaCoin");
const ExampleToken = artifacts.require("ExampleToken");

module.exports = function(deployer) {
  //deployer.deploy(MetaCoin);
  deployer.deploy(ExampleToken);
};
