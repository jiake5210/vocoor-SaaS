<template>
  <div class="zTree clearfix float-left">
    <div class="zTree-top clearfix">
      <div class="zTreeSearch text-center">
        <h5 class="mr-10 fz-15 v-middle float-left">供应商分类</h5>
        <el-input
          class="display-inline-block float-left"
          size="medium"
          placeholder="搜索分类名字"
          suffix-icon="el-icon-search"
          v-model="input7">
        </el-input>
      </div>
    </div>
    <el-tree
      class="margin-15"
      :data="data2"
      :props="defaultProps"
      @node-click="handleNodeClick"></el-tree>

  </div>
</template>

<script>
export default {
  data() {
    return {
      data2: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.zTree {
  width: 300px;
  border:1px solid #eee;
  .zTree-top {
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid #eee;
    h5 {
      display: inline-block;
      font-weight: 200;
      color: #5d5d5d;
    }
    .el-input.el-input--medium.el-input--suffix {
      width: 158px;
    }
  }
}
</style>
