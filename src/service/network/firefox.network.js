
import FirefoxRequest from './firefox.request'

class FirefoxNetwork {

  constructor () {
    this.requests = {}
  }

  subscribe (urlPattern, callback) {
    // onBeforeRequest
    browser.webRequest.onBeforeRequest.addListener(this.onBeforeRequest.bind(this, callback), {
      urls: [ urlPattern ]
    }, [ 'blocking', 'requestBody' ])
    //
    browser.webRequest.onBeforeSendHeaders.addListener(this.onBeforeSendHeaders.bind(this), {
      urls: [ urlPattern ]
    }, [ 'requestHeaders' ])
    // onCompleted
    browser.webRequest.onCompleted.addListener(this.onCompleted.bind(this, callback), {
      urls: [ urlPattern ]
    }, [ 'responseHeaders' ])
  }

  // Before request is sent, add to tracking so we get all data
  onBeforeRequest (callback, details) {
    // console.log('onBeforeRequest', details.requestBody);
    // Track this request for data
    let newRequest = new FirefoxRequest()
    newRequest.updateRequest(details)
    newRequest.onDone(callback)
    newRequest.stream()
    // Add to list for later referece on complete
    this.requests[ details.requestId ] = newRequest
  }

  onBeforeSendHeaders (details) {
    // console.log('onBeforeSendHeaders', details.requestBody);
    // If request is not being tracked, do nothing
    let trackedRequest = this.requests[ details.requestId ]
    if (!trackedRequest) return

    // Update request data, because `onBeforeSendHeaders` contains request headers
    trackedRequest.updateRequest({ requestHeaders: details.requestHeaders })
  }

  // On request complete, return all useful data to callback
  onCompleted (callback, details) {
    // If request is not being tracked, do nothing
    let trackedRequest = this.requests[ details.requestId ]
    if (!trackedRequest) return

    // Update response details
    trackedRequest.updateResponse(details)

    // Build full request data
    /*callback({
      request: trackedRequest.getRequest(),
      response: trackedRequest.getResponse(),
      body: trackedRequest.getBody()
    })*/
    // Remove the request from tracked list
    // delete this.requests[ details.requestId ]
  }

}

export default FirefoxNetwork
