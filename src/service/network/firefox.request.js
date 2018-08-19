
class FirefoxRequest {

  constructor () {
    this.request = {}
    this.response = {}
    this.body = ''
    this.filter = null
    this.decoder = new TextDecoder("utf-8")
    this.encoder = new TextEncoder()
    this.callback = null
  }

  updateRequest (details) {
    this.request = Object.assign({}, this.request, details)
  }

  updateResponse (details) {
    this.response = Object.assign({}, this.response, details)
  }

  onDone (callback) {
    this.callback = callback
  }

  stream () {
    // Get the stream for this request ID
    this.filter = browser.webRequest.filterResponseData(this.request.requestId);

    // When a chunk of data is received
    this.filter.ondata = event => {
      // Decode the response data
      let responseChunk = this.decoder.decode(event.data, { stream: true })
      // Forward to the browser
      this.filter.write(this.encoder.encode(responseChunk))
      // Append the chunk to the cumulative request body
      this.body += responseChunk
    }

    // When the transfer has stopped
    this.filter.onstop = event => {
      if (this.callback) this.callback({
        request: this.getRequest(),
        response: this.getResponse(),
        body: this.getBody()
      })
      this.filter.disconnect()
    }
  }

  getRequest () {
    return this.request
  }

  getResponse () {
    return this.response
  }

  getBody () {
    return this.body
  }

}

export default FirefoxRequest
