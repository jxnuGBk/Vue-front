<template>
    <div class="grid-demo">
      <j-row class="row-bg">
        <j-col :span="6" class="demo-col"><div class="grid-bg">span-6</div></j-col>
        <j-col :span="6" class="demo-col"><div class="grid-bg">span-6</div></j-col>
        <j-col :span="6" class="demo-col"><div class="grid-bg">span-6</div></j-col>
        <j-col :span="6" class="demo-col"><div class="grid-bg">span-6</div></j-col>
        <j-col :span="6" class="demo-col"><div class="grid-bg">span-6</div></j-col>
        <j-col :span="6" class="demo-col"><div class="grid-bg">span-6</div></j-col>
        <j-col :span="6" class="demo-col"><div class="grid-bg">span-6</div></j-col>
        <j-col :span="6" class="demo-col"><div class="grid-bg">span-6</div></j-col>
      </j-row>
      <br/>
      <j-row class="row-bg">
        <j-col :span="8"> <div class="grid-bg">span-8</div> </j-col>
        <j-col :span="8" offset="8"> <div class="grid-bg">span-8|offset-8</div> </j-col>
      </j-row>
      <br/>
    <!--  <j-row :gutter="8">
        <j-col :span="8"> <div class="grid-bg">span-8</div> </j-col>
        <j-col :span="8"> <div class="grid-bg">span-8</div> </j-col>
        <j-col :span="8"> <div class="grid-bg">span-8</div> </j-col>
      </j-row>-->
      <br/>
      <j-row type="flex" class="row-bg" justify="start">
        <j-col :span="4"> <div class="grid-bg">span-4</div> </j-col>
        <j-col :span="4"> <div class="grid-bg">span-4</div> </j-col>
        <j-col :span="4"> <div class="grid-bg">span-4</div> </j-col>
      </j-row>
      <br/>
      <j-row type="flex" class="row-bg" justify="end">
        <j-col :span="4"> <div class="grid-bg">span-4</div> </j-col>
        <j-col :span="4"> <div class="grid-bg">span-4</div> </j-col>
        <j-col :span="4"> <div class="grid-bg">span-4</div> </j-col>
      </j-row>
      <br/>
      <j-row type="flex" class="row-bg" justify="center">
        <j-col :span="4"> <div class="grid-bg">span-4</div> </j-col>
        <j-col :span="4"> <div class="grid-bg">span-4</div> </j-col>
        <j-col :span="4"> <div class="grid-bg">span-4</div> </j-col>
      </j-row>
    </div>
</template>

<script>
  export default {
    name: '',

    data() {
      return {}
    },

    methods: {}
  }
</script>

<style scoped>
  .grid-demo{
    font-size: .32rem
  }
  .row-bg{
    background-color: #C9C9C9;
  }
  .col > div {
    background-color: rgba(0,153,229,.7);
    padding: 0.5rem 0;
  }
  .col:nth-child(odd) > div{
    background-color: rgba(0,153,229,1);
  }

</style>
