import Cookies from './cookies'

class RegionCookies  extends Cookies {

  write () {
    this.writeCookie("cklg", "welcome", ".dmm.com", "/")
    this.writeCookie("cklg", "welcome", ".dmm.com", "/netgame/")
    this.writeCookie("cklg", "welcome", ".dmm.com", "/netgame_s/")
    this.writeCookie("cklg", "welcome", ".dmm.com", "/play/")
    this.writeCookie("ckcy", "1", ".dmm.com", "/")
    this.writeCookie("ckcy", "1", ".dmm.com", "/netgame/")
    this.writeCookie("ckcy", "1", ".dmm.com", "/netgame_s/")
    this.writeCookie("ckcy", "1", ".dmm.com", "/play/")
  }

}

export default DMMRegionCookies
