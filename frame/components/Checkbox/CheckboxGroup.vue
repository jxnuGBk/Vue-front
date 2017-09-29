<template>
    <div>
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'CheckboxGroup',
    componentName: 'CheckboxGroup',

    props: {
      max: Number,
      min: Number,
      value: Array,
      fluid: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        currentValue: this.value
      }
    },

    methods: {
      change(val){
        const len = val.length;
        const max = this.max;
        const min = this.min;
        const fluid = this.fluid;
        const cval = this.currentValue;

        if( len < min) {
          if(len < cval.length) {
            val = [].concat(cval);
          }
        } else if( len > max && !fluid ) {
          val.splice(len-1, 1);
        } else if( len > max && fluid ) {// 设置了最大值，但是是流体
          val.shift();
        }

        this.currentValue = val;
        this.$emit('input', val);

      }
    }
  }
</script>

<style scoped>
</style>
