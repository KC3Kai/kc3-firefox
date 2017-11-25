import Vue from 'vue'

import WidgetGame from '@widgets/game/game.vue'

// Vue.component('widget', VueDraggableResizable)


// let gameFrame = new Vue({
//   template: '<div id="gameWidget"></div>',
// })

let viewport = document.createElement('div')
viewport.id = 'kc3viewport'
viewport.style = 'width:100%; background:#ccffcc;'
document.querySelector('body').appendChild(viewport)

let Main = new Vue({
  name: 'main',
  el: '#kc3viewport',
  template: '<game></game>',
  data: {
    name: 'main',
    layoutingMode: false
  },
  components: {
    // widget: VueDraggableResizable,
    game: WidgetGame,
    // game: gameFrame,
  },
  methods: {
    startLayouting: function() {

    },
    stopLayouting: function() {

    }
  },
  mounted: function() {
    window.onkeydown = e => {
      var code = e.keyCode ? e.keyCode : e.which;
      if (code === 76) {
        this.$emit(this.layoutingMode ? 'stopLayouting' : 'startLayouting')
        this.layoutingMode = !this.layoutingMode
      }
    };
  }
})

// viewport.appendChild(document.querySelector('#area-game'))

// document.querySelector('#gameWidget').appendChild(document.querySelector('#area-game'))
// console.log('gameFrame', gameFrame.$el.innerHTML)
