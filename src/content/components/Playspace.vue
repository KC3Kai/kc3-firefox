<template>
  <game v-if="this.enabledWidgets.indexOf('game') > -1"></game>
</template>

<script>
import game from '@widgets/game/game.vue'
export default {
  data () {
    return {
      layoutingMode: false,
      enabledWidgets: [
        'game'
      ]
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
