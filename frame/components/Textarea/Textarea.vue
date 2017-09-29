<template>
   <div class="textarea">
     <textarea
       v-model="model"
       v-bind="$props"
     ></textarea>
     <div class="textarea-counter" v-if="showCounter && maxlength">{{num}}/{{maxlength}}</div>
   </div>
</template>

<script>
  export default {
    name: 'textarea',

    props: {
      maxlength: {
        validator(val) {
          if (!val) return true;
          return /^(([1-9]\d*)|0)$/.test(val);
        }
      },
      placeholder: {
        type: String
      },
      readonly: {
        type: Boolean,
        default: false
      },
      value: {
        type: String
      },
      showCounter: {
        type: Boolean,
        default: true
      },
      callback: {
        type: Function
      }
    },

    data() {
      return {
        num: 0,
        model: ''
      }
    },

    methods: {},

    watch: {
      model(val){
        this.$emit('input', val);
        if (this.showCounter) this.num = val.length;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../styles/components/textarea.less';
</style>
