<template>
    <div :class="clas" :style="styles">
      <slot></slot>
    </div>
</template>

<script>
  import { findComponentUpward } from '../../utils/util';
  export default {
    name: 'Col',

    props: {
      span: [Number, String],
      offset: [Number, String]
    },

    data() {
      return {
        gutter: 0
      }
    },

    methods: {},

    computed: {
      clas() {
        const col = 'col';
        const classList = [
          `${col}`,
          {
            [`${col}-span-${this.span}`]: this.span,
            [`${col}-offset-${this.offset}`]: this.offset
          }
        ];

        return classList;
      },
      styles() {
        let style = {};
        const gutter = this.gutter || this.group.gutter;
        console.info('gutter:', gutter);
        if (gutter !== 0) {
          style = {
            paddingLeft: gutter / 2 + 'px',
            paddingRight: gutter / 2 + 'px'
          };
        }
        return style;
      },

      group() {
        return this.parent ? this.parent : (this.parent = findComponentUpward(this, 'Row'));
      }
    }
  }
</script>

<style lang="less">
  @import '../../styles/components/grid.less';
</style>

