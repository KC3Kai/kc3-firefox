
class NetworkFirefox {

  constructor () {
    this.callback = null
  }

  subscribe (urlPattern, callback) {
    this.callback = callback
    browser.webRequest.onBeforeRequest.addListener(NetworkFirefox.listener, {
      urls: [ urlPattern ]
    })
  }

  static listener (details) {
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let decoder = new TextDecoder("utf-8")
    let encoder = new TextEncoder()
    filter.ondata = event => {
      let str = decoder.decode(event.data, {stream: true})
      console.log('DATA', str)
      filter.disconnect()
    }
    return {}
  }

}

export default NetworkFirefox
