<template>
  <input type="checkbox" class="switch" :disabled="disabled" v-model="checked"  :style="{color: color}"/>
</template>

<script>
  export default {
    name: 'Switch',

    props: {
      value: Boolean,
      disabled: {
        type: Boolean,
        default: false
      },
      color: String
    },

    data() {
      return {
        checked: this.value
      }
    },

    watch: {
      checked(val) {
        this.$emit('input', val);
      },
      value(val) {
        this.value = val;
      }
    }
  }
</script>


<style lang="less">
  @import '../../../frame/styles/components/switch.less';
</style>
