<template>
  <widget x="10" y="50" w="800" h="480" minw="400" minh="240">
    <div ref="gamebox"></div>
  </widget>
</template>

<script>
import WidgetBase from '@src/content/lib/components/widget.vue'
export default {
  name: 'GameVue',
  data () {
    return {
      name: 'GameVue'
    }
  },
  components: {
    widget: WidgetBase
  },
  mounted: function () {
    console.log('widget.vue root', this.$root.name)
    console.log('this.$refs', this.$refs.gamebox)
    this.$refs.gamebox.append(document.getElementById("area-game"))
  }
}
</script>
