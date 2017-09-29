<template>
    <label class="radio">
      <input type="radio"
        :value="label"
        :disabled="disabled"
        v-model="model"
      />
      <span class="radio-icon" :style="iconStyle"></span>
      <span class="radio-text" v-if="!$slots.default">{{value}}</span>
      <span class="radio-text" v-else><slot></slot></span>
    </label>
</template>

<script>
  import emitter from '../../mixins/emitter';
  import { findComponentUpward } from '../../utils/util';
  export default {
    name: 'Radio',

    mixins: [emitter],

    props: {
      value: {},
      label: '',
      disabled: {
        type: Boolean,
        default: false
      },
      color: String,
      size:  [Number, String]
    },

    data() {
      return {}
    },

    computed: {
      model: {
        get() {
          return this.group ? this.group.currentValue : this.value
        },
        set(val) {
          if(this.group) {
            this.group.change(val);
          } else {
            this.$emit('input', val);
          }
        }
      },
      group() {
        return this.parent? this.parent : (this.parent = findComponentUpward(this, 'RadioGroup'));
      },
      iconStyle() {
       let color = this.color || (this.group && this.group.color);
       let size = this.size || (this.group && this.group.size);
       const clas = {}
       if(color) {
         clas.color = color;
       }

       if(size) {
         clas.width = `${size}px`;
         clas.height = `${size}px`;
       }

       return clas;
      }
    },

    methods: {}
  }
</script>

<style lang="less" scoped>
  @import '../../../frame/styles/components/radio.less';
</style>
