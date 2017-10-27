<template>
    <j-layout>
      <j-button type="primary" outline @click="handleClick1">Alter</j-button>
      <j-button type="primary" outline @click="handleClick3">Alter - 不关闭</j-button>
      <j-button type="primary" outline @click="handleClick4">Alter - 延迟关闭</j-button>

      <j-button type="primary" outline @click="handleClick2">Comfirm</j-button>

      <!--<j-dialog msg="确定逆天而行？" :value="true" :modalHide="false"/>-->
    </j-layout>
</template>

<script>
  export default {
    name: '',

    data() {
      return {}
    },

    methods: {
      handleClick1() {
        this.$alert({
          title: '提示',
          msg: '由于太帅，无法显示！',
          opts: [
            {
              txt: '确定',
              callback: () => {
                 console.info('click')
              }
            }
          ]
        })
      },

      handleClick2() {
        this.$confirm({
          title: '确定？',
          msg: 'oh,好多bug啊！',
          onOk: () => {
            console.info('onOk');
          },
          onCancel: () => {
            console.info('onCancel')
          }
        });
      },

      handleClick3() {
        this.$alert({
          title: '提示',
          msg: '我是不会关闭的！',
          opts: [
            {
              txt: '确定',
              callback: () => {
                console.info('提示2')
                return false;
              }
            }
          ]
        })
      },

      handleClick4() {
        this.$alert({
          title: '提示',
          msg: '延迟2秒关闭！',
          opts: [
            {
              txt: '确定',
              callback: () => {
                console.info('提示3')
                return new Promise((res, rej)=>{
                  setTimeout(()=>{
                    res();
                  }, 2000)
                });
              }
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>
</style>
