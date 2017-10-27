<template>
    <div class="modal">
      <div class="modal-title" v-if="title">{{title}}</div>
      <div class="modal-inner">
        <slot><div class="modal-text" v-html="msg"></div></slot>
      </div>
      <div class="modal-bottom">
        <div class="modal-button" v-for="item in opts" @click="handleClick(item)">{{item.txt}}</div>
      </div>
    </div>
</template>

<script>
  import popup from '../../mixins/popup';
  import { addClass, removeClass, isPromise, isBoolean } from '../../utils/util';

  export default {
    name: 'Dialog',

    props: ['msg', 'value', 'title', 'opts'],

    mixins: [popup],

    data() {
      return {
        show: this.value
      }
    },

    methods: {
      handleClick(opt) {
        if(opt.callback) {
          const result = opt.callback();
          if(isPromise(result)) {
            result.then((data)=>{
              this.toClose();
            });
          } else if(isBoolean(result)) {
            if(result) {
              this.toClose();
            }
          } else {
            this.toClose();
          }
        } else {
          this.toClose();
        }
      },

      toClose() {
          this.$el.addEventListener('transitionend', this.destroyElement);
          this.$el.addEventListener('webkitAnimationEnd', this.destroyElement);
          removeClass(this.$el, 'modal-enter');
          addClass(this.$el, 'modal-leave');
      },

      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$el.removeEventListener('webkitAnimationEnd', this.destroyElement);
        this.close();
        this.onClose();
      }
    },

    mounted() {
       addClass(this.$el, 'modal-enter');
    }
  }
</script>

<style lang="less">
  @import '../../styles/components/dialog.less';
</style>

