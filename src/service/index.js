import GatewayRequests from './gateway/requests'

let RequestListener = new GatewayRequests()
RequestListener.listen()


import NetworkFirefox from './network/firefox.network'
let netListener = new NetworkFirefox()
netListener.subscribe('*://*/kcsapi/*', data => {
  if (data.body.indexOf('svdata=') === 0)
    data.body = data.body.substr(7)
  if (data.body)
    data.body = JSON.parse(data.body)
  console.log(data)
})
