<template>
  <transition name="dialog-fade">
      <div :class="popClas" :style="styles" >
        <div v-if="rendered && !!$slots.top && position != 'center'" ref="top">
          <slot name="top"></slot>
        </div>
        <div class="popup-content" v-if="rendered">
          <div ref="content" >
            <slot></slot>
          </div>
        </div>
        <div v-if="rendered && !!$slots.top && position != 'center'" ref="top" >
          <slot name="bottom"></slot>
        </div>
      </div>
  </transition>
</template>

<script>
  import { oneOf } from '../../utils/util';
  import popup from '../../mixins/popup/index';

  export default {
    name: 'Popup',
    mixins: [popup],
    props: {
      value: {
        type: Boolean,
        default: false
      },
      position: {
        validator(value) {
          return ['bottom', 'center', 'left', 'right', 'top'].indexOf(value) > -1;
        },
        default: 'bottom'
      },
      height: {
        type: String,
        default: 'auto'
      },
      width: {
        type: String,
        default: 'auto'
      }
    },

    data() {
      return {
        show: this.value
      }
    },

    methods: {
    },

    computed: {
      popClas() {
        const prefixCls = 'popup';
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.position}`]: !!this.position,
            [`${prefixCls}-show`]: !!this.show
          }
        ]
      },
      styles() {
        const styles = {};
        if (this.position === 'left' || this.position === 'right' || this.position === 'center') {
          styles.width = this.width;
        }
        if (this.position === 'top' || this.position === 'bottom' || this.position === 'center'){
          styles.height = this.height;
        }
        return styles;
      }
    },

    watch: {
      value(val){
        this.show = val;
      }
    }
  }
</script>

<style lang="less">
  @import '../../styles/components/popup.less';
</style>
