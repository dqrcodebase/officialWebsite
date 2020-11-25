<template>
    <div class="distribution">
        <div id="myChart" :style="{ width: '100%', height: wrapHeight + 'px' }"></div>
    </div>
</template>

<script>
import { atlas } from '@/api/index.js';
import echarts from 'echarts';
import axios from 'axios';
import chinaMap from '@/api/chinaMap.json'
import chinaMapOutline from '@/api/chinaMapOutline.json'
import chinaGeoCoordMap from '@/api/chinaGeoCoordMap.json'
import chinaDatas from '@/api/chinaDatas.json'
export default {
    data() {
        return {
            wrapHeight: window.innerHeight,
            headerStyle: false,
        };
    },
    mounted() {
        this.bus.$emit('message', { headerStyle: this.headerStyle});
        echarts.registerMap('chinaMap', chinaMap);
        echarts.registerMap('chinaMapOutline', chinaMapOutline);
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = chinaGeoCoordMap[dataItem[0].name];
                var toCoord = [121.4648, 31.2891];
                if (fromCoord && toCoord) {
                    res.push([
                        {
                            coord: toCoord
                        },
                        {
                            coord: fromCoord,
                            value: dataItem[0].value
                        }
                    ]);
                }
            }
            return res;
        };
        var series = [
            {
                map: 'chinaMap',
                type: 'map',
                zoom: 1.2,
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                top: '16%',
                tooltip: {
                    show: false
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: 'transparent',
                        borderColor: 'rgba(0,255,255,.1)',
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: 'rgba(0,255,255,.1)',
                        textStyle: {
                            color: 'red'
                        }
                    }
                }
            }
        ];
        [['上海', chinaDatas]].forEach(function (item, i) {
            series.push(
                {
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 3, //箭头指向速度，值越小速度越快
                        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 5 //图标大小
                    },
                    lineStyle: {
                        normal: {
                            width: 1, //尾迹线条宽度
                            opacity: 1, //尾迹线条透明度
                            curveness: 0.3 //尾迹线条曲直度
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 4 //波纹圆环最大限制，值越大波纹越大
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'right', //显示位置
                            offset: [5, 0], //偏移设置
                            formatter: function (params) {
                                //圆环显示文字
                                return params.data.name;
                            },
                            fontSize: 13
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    symbol: 'circle',
                    symbolSize: function (val) {
                        return 5 + val[2] * 5; //圆环大小
                    },
                    itemStyle: {
                        normal: {
                            show: false,
                            color: '#34c6bb'
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[0].name,
                            value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                        };
                    })
                }
            );
        });
        var option = {
            backgroundColor: '#181F4E',
            tooltip: {
                trigger: 'item'
            },
            color: ['#34c6bb'],
            geo: {
                silent: true,
                map: 'chinaMapOutline',
                zoom: 0.8,
                top: '0%',
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },

                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(0,255,255,.02)',
                        borderColor: '#00ffff',
                        borderWidth: 1.5,
                        shadowColor: '#00ffff',
                        shadowOffsetX: 0,
                        shadowOffsetY: 4,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: 'transparent', //悬浮背景
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            },
            series: series
        };
        // 绘制图表。
        echarts.init(document.getElementById('myChart')).setOption(option);
    },
};
</script>

<style lang="scss">
.distribution {
    background-color: #031525;
}
</style>
