<template>
  <div>
    <div v-bind:style="{ visibility: this.boxMoveableVisibility }">
      <MoveableWidget :w="parseInt(this.w)" :h="parseInt(this.h)" :minw="parseInt(this.minw)" :minh="parseInt(this.minh)" :draggable="this.isDraggable" :resizable="this.isResizable" :grid="[5,5]" v-on:dragging="moveOngoing" v-on:resizing="moveOngoing">
        <div class="box-moveable"></div>
      </MoveableWidget>
    </div>
    <div class="box-content" v-bind:style="{ left, top, width, height, visibility: this.boxContentVisibility }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  props: [ 'x', 'y', 'w', 'h', 'minw', 'minh', 'r', 'd' ],
  data () {
    return {
      isLayouting: false,
      left: this.x,
      top: this.y,
      width: this.w,
      height: this.h,
      isResizable: typeof this.r == 'undefined' ? true : this.r,
      isDraggable: typeof this.d == 'undefined' ? true : this.d
    }
  },
  computed: {
    boxMoveableVisibility: function() { return this.isLayouting ? 'visible' : 'hidden' },
    boxContentVisibility: function() { return this.isLayouting ? 'hidden' : 'visible' }
  },
  methods: {
    moveOngoing: function(x, y, w, h) {
      this.left = x + 'px'
      this.top = y + 'px'
      if (typeof w != 'undefined') this.width = w + 'px'
      if (typeof h != 'undefined') this.height = h + 'px'
    }
  },
  mounted: function () {
    this.$root.$on('startLayouting', () => {
      this.isLayouting = true
      this.$forceUpdate()
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

<style lang="scss" scoped>
.box-moveable {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  box-sizing: border-box;
  border: 1px solid #c0c0c0;
}
.box-content {
  position: absolute;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
