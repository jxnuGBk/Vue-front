<template>
    <div>
      <j-radio v-model="radio1" label="1" color="#F00">男</j-radio>
      <j-radio v-model="radio1" label="2" color="#F00">女</j-radio>
      <j-radio v-model="radio1" label="3" color="#F00" size="30">女2</j-radio>
      <br/>
      <j-radioGroup v-model="radio2">
        <j-radio label="1">香蕉</j-radio>
        <j-radio label="2" disabled>苹果</j-radio>
        <j-radio label="3">菠萝</j-radio>
        <j-radio label="4">葡萄</j-radio>
      </j-radioGroup>
      <j-radioGroup v-model="radio3" color="#F96">
        <j-radio label="1">香蕉</j-radio>
        <j-radio label="2">苹果</j-radio>
        <j-radio label="3" color="#F00" >菠萝</j-radio>
        <j-radio label="4">葡萄</j-radio>
      </j-radioGroup>
      <br/>
      <j-checkbox v-model="check1" label="a">吃饭</j-checkbox>
      <j-checkbox v-model="check1" label="b" color="#F00" size="30">睡觉</j-checkbox>
      <j-checkbox v-model="check1" label="c">打豆豆</j-checkbox>
      <br/>
      <j-checkboxGroup v-model="check2" :max="1" :min="1" fluid size="30">
        <j-checkbox label="a">吃饭</j-checkbox>
        <j-checkbox label="b" disabled>睡觉</j-checkbox>
        <j-checkbox label="c">打豆豆</j-checkbox>
        <j-checkbox label="e" color="#F00">打豆豆2</j-checkbox>
        <j-checkbox label="f">打豆豆3</j-checkbox>
      </j-checkboxGroup>
      <br/>
      <j-switch v-model="switch1"/>
    </div>
</template>

<script>
  export default {
    name: '',

    data() {
      return {
        radio1: '1',
        radio2: '2',
        radio3: '3',
        check1: [],
        check2: ['b'],
        switch1: true
      }
    },

    methods: {},

    watch: {
      radio2(v) {
        console.info('radio2:', this.radio2);
      },
      switch1(v) {
        console.info('switch1:', this.switch1);
      }
    }
  }
</script>

<style scoped>

</style>
