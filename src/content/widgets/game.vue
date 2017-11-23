<template>
  <widget x="10" y="50" w="200" h="300" minw="150" minh="150">
    <h1>GAME VUE</h1>
    game vue content
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
  }
}
</script>
