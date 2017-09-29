<template>
    <div>
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'RadioGroup',
    componentName: 'RadioGroup',

    props: {
      value: '',
      color: String
    },

    data() {
      return {
        currentValue: this.value
      }
    },

    methods: {
      change(val) {
        this.$emit('input', val);
        this.currentValue = val;
      }
    },

    mounted() {
    }
  }
</script>

<style scoped>
</style>
