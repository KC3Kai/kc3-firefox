<template>
  <game v-if="this.enabledWidgets.indexOf('game')"></game>
</template>

<script>
import game from './game/game.vue'
export default {
  el: '#kc3viewport',
  data () {
    return {
      layoutingMode: false,
      enabledWidgets: []
    }
  },
  components: {
    game
  },
  mounted: function() {
    window.onkeydown = e => {
      var code = e.keyCode ? e.keyCode : e.which;
      if (code === 76) {
        this.$emit(this.layoutingMode ? 'stopLayouting' : 'startLayouting')
        this.layoutingMode = !this.layoutingMode
      }
    }
  }
}
</script>
