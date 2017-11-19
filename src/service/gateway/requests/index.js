
class GatewayRequests {

  constructor() {
    // Supported request list
    this.requests = {}

    // Import all requests on this directory
    let context = require.context("./", true, /\/(((?!index).)*)\.js$/)
    context.keys().forEach(key => {
      this.requests[key.split('/')[1].split('.js')[0]] = context(key)
    })

    // Aliases
    this.requests['getConfig'] = this.requests['config.get']
  }

  listen () {
    // Add runtime message listener
    chrome.runtime.onMessage.addListener(this.process.bind(this))
  }

  process (message, sender, callback) {
    // If the message is a request for the KC3 service
    if (message.identifier === 'kc3_service') {
      // If the action requested is supported
      if (this.requests[message.action]) {
        // Execute the action passing the message
        this.requests[message.action](message, callback)
        return true
      }
    }
    return false
  }

}

export default GatewayRequests
