<template>
    <div style="height:100%" ref="echart">
            echhhhart
    </div>
</template>

<script>
import echarts from 'echarts'
    export default {
        data() {
            return {
                echart: null,
                axisOption:{
                     xAxis: {
                         type: 'category',
                         data: [],
                         axisLine:{
                             lineStyle:{
                                  color:'#17b3a3'
                             }   
                         },
                         axisLabel:{
                             color:'#333'
                         }
                        },
                     yAxis: {
                        type: 'value',
                         axisLine:{
                             lineStyle:{
                                  color:'#17b3a3'
                             }   
                         }
                       },
                       color:[
                            '#2ec7c9',
                            '#b6a2de',
                            '#5ab1ef',
                            '#ffb980',
                            '#d87a80',
                            '#8d98b3',
                            '#e5cf0d',
                            '#97b552',
                            '#95706d',
                            '#dc69aa',
                            '#07a2a4',
                            '#9a7fd1',
                            '#588dd5',
                            '#f5994e',
                            '#c05050',
                            '#59678c',
                            '#c9ab00',
                            '#7eb00a',
                            '#6f5553',
                            '#c14089'
                       ],
                        series: []

                },//有坐标轴的配置
                normalOption:{
                      series: []
                },//无坐标轴的配置

            }
        },
        props: {
            chartData: {
                type: Object,
                default(){
                    return {
                        xData:[],
                        series:[]
                    }
                    }
            },
            isAxisChart:{
                type:Boolean,
                default:true
            }
        },
        computed: {
            option() {
                return this.isAxisChart ?this.axisOption : this.normalOption 
            }
        },
        watch: {
           chartData:{
               handler:function(){
                   this.initChart()
               },
               deep:true
           }
        },
        methods:{
            initChart(){
                this.initChartData()
                if(this.echart){
                    this.echart.setOption(this.option)
                }else{
                    this.echart =echarts.init(this.$refs.echart)
                    this.echart.setOption(this.option)
                }
            },
            initChartData(){
                if(this.isAxisChart){
                   this.axisOption.xAxis.data = this.chartData.xData
                   this.axisOption.series = this.chartData.series
                }else{
                   this.normalOption.series = this.chartData.series
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>