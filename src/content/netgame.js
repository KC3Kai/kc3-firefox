// Apply global styles
import './assets/scss/clean.netgame.scss'
import './assets/scss/playspace.scss'

// Create viewport for KC3 layout
import Playspace from '@content/library/playspace'
new Playspace()
  .create()
  .moveTo()
  .start()
