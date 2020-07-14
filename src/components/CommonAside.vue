<template>
     <el-menu
     :collapse="isCollapse"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      

      <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>


      <el-submenu index="index" v-for="(item,index) in hasChildren" :key="index">
        <template slot="title">
           <i :class="'el-icon-'+item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="subItem.path" v-for="(subItem,index) in item.children" :key="index" @click="clickMenu(subItem)">
                 <i :class="'el-icon-'+subItem.icon"></i>
                 <span slot="title">{{subItem.label}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                asideMenu:[
                    {
                        path:'/',
                        label:'首页',
                        name:'home',
                        icon:'s-home',
                    },
                    {
                        path:'/video',
                        label:'视频管理',
                        name:'video',
                        icon:'video-play',
                    },
                    {
                        path:'/user',
                        label:'用户管理',
                        name:'user',
                        icon:'user',
                    },
                    {
                      
                        label:'其他',
                        icon:'user',
                        children:[
                            {
                                path:'/page1',
                                name:'page1',
                                label:'页面一',
                                icon:'setting'
                            },
                            {
                                path:'/page2',
                                label:'页面二',
                                name:'page2',
                                icon:'setting'
                            }
                        ]
                    }
                ],
            }
        },
        computed: {
            noChildren() {
                return this.menu.filter(item =>!item.children) 
            },
             hasChildren() {
                return this.menu.filter(item =>item.children) 
            },
             isCollapse(){
                return this.$store.state.tab.isCollapse
            },
            menu(){
                return this.$store.state.tab.menu
            }
        },
        methods: {
            clickMenu(item) {
                this.$router.push({name:item.name})
                this.$store.commit('selectMenu',item)
            },
           
        },
    }
</script>

<style lang="scss" scoped>
.el-menu{
    height: 100%;
    border: none;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>