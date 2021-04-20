<template>
  <div class="box">
    <a-tabs
     type="card"
      default-active-key="1"
      @change="callback"
    >
      <a-tab-pane key="1" tab="功能选择">
        <Modules />
      </a-tab-pane>
      <a-tab-pane key="2" tab="bot设置">
        <!-- <Modules /> -->
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Modules from './components/Modules'
export default {
  components: {
    Modules
  },
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>
<style lang="less" scoped>
.box{
  background-color: #fff;
  padding: 20px;
}
</style>
