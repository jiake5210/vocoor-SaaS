<template>
    <div class="main">
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple float-left">
                    <h5>供应商列表</h5>
                    <el-input
                      v-model="input"
                      placeholder="搜索供应商名称"
                      suffix-icon="el-icon-search"
                    ></el-input>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple-light float-right">
                    <span class="nav-left-btn">
                        <el-button size="small">查看详情</el-button><el-button size="small">删除</el-button><el-button size="small">启动</el-button><el-button size="small">停用</el-button><el-button size="small">导出</el-button>
                    </span>
                    <span class="nav-right-btn">
                        <el-button size="medium">批量邀请我的供应商</el-button>
                        <el-button size="medium">邀请我的供应商</el-button>
                    </span>
                </div>
            </el-col>
        </el-row>
        <el-table  :data="tableData4" :border="true" :stripe="true" :fit="false" empty-text="暂无数据" :highlight-current-row="true">
            <template slot-scope>
                <div id="app22"></div>
            </template>

            <el-table-column type="selection" align="center" width="55">
            </el-table-column>
            <el-table-column prop="date" label="序号" width="150">
            </el-table-column>
            <el-table-column prop="name" row-class-name="asda" label="供应商名称" width="120">
                <template slot-scope="scope">
                    <el-button type="text" @click="dialogVisible = true">发送</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="province" label="供应商编码" width="120">
            </el-table-column>
            <el-table-column prop="city" :show-overflow-tooltip="true" label="是否注册" width="120">
            </el-table-column>
            <el-table-column prop="address" label="联系人" width="300">
            </el-table-column>
            <el-table-column prop="zip" :show-overflow-tooltip="true" label="联系电话" width="120">
            </el-table-column>
            <el-table-column prop="zip" :show-overflow-tooltip="true" label="邮件地址" width="120">
            </el-table-column>
            <el-table-column prop="zip" :show-overflow-tooltip="true" max-height="30" label="zzzz" width="120">
            </el-table-column>
            <el-table-column prop="zip" label="经营模式" width="120">
            </el-table-column>
            <el-table-column prop="zip" label="邀请加入时间" width="120">
            </el-table-column>
            <el-table-column prop="zip" label="平台审核状态	" width="120">
            </el-table-column>
            <el-table-column prop="zip" label="启用状态" width="120">
            </el-table-column>
            <el-table-column prop="zip" label="等级" width="120">
            </el-table-column>
            <el-table-column fixed="right" label-class-name="text-center" class-name="text-center" :render-header="renderHeader"  width="65">
                <template slot-scope="scope">
                    <el-button type="text" @click="dialogVisible = true">发送</el-button>
                </template>
            </el-table-column>


        </el-table>



        <div class="pagination mb-20">
            <el-pagination class="mr-20" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>
        <!-- sendSms短信modal Start -->
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        :modal="true"
        height="100%"
        width="1200px"
        style="margin-top:0;"
        custom-class="vendor-index-sendSms"
        :lock-scroll="false"
        :close-on-click-modal="false"
        :show-close="false"
        >
        <!-- header start -->
            <div slot="title" class="clearfix">
                <div class="float-left">
                    <el-button size="mini" type="primary" class="sms">
                        <i class="fz-18 el-icon-message" style="color:#fff;"></i>
                    </el-button>
                    <h5 class="fz-14" style="margin-left: 10px;font-weight: 200;">发信息</h5>
                </div>
                <div class="float-right">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </div>
            </div>
            <!-- header end -->
            <div class="body-top"></div>
            <div class="body-main">
                <div class="t-btn">
                    <el-button size="small" type="primary">添加发送目标</el-button>
                    <el-button size="small">删除项目</el-button>
                </div>
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
                    prop="name"
                    label="联系人"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="联系电话"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="联系地址"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="主营物资分类"
                    width="120">
                    </el-table-column>
                </el-table>
            </div>
            <div class="clearfix text-right" style="background: #f4f6f9;">
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
            <div class="sms-content">
                短信内容：
                <el-input
                resize='none'
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="textarea3">
                </el-input>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    created () {
        this.$axios.get('/vendorchecklist/getPlatformCompanys',{})
        .then (res=>{
            console.log(res);
        })
    },
    methods: {
        append() {
            console.log(1);
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        renderHeader(h, { column, $index } ) {
             return (
                h('i', {
                    'class': {
                        'el-icon-message' : true,
                    },
                    style: {
                        fontSize: '18px'
                    }
                }
                )
             )
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        }
    },
    data() {
        return {
            dialogVisible: false,
            input: "",
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            tableData4: [
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-08",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-06",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-07",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    province: "上海",
                    city:
                        "普陀普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200320033320033320033320033320033320033320033320033320033320033320033320033320033320033320033320033320033320033320033320033333
                },
                {
                    date: "2016-05-08",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-06",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-07",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                }
            ],
            tableData3: [{
                date: '1',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '3',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '4',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '5',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '6',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '7',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '8',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '9',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '10',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }]
        };
    }
};
</script>
<style lang="scss" scoped>
.el-row {
    h5 {
        display: inline-block;
        font-size: 14px;
        color: #333333;
    }
    .el-input {
        width: 258px;
        margin-left: 30px;
    }
    .nav-left-btn {
        display: inline-block;
        .el-button + .el-button {
            margin-left: 0px;
            //border-left: none;
            border-radius: 0px;
        }
    }
    .nav-right-btn {
        margin-left: 10px;
        display: inline-block;
        button {
            background-color: #00abee;
            color: #fff;
            border-radius: 8px;
            margin-left: 0;
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
.el-dialog__wrapper {
    position: absolute;
    top: 0;
    right: 0;
}
.el-dialog {
    margin-top: 0 !important;
    right: 0;
    position: absolute;
    height: 100%;
}
</style>


