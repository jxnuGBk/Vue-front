<template>
    <div :class="clas" >
      <slot></slot>
      <span v-if="dot" :class="dotClasses" v-show="show" :style="styles"></span>
      <span v-else :class="countClasses" v-show="show" :style="styles">{{finalCount}}</span>
    </div>
</template>

<script>
  const prefixCls = 'badge';

  export default {
    name: 'Badge',

    props: {
      count: [Number, String],
      max: {
        type: [Number, String],
        default: 99
      },
      dot: Boolean,
      className: String,
      color: String,
      bgColor: String
    },

    data() {
      return {}
    },

    methods: {},

    computed: {
      clas() {
        return `${prefixCls}`;
      },

      countClasses() {
        return [
          `${prefixCls}-count`,
          {
            [`${this.className}`]: !!this.className,
            [`${prefixCls}-alone`]: !!this.alone,
          }
        ]
      },

      dotClasses() {
        return `${prefixCls}-dot`
      },

      show() {
        let status = false;
        let count = this.count;

        if (count) {
          status = !(parseInt(count) === 0);
        }

        if (this.dot) {
          status = true;
          if (this.count) {
            status = !(parseInt(this.count) === 0);
          }
        }

        return status;
      },

      styles() {
        const color = this.color;
        const bgColor = this.bgColor;
        const style = {};
        if (color) {
          style.color = color;
        }

        if (bgColor) {
          style.backgroundColor = bgColor;
        }

        return style;
      },

      finalCount() {
        const count = parseInt(this.count) || 0;
        const max = parseInt(this.max);
        return count > max ? `${max}+` : count;
      },

      alone() {
        return this.$slots.default === undefined;
      }
    }
  }
</script>

<style lang="less">
  @import '../../styles/components/badge.less';
</style>

