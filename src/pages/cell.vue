<template>
  <div style="background-color: #f5f5f5">

    <j-cell-group title="title">
      <j-cell-item arrow>
        <span slot="left">
          <j-icon name="j-icon-people" slot="j-icon" size=".42rem"/>
          用户
        </span>
        <span slot="right">xwj</span>
      </j-cell-item>
      <j-cell-item type="radio" >
        <span slot="left">
           选项1
        </span>
        <input type="radio" slot="right" value="1" v-model="model1" />
      </j-cell-item>
      <j-cell-item type="radio" >
        <span slot="left">
           选项2
        </span>
        <input type="radio" slot="right" value="2" v-model="model1" />
      </j-cell-item>
    </j-cell-group>

    <j-cell-group title="输入">
      <j-cell-item>
        <span slot="left">
          <j-icon name="j-icon-people" slot="j-icon" size=".42rem"/>
          用户信息：
        </span>
        <input type="text" slot="right" />
      </j-cell-item>
      <j-cell-item>
        <j-textarea slot="right" showCounter maxlength="10">

        </j-textarea>
      </j-cell-item>
      <j-cell-item>
        <span slot="left">
          <j-icon name="j-icon-people" slot="j-icon" size=".42rem"/>
          性别：
        </span>
        <select slot="right">
          <option value="1">男</option>
          <option value="0">女</option>
        </select>
      </j-cell-item>
    </j-cell-group>

    <j-cell-group title="多选">
      <j-cell-item type="checkbox">
        <span slot="left">多选一</span>
        <input slot="right" type="checkbox" value="Han MeiMei" v-model="checkedNames"/>
      </j-cell-item>

      <j-cell-item type="checkbox">
        <span slot="left">多选二</span>
        <input slot="right" type="checkbox" value="Li Lei" v-model="checkedNames"/>
      </j-cell-item>

      <j-cell-item type="checkbox">
        <span slot="left">多选三</span>
        <input slot="right" type="checkbox" value="Jim Green" v-model="checkedNames"/>
      </j-cell-item>
    </j-cell-group>
  </div>
</template>

<script>
export default{
  name: '',

  data(){
    return {
      model1: '1',
      model2: '',
      checkedNames: []
    }
  }
}
</script>
<style lang="less">
  @import "../../frame/styles/components/cell.less";
</style>
