<template>
  <i :class="['amber_check', value ? '' : 'amber_not_check']" @click="changeSwitch"></i>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  // data () {
  //   return {
  //     type: true
  //   }
  // },
  methods: {
    changeSwitch () {
      this.value = !this.value
      this.$emit('change', this.value)
    }
  }
}
</script>
<style lang="less" scoped>
  .amber_check {
    display: block;
    width: .44rem;
    height: .22rem;
    line-height: .2rem;
    background-color: rgba(30, 220, 79, 0.3);
    border: 1px solid rgb(30, 220, 79);
    padding-left: .01rem;
    text-align: center;
    position: relative;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
    &::after {
      content: '';
      display: block;
      width: .18rem;
      height: .18rem;
      position: absolute;
      left: .01rem;
      top: 50%;
      border-radius: 50%;
      transform: translateY(-50%);
      transition: all 0.3s;
      background-color: rgb(30, 220, 79);
    }
  }
  .amber_not_check {
    padding-left: 0;
    padding-right: .01rem;
    background-color: #ecf0f1;
    border: 1px solid #c0c5cd;
    &::after {
      left: calc(100% - 0.19rem);
      background-color: #c0c5cd;
    }
  }
</style>