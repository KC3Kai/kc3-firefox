const EXPIRE_DAYS = 180

class Cookies {

  constructor (documentRef) {
    // Reference to web page document
    this.document = documentRef || document
    // Determine expiration
    let expireTimeStamp = ((new Date()).getTime()) + (EXPIRE_DAYS*24*60*60*1000)
    this.expireTimeString = (new Date(expireTimeStamp)).toString()
    // Return reference for chaining
    return this
  }

  writeCookie (key, value, domain, path) {
    this.document.cookie = this.buildString(key, value, domain, path)
    return this
  }

  buildString (key, value, domain, path) {
    return key + "=" + value + ";expires=" + this.expireTimeString + ";domain=" + domain + ";path=" + path
  }

}

export default Cookies
