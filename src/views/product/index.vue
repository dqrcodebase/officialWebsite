<template>
    <div class="content-body" style="margin-top:60px">
        <div class="content">
            <div class="block-wrapper find">
                <div class="block">
                    <div class="left">
                        <div class="title">
                            企业通讯录内搜到即聊
                        </div>
                        <p>
                            所有员工信息统一管理，组织清晰
                        </p>
                        <p>
                            搜索同事姓名，搜到即可发起聊天，不用加好友
                        </p>
                    </div>
                    <div class="right" animation="" data-opacity="1" data-right="0px">
                        <div class="img-find"></div>
                    </div>
                </div>
            </div>
            <div class="block-wrapper groupchat">
                <div class="block">
                    <div class="top">
                        <div class="title">
                            企业群聊绿色围墙
                        </div>
                        <p>
                            创建群聊简单便捷，只允许同企业员工加入
                        </p>
                        <p>
                            员工离职会自动踢群，防止内部信息外泄
                        </p>
                    </div>
                    <div class="bottom" animation="" data-opacity="1" data-bottom="80px">
                        <div class="img-groupchat"></div>
                    </div>
                </div>
            </div>
            <div class="block-wrapper msgtranslate">
                <div class="block">
                    <div class="right" animation="" data-opacity="1" data-right="0px">
                        <div class="img-msgtranslate"></div>
                    </div>
                    <div class="left">
                        <div class="title">
                            消息自动翻译
                        </div>
                        <p>
                            基于具备近三十种语言的百度机器翻译技术
                        </p>
                        <p>
                            在即时通讯中实现自动翻译
                        </p>
                    </div>
                </div>
            </div>
            <div class="block-wrapper async">
                <div class="block">
                    <div class="left">
                        <div class="title">
                            多端消息同步
                        </div>
                        <p>
                            支持Windows、Mac、Android、IOS间消息同步
                        </p>
                        <p>
                            消息云端存储，聊天记录随时查看
                        </p>
                    </div>
                    <div class="right" animation="" data-opacity="1" data-right="0px">
                        <div class="img-async"></div>
                    </div>
                </div>
            </div>
            <div class="block-wrapper netphone">
                <div class="block">
                    <div class="left">
                        <div class="title">
                            网络电话
                        </div>
                        <p>
                            高清语音通话，无需付费，随时随地开怀畅聊
                        </p>
                        <p>
                            一键发起电话会议，轻松满足团队沟通需求
                        </p>
                    </div>
                    <div class="right" animation="" data-opacity="1" data-right="0px">
                        <div class="img-netphone"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
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
            let logoUrl = 'https://infoflow.baidu.com/2x/icon-logo-active.png';
            this.bus.$emit('message', { headerStyle, logoUrl });
            window.onscroll = null;
            window.scrollTo(0, 0);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/product.scss';
</style>
