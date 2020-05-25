<template>
    <div class="home">
        <div class="exhibition-warp" :style="{ height: wrapHeight + 'px' }">
            <el-image class="cursor" src="https://hi-fe-static.cdn.bcebos.com/office-site/data/img/cursor.gif"></el-image>
            <el-image class="exhibition-img" src="https://infoflow.baidu.com/data/img/icon-banner-title.png"></el-image>
            <div class="shade"></div>
            <div class="shade-color"></div>
            <div class="exhibition"></div>
        </div>
        <div class="content-warp">
            <div class="block-wrapper smartmetting">
                <div class="block">
                    <div
                        class="left animation-metting"
                        animation=""
                        data-opacity="1"
                        data-left="0px"
                        style="left: 0px; opacity: 1;"
                        finished="1"
                    >
                        <div class="img-metting"></div>
                    </div>
                    <div class="content-text">
                        <div class="title">
                            智能会议
                        </div>
                        <p>
                            高清音视频会议，支持520方稳定接入，支持屏幕共享
                        </p>
                        <p>
                            外部人员无需下载App即可通过浏览器加入视频会议
                        </p>
                        <p>
                            通过日程了解同事闲忙状态、接收会议提醒，预约会议不再反复沟通
                        </p>
                    </div>
                </div>
            </div>
            <div class="block-wrapper communicate">
                <div class="block">
                    <div class="content-text">
                        <div class="title">
                            高效沟通
                        </div>
                        <p>
                            企业内部搜到即聊，企业群聊绿色围墙
                        </p>
                        <p>
                            27种语言自动翻译，多端消息实时同步
                        </p>
                        <p>
                            网络电话免费畅聊
                        </p>
                        <a href="product-communication.html" target="_self" class="detail">了解更多</a>
                        <ul>
                            <li class="icon-hi">
                                <span class="icon"></span>
                                <span class="text">网络电话</span>
                            </li>
                            <li class="icon-communicate">
                                <span class="icon"></span>
                                <span class="text">企业通讯录</span>
                            </li>
                            <li class="icon-groupchat">
                                <span class="icon"></span>
                                <span class="text">企业群聊</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="right animation-communicate"
                        animation=""
                        data-opacity="1"
                        data-right="0px"
                        finished="1"
                        style="right: 0px; opacity: 1;"
                    >
                        <div class="img-communicate"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-wrapper download" style="background-color:#fff;">
            <div class="block">
                <div class="center">
                    <div class="title">
                        下载如流
                    </div>
                    <ul>
                        <li class="ios">
                            <span class="icon"></span>
                            <span class="text">iPhone</span>
                            <a
                                onclick="_hmt.push(['_trackEvent', '首页', '点击', '下载iPhone客户端'])"
                                href="//itunes.apple.com/cn/app/bai-duhi/id537923517?mt=8"
                                target="_blank"
                                >下载iPhone版</a
                            >
                            <div class="code-intro"></div>
                            <div class="mask-download" style="top: 228px;">
                                <img src="https://hi-fe-static.cdn.bcebos.com/office-site/data/img/QR_code-app.png" alt="" />
                                <div class="download-text">扫描下载如流</div>
                            </div>
                        </li>
                        <li class="android">
                            <span class="icon"></span>
                            <span class="text">Android</span>
                            <a
                                onclick="_hmt.push(['_trackEvent', '首页', '点击', '下载Android客户端'])"
                                href="//mobile.baidu.com/item?pid=178966"
                                >下载Android版</a
                            >
                            <div class="code-intro"></div>
                            <div class="mask-download" style="top: 228px;">
                                <a
                                    onclick="_hmt.push(['_trackEvent', '首页', '点击', '下载Android客户端'])"
                                    href="//mobile.baidu.com/item?pid=178966"
                                    target="_blank"
                                >
                                    <img src="https://hi-fe-static.cdn.bcebos.com/office-site/data/img/QR_code-app.png" alt="" />
                                    <div class="download-text">扫描下载如流</div>
                                </a>
                            </div>
                        </li>
                        <li class="windows" style="background-color: rgb(255, 255, 255);">
                            <a
                                onclick="_hmt.push(['_trackEvent', '首页', '点击', '下载Windows客户端'])"
                                href="https://hi-static.cdn.bcebos.com/hi-official/infoflow_setup.exe"
                                target="_blank"
                                ><img
                                    class="icon-mask"
                                    style="width:48px;height:50px;"
                                    src="https://infoflow.baidu.com/2x/icon-app-download.png"
                                    alt=""
                                />
                                <span class="icon"></span>
                                <span class="text">Windows</span>
                                <div class="download-text">下载Windows版</div>
                            </a>
                        </li>
                        <li class="osx" style="background-color: rgb(255, 255, 255);">
                            <a
                                onclick="_hmt.push(['_trackEvent', '首页', '点击', '下载Mac客户端(通用版)'])"
                                href="https://hi-static.cdn.bcebos.com/hi-official/infoflow_setup.dmg"
                                target="_blank"
                                ><img
                                    class="icon-mask"
                                    style="width:48px;height:50px;"
                                    src="https://infoflow.baidu.com/2x/icon-app-download.png"
                                    alt=""
                                />
                                <span class="icon"></span>
                                <span class="text">Mac</span>
                                <div class="download-text">下载Mac版（macOS 10.10及以上）</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { statisticalData } from '@/api/index.js';

export default {
    data() {
        return {
            wrapHeight: window.innerHeight
        };
    },
    mounted() {
        this.wrapHeight = window.innerHeight;
        // this.slideHandle();
    },
    computed: {
    },
    methods: {
        slideHandle() {
            window.onscroll = function() {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                console.log('滚动距离' + scrollTop);
            };
        }
    }
};
</script>
<style lang="scss" scoped>
@import '@/assets/css/home.scss';
</style>
