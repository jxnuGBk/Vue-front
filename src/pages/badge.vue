<template>
    <div class="demo">
      <j-badge count="123">
        123123
      </j-badge>
      <br/> <br/> <br/>
      <j-badge count="123" className="green"/>
      <br/> <br/> <br/>
      <j-badge count="12" bg-color="#F00" color="#0FF">
        <j-button type="success" outline>按钮</j-button>
      </j-badge>

      <br/> <br/> <br/>
      <j-badge count="0" >
        <j-button type="success" outline>count=0</j-button>
      </j-badge>

      <br/> <br/> <br/>
      <j-badge dot  >
        <j-button type="success" outline>dot</j-button>
      </j-badge>

      <br/> <br/> <br/>
      <j-badge dot  count="0">
        <j-button type="success" outline>dot|count=0</j-button>
      </j-badge>
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

<style>
  .demo{
    font-size: .3rem;
    padding: .5rem;
  }
  .green{
    background-color: #0f0 !important;
  }
</style>
