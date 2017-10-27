<template>
    <div class="demo">
      <br/><br/><br/>
      <j-button type="primary" @click="h1" > 弹出通知 </j-button>
    </div>
</template>

<script>
  export default {
    name: '',

    data() {
      return {}
    },

    methods: {
      h1() {
        this.$notice({
         msg: '123123123',
         onClosed: ()=>{
           console.info('closed')
         }
        });
      },

      hc() {
      }
    }
  }
</script>

<style>
  .demo{
    font-size: .3rem;
    padding: .5rem;
  }
  .green{
    background-color: #0f0 !important;
  }
</style>
