import GatewayRequests from './gateway/requests'

let RequestListener = new GatewayRequests()
RequestListener.listen()


import NetworkFirefox from './network/firefox.network'
let netListener = new NetworkFirefox()
netListener.subscribe('*://*/kcsapi/*', data => {
  let responseObj = null
  if (data.body.indexOf('svdata=') === 0)
    data.body = data.body.substr(7)
  if (data.body)
    responseObj = JSON.parse(data.body)
  if (responseObj)
    console.log('DATA', data.request.requestBody.formData, responseObj.api_data)
  else
    console.log('DATA', data.request.requestBody.formData, data.body)
})
