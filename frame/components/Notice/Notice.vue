<template>
    <div :class="notice" :style="style" @click="handleClose">
      <div class="notice-title">xx</div>
      <div class="notice-content">
        {{msg}}<slot></slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Notice',

    props: {
      bgColor: String,
      color: String,
      msg: [String, Object],
      onClosed: Function,
      type: {
        validator(value) {
          return ['info', 'warning', 'error', 'success'].indexOf(value) > -1;
        },
        default: 'info'
      }
    },

    data() {
      return {}
    },

    computed: {
      style() {
        const style = {};
        if(this.bgColor) {
          style.backgroundColor = this.bgColor;
        }
        if(this.color) {
          style.color = this.color;
        }
        return style;
      },

      notice() {
        console.info('xxxxxxxxxxxx:', this.type);
        return [
          `notice`,
          {
            [`notice-${this.type}`]: this.type
          }
        ];
      }
    },
    methods: {
      handleClose() {
        this.close && this.close();
      }
    }
  }
</script>

<style lang="less">
  @import '../../styles/components/notice.less';
</style>
