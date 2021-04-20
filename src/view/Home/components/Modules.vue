<template>
  <div>
    <a-Table
      bordered
      :columns="columns"
      :dataSource="modules"
      :pagination="false"
      :rowKey="record => record.name"
    >
      <template slot="status" slot-scope="text, record">
        <a-switch
          :checked="record.status"
          @change="onChange"
        />
      </template>
    </a-Table>
  </div>
</template>

<script>
import { modules } from '../api'
export default {
  data () {
    return {
      modules: [],
      columns: [
        { title: '是否启用', dataIndex: 'status', width: 85, scopedSlots: { customRender: 'status' } },
        { title: '功能名称', dataIndex: 'name', width: 120 },
        { title: '简介', dataIndex: 'des' }
      ]
    }
  },
  methods: {
    // 请求数据
    getModules () {
      modules()
        .then(res => {
          if (res.code === 200) {
            this.modules = res.data
          } else {
            throw res.msg
          }
        })
        .catch(e => {
          console.log('模块获取失败：', e)
        })
    },
    // 状态切换
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
  },
  created() {
    this.getModules()
  }
};
</script>

<style lang="less" scoped>
.spin{
  width: 1rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
}
</style>
