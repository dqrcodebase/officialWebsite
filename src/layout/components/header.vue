<template>
    <el-header :class="{ 'header-style': headerStyle }">
        <el-image style="width: 114px; height: 28px;" :src="logoUrl"></el-image>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">首页</el-menu-item>
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
            logoUrl: 'https://infoflow.baidu.com/2x/icon-logo.png'
        };
    },
    mounted() {
        this.slideHandle();
        this.windowSizeChange();
    },
    methods: {
        slideHandle() {
            window.onscroll = () => {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (this.wrapHeight <= scrollTop) {
                    this.headerStyle = true;
                    this.logoUrl = 'https://infoflow.baidu.com/2x/icon-logo-active.png';
                } else {
                    this.headerStyle = false;
                    this.logoUrl = 'https://infoflow.baidu.com/2x/icon-logo.png';
                }
            };
        },
        windowSizeChange() {
            window.οnresize = () => {
                console.log(3333);
            };
        }
    }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/header.scss';
</style>
