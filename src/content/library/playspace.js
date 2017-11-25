/**
 * PLAYSPACE
 * Represents the DOM element to be injected in DMM netgame page to contain layout and widgets
 * Made for KC3 Firefox by dragonjet <jetriconew@gmail.com>
 * November 25, 2017
 */

import Vue from 'vue'
import PlayspaceComponent from '@components/playspace.vue'

const DEFAULT_DOM_ELEMENT_ID = 'kc3_playspace'
const DEFAULT_DOM_PARENT_SELECTOR = 'body'

class Playspace {

  constructor () {
    this.el = null
    this.vue = null
  }

  // Create the DOM element that will serve as the container of all KC3 content
  create (elementId = DEFAULT_DOM_ELEMENT_ID) {
    this.el = document.createElement('div')
    this.el.id = elementId
    return this
  }

  // Move to a DOM element to make it appear on browser
  moveTo (parentSelector = DEFAULT_DOM_PARENT_SELECTOR) {
    if (this.el)
      document.querySelector(parentSelector).appendChild(this.el)
    return this
  }

  // Create the vue app and tie it to the DOM element
  start () {
    PlayspaceComponent.el = '#' + DEFAULT_DOM_ELEMENT_ID
    this.vue = new Vue(PlayspaceComponent)
    return this
  }

}

export default Playspace
