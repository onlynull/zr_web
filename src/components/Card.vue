<template>
  <div
    :class="[
      'amber_card',
      type === 'border' ? 'amber_card_border' : ''
    ]"
  >
    <div
      v-if="title"
      class="amber_cute_title"
      :style="{
        backgroundColor: color || '#393e46'
      }"
    >
      <p class="title">{{ title }}</p>
      <p class="title" v-if="subTitle">{{ subTitle }}</p>
      <a v-if="editText" href="javascript:;" @click="edit" class="edit">{{ editText }}</a>
    </div>
    <Spin :loading="loading">
      <div
        :class="[
          'amber_card_main',
          type === 'border' ? 'amber_card_main_border' : '',
          !title ? 'amber_card_not_title' : ''
        ]"
        :style="{
          minHeight: loading ? '.8rem' : ''
        }"
      >
        <slot></slot>
      </div>
    </Spin>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'shadow'
    },
    editText: {
      type: String,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    edit () {
      this.$emit('edit')
    }
  }
}
</script>
<style lang="less" scoped>
.amber_card{
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  &>div{
    flex: 1;
  }
  .amber_cute_title{
    flex: none;
    font-size: .14rem;
    padding: .08rem .1rem;
    display: flex;
    justify-content: space-between;
    background-color: #393e46;
    border-top-left-radius: .04rem;
    border-top-right-radius: .04rem;
    .title{
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #fff;
    }
    .edit{
      color: #fffd75
    }
  }
  .amber_card_main{
    height: 100%;
    box-sizing: border-box;
    padding: .1rem .15rem;
    font-size: .14rem;
    line-height: 1.5715;
    list-style: none;
    position: relative;
    background: #fff;
    border-bottom-left-radius: .04rem;
    border-bottom-right-radius: .04rem;
  }
  .amber_card_main_border{
    padding: .1rem .2rem;
    border: 1px solid #ebebeb;
    border-top: none;
  }
  .amber_card_not_title{
    border-radius: .04rem;
  }
}
.amber_card_border{
  box-shadow: none;
}
</style>
