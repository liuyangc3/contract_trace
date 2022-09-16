const Web3 = require("web3");
const trace = require("./provider");


const web3 = new Web3("https://bsc-mainnet.nodereal.io/v1/661212fef6a7492899d8fad01785ed10");
(async () => {
    provider = new trace.AsyncHttpProvider(web3.currentProvider);
    const resp = await provider.debug_traceTransaction("0x1192fc77035544344218fbc5bdd4508dcf0febb5c31cccfa05df206ea01d7c3c");
    // dump the transaction VM trace 
    console.log(JSON.stringify(resp.result, null, 2));
})();