<template>
    <header>
        
        <div class="l-content">
            <el-button plain icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
            <!-- m面包屑导航 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <span class="el-dropdown-link">
                    <img :src="userImage" alt="" class="userImage">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item >个人中心</el-dropdown-item>
                    <el-dropdown-item><span  @click="logout">退出</span></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
import {mapState} from 'vuex'

    export default {
        data() {
            return {
                userImage:require('../assets/images/user.png')//在js中用require来调用image这个标签
            }
        },
        methods: {
            collapseMenu() {
                this.$store.commit('collapseMenu')
            },
            logout(){
                console.log('111')
   
                this.$store.commit('clearMenu')
                window.sessionStorage.clear('token')
                 this.$router.push('/login')
                 
            }
        },
        computed: {
            ...mapState({
                current:state => state.tab.currentMenu
            })
        },
    }
</script>

<style lang="scss" scoped>
header{
    height: 100%;
    display: flex;
    align-items: center;
    //以上代码是为了保证水平和垂直居中 
    justify-content: space-between//使其左右布局  
}
.l-content{
    display: flex;
    align-items: center;
    .el-button{
        margin-right: 20px;
    }
}

.r-content{
    .userImage{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
</style>
<style lang="scss">
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    color:#666666;
    font-weight:normal;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner,{
color:#ffffff;
}
</style>
