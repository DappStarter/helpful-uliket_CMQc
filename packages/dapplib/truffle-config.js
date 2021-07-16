require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth stick minor hidden close army gesture'; 
let testAccounts = [
"0xc917510f85ea12787999465312cf535e99f98fccf02564d2e33ce1a3f6423711",
"0x264ed5b62fcc5f9add7b8e32215e91556b174b2a3ce40c030ddb917921d5cb5a",
"0xbc7c900585d5bf022fc8585d98635e6cdaf73977fb06da5a5e24601219921571",
"0xb31a28a2deeeb885a5ff3f61d6d9cd90ee41bdcc56dcc71e402d6db9480a1e82",
"0xc9a69ca326727e3f1b781051196ac7023f0afabe95e45293b3bf8cd6cc53ad3d",
"0xcb6af19ad8c5d9a2d3ac027e0806f674d67095c0df7980d6b01a3b5d13d308d6",
"0x56ce7bf4c801b825cf3f2962c485b229c740ab435a2bfc34b97de2fc8ea86b33",
"0x218acd1cd9d91005e4f6689b6f9f39bd6ca10c1d3e1be5ac00f5038134ecd8e2",
"0xfc22611cc7d36d2c49437d2add6d6d0c7e8fb09739b56befaa009be006849db5",
"0xac55bcd77902d87ffc3e428196202489b164cfd94042b5bb03d4eaa2d604b992"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

