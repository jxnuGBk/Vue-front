<template>
  <label class="cell-item" v-if="type == 'label' || type == 'checkbox' || type == 'radio'">
    <div class="cell-left" v-if="checkLeft">
      <span class="cell-icon"><slot name="icon"></slot></span>
      <slot name="left"></slot>
    </div>
    <label class="cell-right" :class="classes">
      <slot name="right"></slot>
      <i v-if="type == 'checkbox'" class="cell-checkbox-icon"></i>
      <i v-if="type == 'radio'" class="cell-radio-icon"></i>
    </label>
  </label>

  <router-link class="cell-item" :to="href" v-else-if="type == 'link'">
    <div class="cell-left" v-if="checkLeft">
      <span class="cell-icon"><slot name="icon"></slot></span>
      <slot name="left"></slot>
    </div>
    <label class="cell-right" :class="classes">
      <slot name="right"></slot>
      <i v-if="type == 'checkbox'" class="cell-checkbox-icon"></i>
      <i v-if="type == 'radio'" class="cell-radio-icon"></i>
    </label>
  </router-link>

  <a class="cell-item" v-else-if="type == 'a'">
    <div class="cell-left" v-if="checkLeft">
      <span class="cell-icon"><slot name="icon"></slot></span>
      <slot name="left"></slot>
    </div>
    <div class="cell-right" :class="classes">
      <slot name="right"></slot>
    </div>
  </a>


  <div class="cell-item" v-else>
    <div class="cell-left" v-if="checkLeft">
      <span class="cell-icon"><slot name="icon"></slot></span>
      <slot name="left"></slot>
    </div>
    <div class="cell-right" :class="classes">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default{
  name: 'CellItem',

  props: {
    type: {
      type: String,
      validator (value) {
        return ['link', 'a', 'label', 'div', 'checkbox', 'radio'].indexOf(value) > -1;
      },
      default: 'div'
    },

    arrow: {
      type: Boolean,
      default: false
    },

    href: {
      type: String
    }
  },

  data(){
    return {
    }
  },

  computed: {
    checkLeft() {
      return !!this.$slots.left || !!this.$slots.icon;
    },
    classes() {
      return this.arrow ? 'cell-arrow' : '';
    }
  }
}
</script>
<style lang="less">
  @import '../../styles/components/cell.less';
</style>
