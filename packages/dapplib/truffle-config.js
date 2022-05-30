require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note toss upgrade hover process front seat'; 
let testAccounts = [
"0xbb9d51cc838edeb3a3128abce1e19d18d32fcc9be219fe5c570a1f51b52644ba",
"0xe4a959ac8db077b7487e56db0a141d88bd80cfb8783977a60c576b64a67d79a0",
"0x5f57e1ba0e611eb6fe10efffad2c7f0839328e37bdc600081284c698d97cad18",
"0x270694e7edd6e1be43bf537e27bc8c7f389fea28482c01410b994ebdca48b6a4",
"0x3026a718a0c8a7c86205d0c9498123c57a58d77bc7edced42b80436d30eb6194",
"0x05348cbe00ac0609f813e8cdb83c5d42a705f0b8caf862c4d19d86b5e05ec558",
"0x6573643e23f3782b3f06007ffed455b45b45672ad117f087c60517df55c39c30",
"0x2f7dcaf8456e8ccda5d567fde1f87a8363cb627cb963bd1666033979f8120ac4",
"0xb3487208099218540a751efbee9ffdc95c0269ed59dd485c66b6033ee91053d7",
"0xce166b355b4ea0b07f0e375cdc8f910df9c1e1a492c2f1791c42d9f937e05795"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

