<template>
    <div>
      <div :class="maskClas" @click.stop="handleCancel"></div>
      <div :class="clas">
        <div class="actionsheet-items">
          <slot>
            <div v-for="item in data"
                 :key="item.key"
                 class="actionsheet-item"
                 @click.stop="handleClick(item)"
            >
              {{item.label}}
            </div>
          </slot>
        </div>

        <div v-if="cancel" class="actionsheet-action" @click.stop="handleCancel">取消</div>
      </div>
    </div>
</template>

<script>
  import { isFunction, isPromise, isBoolean, pageScroll, getScrollview, addClass, removeClass } from '../../utils/util';

  export default {
    name: 'ActionSheet',

    props: {
      data: {
        type: Array,
        default: ()=>{return []}
      },

      value: {
        type: Boolean,
        default: false
      },

      cancel: {
        type: Boolean,
        default: true
      },

      onClick: Function
    },

    data() {
      return {
        show: this.value
      }
    },

    methods: {
      handleClick(item) {
        if(this.onClick && isFunction(this.onClick)) {
          const result = this.onClick(item.key);
          if(isPromise(result)) {
            //如果是Promise，则表示异步处理完成，根据reslove还是reject判断是否需要关闭ActionSheet
            result.then(()=>{
              this.close();
            })
          } else if (isBoolean(result)) {
            //如果是布尔类型，false表示不关闭
            if(result) {
              this.close();
            }
          } else {
            this.close();
          }
        }
      },

      handleCancel(e) {
        this.close();
        this.$emit('onCancel', e);
      },

      close() {
        this.show = false;
        this.$emit('input', false);
      }
    },

    computed: {
      maskClas() {
        const prefixCls = 'actionsheet-mask';
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-active`]: !!this.show
          }
        ]
      },

      clas() {
        const prefixCls = 'actionsheet';
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-active`]: !!this.show
          }
        ]
      }
    },

    watch: {
      value(val) {
        if (val) {
          pageScroll.lock(this.$el);
          addClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
        } else {
          pageScroll.unlock(this.$el);
          removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
        }
        this.show = val;
      }
    },
    mounted() {
      this.scrollView = getScrollview(this.$el);
    }

  }
</script>

<style lang="less">
  @import '../../styles/components/actionSheet.less';
</style>

