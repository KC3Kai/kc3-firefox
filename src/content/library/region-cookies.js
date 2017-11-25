/**
 * REGION COOKIES
 * Helper that provides ability to write region cookies needed for DMM accessibility
 * Made for KC3 Firefox by dragonjet <jetriconew@gmail.com>
 * November 25, 2017
 */

import Cookie from './cookie'

class RegionCookies {

  static write () {
    // semi-colons prevents errors :3
    (new Cookie).write("cklg", "welcome", ".dmm.com", "/");
    (new Cookie).write("cklg", "welcome", ".dmm.com", "/netgame/");
    (new Cookie).write("cklg", "welcome", ".dmm.com", "/netgame_s/");
    (new Cookie).write("cklg", "welcome", ".dmm.com", "/play/");
    (new Cookie).write("ckcy", "1", ".dmm.com", "/");
    (new Cookie).write("ckcy", "1", ".dmm.com", "/netgame/");
    (new Cookie).write("ckcy", "1", ".dmm.com", "/netgame_s/");
    (new Cookie).write("ckcy", "1", ".dmm.com", "/play/");
  }

}

export default RegionCookies
