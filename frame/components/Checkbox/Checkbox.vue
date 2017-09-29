<template>
    <label class="checkbox">
      <input type="checkbox"
             v-model="model"
             :value="label"
             :disabled="disabled"
      />
      <span class="checkbox-icon" :style="iconStyle"></span>
      <span class="checkbox-text" v-if="!$slots.default"></span>
      <span class="checkbox-text" v-else><slot></slot></span>
    </label>
</template>

<script>
  import { findComponentUpward } from '../../utils/util';

  export default {
    name: 'Checkbox',

    props: {
      value: {},
      label: '',
      disabled: {
        type: Boolean,
        default: false
      },
      color: String,
      size: [Number, String]
    },

    data() {
      return {
        currentValue: this.value
      }
    },

    methods: {},

    computed: {
      model: {
        get() {
          if(this.group) {
            return this.group.currentValue;
          } else {
            return this.value
          }
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
        return this.parent? this.parent : (this.parent = findComponentUpward(this, 'CheckboxGroup'));
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
    }

  }
</script>

<style lang="less">
  @import '../../../frame/styles/components/checkbox.less';
</style>
