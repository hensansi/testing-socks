const { Client } = require('@elastic/elasticsearch')
const SocksProxyAgent = require('socks-proxy-agent')

const client = new Client({
  node: 'https://myelasticsearch:443',
  agent: () => new SocksProxyAgent('socks5://127.0.0.1:9999')
})

client.search().then(response => {
  console.log(response)
})
