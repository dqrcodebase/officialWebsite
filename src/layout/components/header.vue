<template>
    <el-header :class="{ 'header-style': headerStyle }">
        <el-image style="width: 84px; height: 68px;" :src="require('@/assets/images/logo.png')"></el-image>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router="true">
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/product">产品</el-menu-item>
            <!-- <el-menu-item index="3">下载</el-menu-item> -->
             <el-menu-item index="/distribution">分布</el-menu-item>
        </el-menu>
    </el-header>
</template>
<script>
export default {
    name: 'vheader',
    data() {
        return {
            activeIndex: '1',
            wrapHeight: window.innerHeight,
            headerStyle: false,
            logoUrl: '~@/assets/images/logo.png',
            presentRoute: ''
        };
    },
    created() {
      this.presentRoute = this.$route.path
        this.bus.$on('message', res => {
            this.headerStyle = res.headerStyle;
            this.logoUrl = res.logoUrl;
        });
    },
    methods: {
       
    }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/header.scss';
</style>
