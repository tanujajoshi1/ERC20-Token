var hdwalletprovider = require("truffle-hdwallet-provider");
var mneomonic =
  "across civil adapt pizza pink dial enable lend unknown blue stick cactus";
module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    rinkeby: {
      provider: function() {
        return new hdwalletprovider(mneomonic,
          "https://rinkeby.infura.io/v3/bbdf1b7a0d414235ba5ad9b5fd5ce021"
        );
      },
      network_id: 4
    }
  }

  //}
  //
};
