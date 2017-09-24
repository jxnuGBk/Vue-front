<template>
  <button
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
    :style="{backgroundColor: bgcolor, color: color}"
  >
    <slot></slot>
  </button>
</template>

<script>
export default{
  name: 'Button',

  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      validator(value) {
        return ['small', 'large'].indexOf(value) > -1;
      }
    },
    shape: {
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    bgcolor: {
      validator(value) {
        if (!value) return true;
        return value;
      }
    },
    color: {
      validator(value) {
        if (!value) return true;
        return value;
      }
    },
  },

  data(){
    return {
    }
  },

  methods: {
    handleClick(ev) {
      this.$emit('click', ev);
    }
  },

  computed: {
    classes() {
      let clas = `btn ${this.type}`;
      const size = this.size === 'large'? 'full' : '';
      const outline = this.outline? 'outline': '';
      clas = `${clas} ${size} ${this.shape} ${outline}`;
      return clas;
    }
  }
}
</script>
<style lang="less">
  @import '../../styles/components/button.less';
</style>
