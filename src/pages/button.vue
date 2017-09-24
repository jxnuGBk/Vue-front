<template>
  <div>
    <!--
    <button class="btn">13123</button>
    <button class="btn primary">13123</button>
    <button class="btn waring">13123</button>
    <button class="btn danger">13123</button>
    <button class="btn" disabled>13123</button>
    <br/>
    <button class="btn outline">13123</button>
    <button class="btn primary outline">13123</button>
    <button class="btn waring outline">13123</button>
    <button class="btn danger outline">13123</button>
    <button class="btn outline" disabled>13123</button>
    <br/>
    <button class="btn full">1212</button>
    <button class="btn full primary">1212</button>
    <button class="btn full waring">1212</button>
    <button class="btn full danger">1212</button>
    <button class="btn full danger circle">1212</button>
    <br/>
    <button class="btn primary circle">13123</button>
    -->
    <Button @click="handleClick">default</Button>
    <Button type="primary">primary</Button>
    <Button type="waring">waring</Button>
    <Button type="danger">danger</Button>
    <br/>
    <Button>default</Button>
    <Button type="primary" outline>primary</Button>
    <Button type="waring" outline>waring</Button>
    <Button type="danger" outline>danger</Button>
    <br/>
    <Button>default</Button>
    <Button type="primary" shape="circle">primary</Button>
    <Button type="waring" shape="circle">waring</Button>
    <Button type="danger" shape="circle">danger</Button>
    <br/>
    <Button>default</Button>
    <Button type="primary" size="large" shape="circle">primary</Button>
    <Button type="waring" size="large" shape="circle">waring</Button>
    <Button type="danger" size="large" shape="circle">danger</Button>
    <Button disabled size="large" shape="circle">danger</Button>
    <br/>
    <Icon name="icon-location_light"/>
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

