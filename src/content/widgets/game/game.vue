<template>
  <widget x="10" y="50" w="800" h="480" minw="400" minh="240" :r="false">
    <div id="kc3-overlays"></div>
    <div id="kc3-gamebox" ref="gamebox"></div>
  </widget>
</template>

<script>
import WidgetBase from '../widget.vue'
export default {
  data: function () {
    return {

    }
  },
  components: {
    widget: WidgetBase
  },
  mounted: function () {
    this.$refs.gamebox.append(document.getElementById("area-game"))
  }
}
</script>

<style scoped>
#kc3-overlays {

}
#kc3-gamebox {

}
</style>
