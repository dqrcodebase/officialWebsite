<template>
  <el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1">首页</el-menu-item>
    </el-menu>
  </el-header>
</template>
<script>
export default {
  name: 'vheader',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  }
}
</script>
<style lang="less">
.el-header {
  width: 100%;
  position: fixed;
  justify-content: flex-end;
  .el-menu.el-menu--horizontal {
    display: inline-block;
  }
}
</style>
