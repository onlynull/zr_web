<template>
  <div class="amber_title_bar">
    <div class="title">
      ROBOT
    </div>
    <div class="nav_phone history_modal" v-if="DCW > 750">
    </div>
    <div class="nav_phone" v-if="DCW <= 750">
    </div>
  </div>
</template>
<script>
import routerConfig from '@/router/router.config'
export default {
  data () {
    return {
      routerConfig,
      mean: false,
      historyModian: []
    }
  },
  computed: {
    DCW(){
      return this.$store.state.DCW
    }
  },
  methods: {
    // 路由跳转
    routerChange (routerName) {
      this.$router.push({name: routerName})
      this.mean = false
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
.amber_title_bar{
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 .3rem;
  width: calc(100% - 1.9rem);
  height: .6rem;
  margin-left: 1.9rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 80;
  .title{
    font-size: .24rem;
    color: #1b262c;
    font-weight: bold;
    line-height: 1;
  }
  .nav_phone{
    .mean_icon{
      display: block;
      line-height: .25rem;
      cursor: pointer;
      color: #fff;
    }
    .mean_phone{
      box-shadow: 0 .1rem .1rem 0 rgba(0, 64, 128, 0.2);
      .dropdown;
      background-color: #fff;
      border: none;
      top: .6rem;
      right: 10px;
      .amber_nav{
        cursor: pointer;
        color: #1b262c;
        font-size: .14rem;
        line-height: .34rem;
        text-align: center;
        display: flex;
        align-items: center;
        padding: 0 .4rem 0 .1rem;
        &.active{
          background-color: #f43636;
        }
        span{
          color: #fff;
        }
        .route_icon {
          margin-right: .08rem;
        }
      }
    }
  }
  .history_modal{
    .history_box{
      width: 3rem;
      padding: .08rem .1rem;
      .history{
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: .24rem;
        .pro_id{
          flex: 1;
        }
        span{
          display: block;
          margin-left: .08rem;
          width: .16rem;
          height: .16rem;
          line-height: .16rem;
          font-size: .14rem;
          text-align: center;
          background-color: #ff4d4f;
          color: white;
          cursor: pointer;
          border-radius: .02rem;
        }
      }
    }
    .no_data{
      width: 3rem;
      line-height: .6rem;
      text-align: center;
    }
    .mean_icon{
      color: red;
    }
  }
}
@media screen and (max-width: 750px) {
  .amber_title_bar{
    height: .45rem;
    width: 100%;
    margin-left: 0;
    background-color: #1b262c;
    padding: 0 .15rem;
    .title{
      font-size: .16rem;
      color: #fff;
    }
    .nav_phone{
      .mean_phone{
        background-color: #1b262c;
        top: .45rem;
      }
    }
  }
}
</style>
