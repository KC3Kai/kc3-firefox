/**
 * COOKIE
 * Class that can be instantiated to be able to write cookies on document
 * Made for KC3 Firefox by dragonjet <jetriconew@gmail.com>
 * November 25, 2017
 */

const DEFAULT_EXPIRE_DAYS = 180
const DEFAULT_DOCUMENT = document

class Cookie {

  constructor (documentRef = DEFAULT_DOCUMENT, expireDays = DEFAULT_EXPIRE_DAYS) {
    // Reference to web page document
    this.document = documentRef
    // Determine expiration
    let expireTimeStamp = ((new Date()).getTime()) + (expireDays*24*60*60*1000)
    this.expireTimeString = (new Date(expireTimeStamp)).toString()
  }

  write (key, value, domain = null, path = null) {
    // Set document.cookie to the built-string
    this.document.cookie = this.buildString(key, value, domain, path)
  }

  buildString (key, value, domain = null, path = null) {
    // Create string based on values
    return [
      key + '=' + value,
      'expires=' + this.expireTimeString,
      domain ? 'domain=' + domain : undefined,
      path ? 'path=' + path : undefined,
    ].join(';')
  }

}

export default Cookie
