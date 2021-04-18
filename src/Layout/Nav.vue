<template>
  <div class="amber_nav_router">
    <div class="title">
    </div>
    <div class="amber_nav_scroll">
      <div
        v-for="router in routerConfig"
        :key="router.name"
        :class="classArr(router.name)"
        @click="routerChange(router.name)"
      >
        <span class="route_icon">{{ router.meta.icon }}</span>
        <span class="route_title">{{ router.meta.title }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import routerConfig from '@/router/router.config'
export default {
  data () {
    return {
      routerConfig
    }
  },
  methods: {
    // 路由跳转
    routerChange (routerName) {
      this.$router.push({name: routerName})
    },
    // active css 设置
    classArr (routerName) {
      const classArr = ['amber_nav']
      const routeName = this.$route.name
      if (routerName === routeName) {
        classArr.push('active')
      }
      return classArr
    }
  }
}
</script>
<style lang="less" scoped>
.amber_nav_router{
  position: fixed;
  left: 0;
  top: 0;
  width: 1.9rem;
  height: 100vh;
  z-index: 80;
  padding-top: .6rem;
  background-color: @navBgColor;
  .title{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: .6rem;
  }
  .amber_nav_scroll{
    height: calc(100vh - .6rem);
    overflow-y: auto;
    .amber_nav{
      height: .45rem;
      cursor: pointer;
      color: #fff;
      font-size: .14rem;
      text-align: center;
      display: flex;
      align-items: center;
      padding: 0 .4rem;
      &.active{
        background-color: #f43636;
      }
      .route_icon {
        margin-right: .08rem;
        color: #fff;
      }
      .route_title {
        color: #fff;
      }
    }
  }
}
</style>
