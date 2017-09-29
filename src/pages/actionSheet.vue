<template>
    <div class="demo-div">
      <j-button type="primary" outline @click="handleClick(1)" >点击弹出ActionSheet</j-button>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <j-actionSheet v-model="model1" :data="data" :onClick="handleItemClick" @onCancel="handleCancel">
      </j-actionSheet>
    </div>
</template>

<script>
  export default {
    name: '',

    data() {
      return {
        model1: false,
        data: [
          {key: '1', label: '延迟关闭'},
          {key: '2', label: '立刻关闭'},
          {key: '3', label: '不关闭'}
        ]
      }
    },

    methods: {
      handleClick() {
        this.model1 = true;
      },

      handleItemClick(key) {
        console.info(key);

        if(key === '3') {
          console.info('x1');
          return false;
        } else if (key === '2') {
          console.info('x2');
          return true;
        } else {
          console.info('x3');
          return new Promise((res, rej)=>{
            setTimeout(() => {
              console.info('inner time');
              res();
            }, 2000)
          });
        }
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
    height: 120%;
  }
</style>
