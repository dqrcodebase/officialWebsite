<template>
    <div>
        <el-container>
            <v-Header />
            <v-main />
            <!-- <v-footer /> -->
            <el-footer>
                <ul>
                    <li>
                        <a href="https://st0.im.baidu.com/infoflow/platform-agreement.html" target="_blank">服务协议</a>
                    </li>
                    <!-- <li><a href="index.html#case">成功案例</a></li> -->
                    <li class="interval">
                        <a href="help.html">帮助中心</a>
                    </li>
                    <li class="interval">
                        <a href="//zhiqiu.baidu.com" target="_blank">知秋云客服官网</a>
                    </li>
                    <li class="interval">
                        <a href="//cloud.baidu.com/" target="_blank">百度云提供计算服务</a>
                    </li>
                </ul>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
import vHeader from './components/header.vue';
import vMain from './components/main.vue';
import vFooter from './components/footer.vue';
export default {
    components: {
        vHeader,
        vMain,
        vFooter
    }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/footer.scss';
</style>
