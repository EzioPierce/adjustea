// 获取以太坊账户的交易历史记录
async function getAccountTransactionHistory(web3, address) {
  return web3.eth.getTransactionHistory(address);
}

// 根据交易哈希获取交易收据
async function getTransactionReceipt(web3, txHash) {
  return web3.eth.getTransactionReceipt(txHash);
}

// 获取指定地址的以太坊账户信息
async function getAccountInfo(web3, address) {
  return web3.eth.getAccount(address);
}
