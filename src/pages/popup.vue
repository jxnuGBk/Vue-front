<template>
  <j-layout>
      <j-button type="primary" outline @click="handleClick(1)" >底部弹出popup</j-button>
      <j-button type="primary" outline @click="model2=true" >顶部弹出popup</j-button>
      <j-button type="primary" outline @click="model3=true" >左侧弹出popup</j-button>
      <j-button type="primary" outline @click="model4=true" >右侧弹出popup</j-button>
      <j-button type="primary" outline @click="model5=true" >中间弹出popup</j-button>
      <j-button type="primary" outline @click="model6=true" >底部弹出页面</j-button>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <j-popup v-model="model1" height="20%">
        <div slot="top" style="height: 30px;line-height: 30px;background-color:#E8E8E8;">top</div>
        <div style="background-color: #fff">
          11111111111111111<br/>
          11111111111111111<br/>
          11111111111111111<br/>
          11111111111111111<br/>
          11111111111111111<br/>
          11111111111111111<br/>
          11111111111111111<br/>
          11111111111111111<br/>
          11111111111111111<br/>
        </div>
        <div slot="bottom" style="height: 30px;line-height: 30px;background-color:#E8E8E8;">bottom</div>
      </j-popup>

      <j-popup v-model="model2" position="top">
        <div slot="top" style="height: 30px;line-height: 30px;background-color:#E8E8E8;">top</div>
        <div style="background-color: #fff">
          2<br/>
          2<br/>
          2<br/>
          2<br/>
          2<br/>
          2<br/>
          2<br/>
          2<br/>
          2<br/>
        </div>
        <div slot="bottom" style="height: 30px;line-height: 30px;background-color:#E8E8E8;">bottom</div>
      </j-popup>


      <j-popup v-model="model3" position="left">
        <div style="background-color: #fff">
          <j-button @click="model3=false">关闭</j-button>
          <br/><br/><br/>
          枯藤老树昏鸦，<br/>
          小桥流水人家，<br/>
          古道西风瘦马。<br/>
          夕阳西下，<br/>
          断肠人在天涯<br/>
        </div>
      </j-popup>



      <j-popup v-model="model4" position="right">
        <div style="background-color: #fff">
          <j-button @click="model4=false">关闭</j-button>
          <br/><br/><br/>
          峰峦如聚，<br/>
          波涛如怒，<br/>
          山河表里潼关路。<br/>
          望西都，意踌躇。<br/>
          伤心秦汉经行处，<br/>
          宫阙万间都做了土。<br/>
          兴，百姓苦；<br/>
          亡，百姓苦。
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          12
          <br/>12<br/>12<br/>12<br/>12<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </j-popup>

      <j-popup v-model="model5" position="center" height="60%" width="90%">
        <div style="background-color: #fff">
          <j-button @click="model5=false">关闭</j-button>
          <br/><br/><br/>
          峰峦如聚，<br/>
          波涛如怒，<br/>
          山河表里潼关路。<br/>
          望西都，意踌躇。<br/>
          伤心秦汉经行处，<br/>
          宫阙万间都做了土。<br/>
          兴，百姓苦；<br/>
          亡，百姓苦。
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          12
          <br/>12<br/>12<br/>12<br/>12<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </j-popup>


      <j-popup v-model="model6" position="bottom" height="100%" width="100%">
        <j-button @click="model6=false">关闭</j-button>
      </j-popup>

  </j-layout>
</template>

<script>
  export default {
    name: '',

    data() {
      return {
        model1: false,
        model2: false,
        model3: false,
        model4: false,
        model5: false,
        model6: false
      }
    },

    methods: {
      handleClick() {
        this.model1 = true;
      },

      handleCancel() {
        console.info('关闭ActionSheet');
      }
    }
  }
</script>

<style scoped>
  .demo-div{
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
