<template>
    <div class="tabs">
        <el-tag
        size="small"
        :key="tag.name"
        v-for="tag in tags"
        :closable="tag.name !=='home'"
        :disable-transitions="false"
        :effect="$route.name ===tag.name ? 'dark' : 'plain'"
        @click="changeMenu(tag)"
        @close="handleClose(tag)">
        {{tag.label}}
        </el-tag>
    </div>
</template>

<script>
import { mapState,mapMutations} from 'vuex'

    export default {
      data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
     
       ...mapMutations({
           close:'closeTab'
       }),
        handleClose(tag) {
      this.close(tag)
      },
        //tag标签点击事件
        changeMenu(item){
            this.$router.push({name:item.name})
            this.$store.commit('selectMenu',item)
        }
    },
    computed: {
       ...mapState({
           tags:state => state.tab.tabsList
       })
    },
    
    }
</script>

<style lang="scss" scoped>
.tabs{
    padding: 20px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>