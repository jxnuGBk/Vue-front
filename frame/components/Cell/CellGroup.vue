<template>
  <div class="cell-box">
    <div class="cell">
      <div class="cell-title" v-if="title">{{title}}</div>
      <slot></slot>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default{
  name: 'CellGroup',

  props: {
    title: String
  }
}
</script>
<style scoped>
</style>
