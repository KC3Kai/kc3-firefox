<template>
  <div>
    <div class="layoutingBox">
      <MoveableWidget :w="parseInt(this.w)" :h="parseInt(this.h)" :minw="parseInt(this.minw)" :minh="parseInt(this.minh)" :grid="[5,5]" v-on:dragging="moveOngoing" v-on:resizing="moveOngoing">
        <div style="width:100%; height:100%; background:#a5a5a5; box-sizing:border-box; border:1px inset #7c7c7c;"></div>
      </MoveableWidget>
    </div>
    <div class="actualContent" v-show="!isLayouting" v-bind:style="inlineStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  name: 'WidgetBase',
  props: [ 'x', 'y', 'w', 'h', 'minw', 'minh' ],
  data () {
    return {
      isLayouting: false,
      inlineStyle: {
        position: 'absolute',
        overflow: 'hidden',
        'box-sizing': 'border-box',
        background: '#ccf',
        left: this.x,
        top: this.y,
        width: this.w,
        height: this.h
      }
    }
  },
  methods: {
    moveOngoing: function(x, y, w, h) {
      this.inlineStyle.left = x + 'px'
      this.inlineStyle.top = y + 'px'
      if (typeof w != 'undefined') this.inlineStyle.width = w + 'px'
      if (typeof h != 'undefined') this.inlineStyle.height = h + 'px'
    }
  },
  mounted: function () {
    // this.inlineStyle.left = this.x + 'px'
    // this.inlineStyle.top = this.y + 'px'
    // this.inlineStyle.width = this.w + 'px'
    // this.inlineStyle.height = this.h + 'px'
    this.$root.$on('startLayouting', () => {
      this.isLayouting = true
    })
    this.$root.$on('stopLayouting', () => {
      this.isLayouting = false
      this.$forceUpdate()
    })
  },
  components: {
    MoveableWidget: VueDraggableResizable
  }
}
</script>
