<template>
  <i :class="classes" :style="styles"></i>
</template>

<script>
export default{
  name: 'Icon',

  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      validator(value) {
        if (!value) return true;
        return value;
      }
    },
  },

  computed: {
    classes() {
      return 'iconfont ' + this.name
    },

    styles() {
      const style = {};
      if (!!this.size) {
        style.fontSize = this.size;
      }
      if (!!this.color) {
        style.color = this.color;
      }
      return style;
    }
  }
}
</script>
