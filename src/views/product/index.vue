<template>
    <div class="content-body" style="margin-top: 60px">
        <div class="content">
            <div class="block-wrapper find">
                <div class="block">
                    <div class="left">
                        <div class="title">协同化工单</div>
                        <p>自定规则流转，灵活权限控制，多源统一处理，</p>
                        <p>操作事件记录</p>
                    </div>
                    <div class="right" animation="" data-opacity="1" data-right="0px">
                        <img src="https://zhiqiu.baidu.com/platform/newimages/products-workorder.png" alt="">
                    </div>
                </div>
            </div>
            <div class="block-wrapper groupchat">
                <div class="block">
                    <div class="left" animation="" data-opacity="1" data-bottom="80px">
                        <img src="https://zhiqiu.baidu.com/platform/newimages/products-robot.png" alt="">
                    </div>
                    <div class="right">
                        <div class="title">智能机器人</div>
                        <p>语义精准解析，多轮情景对话，动态条件答案，</p>
                        <p>智能语音识别,7X24全天服务,人性化聊天库</p>
                    </div>
                </div>
            </div>
            <div class="block-wrapper find">
                <div class="block">
                    <div class="left">
                        <div class="title">自定义扩展</div>
                        <p>自定义渠道，自定义接口，SSO单点登录，移</p>
                        <p>动端SDK</p>
                    </div>
                    <div class="right" animation="" data-opacity="1" data-right="0px">
                        <img src="https://zhiqiu.baidu.com/platform/newimages/products-extend.png" alt="">
                    </div>
                </div>
            </div>
            <div class="block-wrapper groupchat">
                <div class="block">
                    <div class="left" animation="" data-opacity="1" data-bottom="80px">
                        <img src="https://zhiqiu.baidu.com/platform/newimages/products-stat.png" alt="">
                    </div>
                    <div class="right">
                        <div class="title">多维度统计</div>
                        <p>客服实时监控，人工会话统计，工单统计，机器人统计</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts';
export default {
    data() {
        return {};
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            let headerStyle = true;
            this.bus.$emit('message', { headerStyle});
            window.onscroll = null;
            window.scrollTo(0, 0);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/product.scss';
</style>
