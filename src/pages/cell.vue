<template>
  <div style="background-color: #f5f5f5">
    <!--<div class="cell-box">
      <div class="cell">
        <div class="cell-item">
          <div class="cell-left">配送方式</div>
          <div class="cell-right">顺丰快递</div>
        </div>
        <label class="cell-item">
          <div class="cell-left">配送方式</div>
          <div class="cell-right">顺丰快递</div>
        </label>

        <a class="cell-item">
          <div class="cell-left">
            <span class="cell-icon">
              <Icon name="icon-home" size=".42rem"/>
            </span>
            配送方式
          </div>
          <div class="cell-right cell-arrow">
            顺丰快递
            <span class="cell-icon">
              <Icon name="icon-cart" />
            </span>
          </div>
        </a>

        <a class="cell-item">
          <div class="cell-left">
            <span class="cell-icon">
              <img src="http://static.ydcss.com/ydui/img/logo.png">
            </span>
            用户名：
          </div>
          <div class="cell-right cell-arrow">
            <input type="text" />
          </div>
        </a>

        <label class="cell-item">
          <div class="cell-left">选择1</div>
          <label class="cell-right">
            <input slot="right" type="radio" value="1" v-model="model1"/>
            <i class="cell-radio-icon"/>
          </label>
        </label>
        <label class="cell-item">
          <div class="cell-left">选择2</div>
          <label class="cell-right">
            <input slot="right" type="radio" value="2" v-model="model1"/>
            <i class="cell-radio-icon"/>
          </label>
        </label>

        <label class="cell-item">
          <div class="cell-left">选择</div>
          <label class="cell-right">
            <input slot="right" type="checkbox" value="Han MeiMei" v-model="model2"/>
            <i class="cell-checkbox-icon"/>
          </label>
        </label>
      </div>
    </div>-->

    <cell-group title="title">
      <cell-item arrow>
        <span slot="left">
          <Icon name="icon-people" slot="icon" size=".42rem"/>
          用户
        </span>
        <span slot="right">xwj</span>
      </cell-item>
      <cell-item type="radio" >
        <span slot="left">
           选项1
        </span>
        <input type="radio" slot="right" value="1" v-model="model1" />
      </cell-item>
      <cell-item type="radio" >
        <span slot="left">
           选项2
        </span>
        <input type="radio" slot="right" value="2" v-model="model1" />
      </cell-item>
    </cell-group>

    <cell-group title="输入">
      <cell-item>
        <span slot="left">
          <Icon name="icon-people" slot="icon" size=".42rem"/>
          用户信息：
        </span>
        <input type="text" slot="right" />
      </cell-item>
    </cell-group>
  </div>
</template>

<script>
export default{
  name: '',

  data(){
    return {
      model1: '1',
      model2: ''
    }
  }
}
</script>
<style lang="less">
  @import "../../frame/styles/components/cell.less";
</style>
