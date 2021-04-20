<template>
  <div id="app">
    <Nav v-if="DCW > 750 && !login"/>
    <div class="main" v-if="!login">
      <TitleBar />
      <section id="router_view">
        <router-view />
      </section>
    </div>
    <router-view v-else />
  </div>
</template>

<script>
import TitleBar from '@/Layout/TitleBar'
import Nav from '@/Layout/Nav'
import { islogin } from '@/common/api'
export default {
  name: 'App',
  components: { TitleBar, Nav },
  data () {
    return {
      login: false
    }
  },
  computed: {
    DCW(){
      return this.$store.state.DCW
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.$store.commit('CHANGEDCW')
    })
  },
  watch: {
    $route(now, old){
      if (now.name === 'Login') {
        this.login = true
      } else {
        this.login = false
      }
      const dom = document.getElementById('router_view')
      if (dom) {
        dom.scrollTop = 0
      }
    }
  }
}
</script>
<style lang="less" scoped>
#app{
  overflow: hidden;
  font-size: .14rem;
  color: #707788;
}
.main{
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  #router_view{
    margin-left: 1.9rem;
    margin-top: .6rem;
    min-height: calc(100vh - .6rem);
    background-color: @bgColor;
    overflow: auto;
    padding: .15rem;
  }
}
@media screen and (max-width: 750px) {
  .main{
    #router_view{
      margin-left: 0;
      margin-top: .45rem;
    }
  }
}
</style>
<style lang="less">
html{
  min-height: 100vh;
  min-width: 100vw;
  background-color: @bgColor;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0,0,0,.2);
  }
  &::-webkit-scrollbar-track {
    border-radius: 0px;
    background: transparent;
  }
}
</style>


