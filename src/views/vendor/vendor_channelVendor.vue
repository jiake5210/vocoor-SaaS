<template>
  <div class="main clearfix">
    <v-zTree></v-zTree>
    <div class="channel-right">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <h5>供应商列表</h5>
            <el-input
              suffix-icon="el-icon-search"
              v-model="input"
              placeholder="搜索供应商名称">
            </el-input>
          </div>
        </el-col>
      </el-row>
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="序号"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="供应商名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="供应商编码"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地区"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="主营物资分类"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="注册资金（万元）"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="成立时间"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="资质"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="业绩"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="address"
          label="网店"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import vZTree from '../../components/v-zTreeData'
export default {
  components : {
    vZTree
  },
  data () {
    return {
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  .channel-right {
    margin-left: 300px;
    .grid-content.bg-purple-dark {
      height: 60px;
      line-height: 60px;
      h5 {
        display: inline-block;
        font-size: 14px;
        color: #333333;
      }
      .el-input {
        width: 258px;
        margin-left: 30px;
      }
    }

  }
}
.pagination {
  height: 50px;
  background: #f4f7f9;
  .el-pagination {
    float: right;
    padding: 10px 0;
  }
}
</style>
