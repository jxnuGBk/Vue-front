<template>
    <div :class="clas" :style="styles">
      <slot></slot>
    </div>
</template>

<script>
  import { oneOf } from '../../utils/util';

  export default {
    name: 'Row',
    componentName: 'Row',

    props: {
      gutter: {
        type: Number,
        default: 0
      },
      type: {
        validator (value) {
          return oneOf(value, ['flex']);
        }
      },
      justify: {
        validator (value) {
          return oneOf(value, ['start', 'end', 'center', 'space-around', 'space-between']);
        }
      },
      align: {
        validator (value) {
          return oneOf(value, ['top', 'middle', 'bottom']);
        }
      }
    },

    data() {
      return {}
    },

    methods: {},

    computed: {
      clas() {
        const prefixCls = 'row';
        const classList = [
          {
            [`${prefixCls}`]: !this.type,
            [`${prefixCls}-${this.type}`]: !!this.type,
            [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
            [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
          }
        ];

        return classList;
      },

      styles() {
        const gutter = this.gutter;
        let style = {};
        if (gutter != 0) {
          style = {
            marginLeft: gutter/-2 + 'px',
            marginRight: gutter/-2 + 'px'
          }
        }
        return style;
      }
    }
  }
</script>

<style scoped>
</style>
