import Cookie from 'js-cookie'
export default{
    state: {
        isCollapse:false,//是否收缩左侧菜单栏
        menu:[],
        currentMenu:null,
        tabsList:[
            {
                path:'/',
                label:'首页',
                name:'home',
                icon:'home',
            }
        ],
    },
    mutations: {
        //后台获取的菜单数据需要保持在vuex里 也就是这里
         setMenu(state,val){
             state.menu = val
             //cookie里面只能存字符串
             Cookie.set('menu',JSON.stringify(val))
             console.log(val,'vux')
         },
         //清除菜单---退出 清理掉cookie里面的数据
         clearMenu(state){
             state.menu = [],
             Cookie.remove('menu')
         },
         //动态添加菜单
         addMenu(state,router){
             var menu = JSON.parse(Cookie.get('menu'))
             if(!menu) return
             state.menu = menu
             var currentMenu = [
                 {
                     path:'/',
                     component:() => import(`@/views/Main.vue`),
                     children:[]
                 }
             ]

             menu.forEach(item =>{
                 if(item.children){
                     item.children = item.children.map(item =>{
                         item.component = () => import(`@/views/${item.url}`)
                         return item
                     })
                     currentMenu[0].children.push(...item.children)
                 }else{
                    item.component = () => import(`@/views/${item.url}`)
                    currentMenu[0].children.push(item)
                 }
             })
             console.log(currentMenu,'cur')
             router.addRoutes(currentMenu)
         },
        selectMenu(state,val){
            if(val.name !== 'home'){
                state.currentMenu =val 
                var result = state.tabsList.findIndex(item => item.name === val.name)
                result ===-1 ?state.tabsList.push(val): '' //将不是homed的name放到tablist中，
            }else{
                state.currentMenu =null 
            }
           
        },
        closeTab(state,val){
            //关闭标签页的方法
            var result = state.tabsList.findIndex(item =>item.name === val)
            state.tabsList.splice(result,1)
            //通过findindex方法找到需要删除标签的索引
        },
        //菜单栏收缩展开的方法
         collapseMenu(state){
            state.isCollapse =!state.isCollapse
         }
    },
    actions: {
    },
   
}