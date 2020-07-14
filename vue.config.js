module.exports = {
  devServer:{
    port:3333,
    open:true,
  },
  //项目全局配置
  css:{
    loaderOptions:{
      sass:{
        prependData:`@import "@/assets/scss/_variable.scss";`
        
      }
    }
  }
}
