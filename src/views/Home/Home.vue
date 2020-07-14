<template>
    <div>
        <el-row class="home" :gutter="20">
            <el-col :span="8">
                 <el-card shadow="hover">
                    <div class="user">
                        <img :src="userImg" alt="">
                        <div class="userinfo">
                            <p class="name">Nick</p>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>上次登陆时间：<span>2020-06-25</span></p>
                        <p>上次登陆地点 <span>恩施</span></p>
                    </div>
                </el-card>

                 <el-card shadow="hover" style="height:522px;margin-top:20px;">
                    <el-table :data="tableData">
                        <el-table-column show-overflow-tooltip v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
                    </el-table>
                </el-card>

            </el-col>
            <el-col :span="16">
                <div class="num">
                     <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{ display: 'flex',padding:0}">
                        <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
                        <div class="detail">
                            <p class="num">￥{{item.value}}</p>
                            <p class="txt">{{item.name}}</p>
                        </div>
                    </el-card>
                </div>

                 <el-card shadow="hover">
                     <echart style="height:280px;" :chartData="echartData.order"></echart>
                </el-card>

                <div class="graph">
                     <el-card shadow="hover">
                         <echart style="height:260px;"></echart>
                     </el-card>
                      <el-card shadow="hover">
                         <echart style="height:260px;"></echart>
                      </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Echart from '../../components/EChart'
    export default {
        data() {
            return {
                userImg: require('../../assets/images/user.png'),
                countData:[
                    {
                        name:'今日支付订单',
                        value:123,
                        icon:'success',
                        color:'#2ec7e9'
                    },
                    {
                        name:'今日收藏订单',
                        value:234,
                        icon:'star-on',
                        color:'#ffb980'
                    },
                    {
                        name:'今日未支付订单',
                        value:345,
                        icon:'s-goods',
                        color:'#5ab1ef'
                    },
                    {
                        name:'本月未支付订单',
                        value:123,
                        icon:'success',
                        color:'#2ec7e9'
                    },
                    {
                        name:'本月支付订单',
                        value:123,
                        icon:'success',
                        color:'#2ec7e9'
                    },
                    {
                        name:'本月收藏订单',
                        value:123,
                        icon:'success',
                        color:'#2ec7e9'
                    },
                ],
                tableData:[],
                tableLabel:{
                    name:'课程',
                    todayBuy:'今日购买',
                    monthBuy:'本月购买',
                    totalBuy:'总购买'
                },
                echartData:{
                    order:{
                        xData:[],
                        series:[]
                    },
                    user:{
                         xData:[],
                        series:[]
                    },
                    video:{
                        series:[]
                    }
                }
            }
        },
        mounted () {
         
        },
        created () {
            this.getTableData();
        },
        methods: {
            getTableData() {
                this.$http.get('/home/getData').then(res =>{
                   this.tableData = res.data.data.tableData
                  // console.log(this.tableData)
                  //订单折现图
                   var order = res.data.data.orderData
                   this.echartData.order.xData = order.date
                   //1.取出series中的name部分---键名
                   var keyArray = Object.keys(order.data[0])
                   //console.log(keyArray)
                   keyArray.forEach(key =>{
                       this.echartData.order.series.push({
                           name:key === 'wechat' ? '小程序' : key,
                           data:order.data.map(item=>item[key]),
                           type:'line'
                       })
                   })

                })
            }
        },
        components: {
            Echart,
        },
    }
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home.scss'
</style>