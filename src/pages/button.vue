<template>
  <div>
    <j-button @click="handleClick">default</j-button>
    <j-button type="primary">primary</j-button>
    <j-button type="waring">waring</j-button>
    <j-button type="danger"><j-icon name="icon-location_light"/>danger</j-button>
    <j-button type="success">waring</j-button>
    <br/>
    <j-button>default</j-button>
    <j-button type="primary" outline> <j-icon name="icon-location_light"/>primary</j-button>
    <j-button type="waring" outline>waring</j-button>
    <j-button type="danger" outline>danger</j-button>
    <j-button type="success" outline>waring</j-button>
    <br/>
    <j-button>default</j-button>
    <j-button type="primary" shape="circle">primary</j-button>
    <j-button type="waring" shape="circle">waring</j-button>
    <j-button type="danger" shape="circle">danger</j-button>
    <j-button type="success" shape="circle">waring</j-button>
    <br/>
    <j-button>default</j-button>
    <j-button type="primary" size="large" shape="circle">primary</j-button>
    <j-button type="waring" size="large" shape="circle">waring</j-button>
    <j-button type="danger" size="large" shape="circle">danger</j-button>
    <j-button disabled size="large" shape="circle">danger</j-button>
    <br/>

  </div>
</template>

<script>
export default{
  name: '',

  data(){
    return{}
  },

  methods: {
    handleClick(){
      console.info('btn-click1');
    }
  }
}
</script>

