<template>
  <div class="wrapper_sidebar">
    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" :collapse="isCollapse" router>
      <el-radio-group v-model="isCollapse">
        <div style="height:100%;">
          <div class="sidebar_top">
            <img src="../assets/img/v-sidebar/wrapper_top.png" alt="">
            <i class="vocoor-icon icon_item"></i>
          </div>
        </div>
      </el-radio-group>
      <div class="fast_create">
        <div class="create-module" @mouseenter="IsDisplay=true" @mouseleave="IsDisplay=false">
          <div class="speediness_create">
            <span>快速创建</span>
            <i class="vocoor-icon icon_rightArrows"></i>
          </div>
          <div class="now_wrapper" v-show="IsDisplay">
            <ul class="clearfix">
              <li>
                <a href="/Home/vendor/invitevendor.html">
                  <div class="icon_createModel user now_img"></div>
                  <p>邀请供应商</p>
                </a>
              </li>
              <li>
                <a href="/Home/postmessage/notice.html">
                  <div class="icon_createModel sms now_img"></div>
                  <p>发送短信息</p>
                </a>
              </li>
              <li>
                <a href="/Home/material/addmaterial.html">
                  <div class="icon_createModel box now_img"></div>
                  <p>添加物料</p>
                </a>
              </li>
              <li>
                <a href="/Home/projectmanage/addproject.html">
                  <div class="icon_createModel addProject now_img"></div>
                  <p>新增项目</p>
                </a>
              </li>
              <li>
                <a href="/Home/wantplan/addwantplan.html?type=add_type">
                  <div class="icon_createModel demand now_img"></div>
                  <p>添加需求计划</p>
                </a>
              </li>
              <li>
                <a href="/Home/realrequirements/add.html">
                  <div class="icon_createModel info now_img"></div>
                  <p>发布需求信息</p>
                </a>
              </li>
              <li>
                <a href="/Home/contractmanage/addcontract.html">
                  <div class="icon_createModel contract now_img"></div>
                  <p>合同签订</p>
                </a>
              </li>
              <li>
                <a href="/Home/invitebids/purchasescheme.html">
                  <div class="icon_createModel purchase now_img"></div>
                  <p>采购管理</p>
                </a>
              </li>
              <li>
                <a href="/Home/expert/add.html">
                  <div class="icon_createModel expert now_img"></div>
                  <p>添加专家</p>
                </a>
              </li>
              <li>
                <a href="/Home/depmanage/addtop.html">
                  <div class="icon_createModel addTop now_img"></div>
                  <p>添加顶级部门</p>
                </a>
              </li>
              <li>
                <a href="/Home/depmanage/adddep.html">
                  <div class="icon_createModel addFooter now_img"></div>
                  <p>添加下级部门</p>
                </a>
              </li>
              <li>
                <a href="/Home/staffmanage/userinfos.html">
                  <div class="icon_createModel addUser now_img"></div>
                  <p>添加人员</p>
                </a>
              </li>
              <li>
                <a href="/Home/rolemanage/index.html">
                  <div class="icon_createModel addRole now_img"></div>
                  <p>添加角色</p>
                </a>
              </li>
              <li>
                <a href="/Home/modelmanage/modelinfo.html">
                  <div class="icon_createModel addTemplate now_img"></div>
                  <p>添加模板</p>
                </a>
              </li>
              <li>
                <a href="/Home/postmessage/sendsms.html">
                  <div class="icon_createModel addMail now_img"></div>
                  <p>发送站内信</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <el-scrollbar id="scrollbar">
        <el-menu-item index="/home">
          <img class="sidebar-imgJ" src="../assets/img/v-sidebar/menu-vendorJ0.png">
          <img class="sidebar-imgK" src="../assets/img/v-sidebar/menu-vendorK0.png">
          <span slot="title" class="sidebar_text">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <img class="sidebar-imgJ" src="../assets/img/v-sidebar/menu-vendorJ1.png">
            <img class="sidebar-imgK" src="../assets/img/v-sidebar/menu-vendorK1.png">
            <span slot="title" class="sidebar_text">供应商管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/vendor/index">供应商邀请管理</el-menu-item>
            <el-menu-item index="/vendor/channelVendor">邀请平台供应商</el-menu-item>
            <el-menu-item index="2-3">供应商审核列表</el-menu-item>
            <el-menu-item index="2-4">供应商分类管理</el-menu-item>
            <el-menu-item index="2-5">供应商不良业绩</el-menu-item>
            <el-menu-item index="2-6">供应商绩效评估</el-menu-item>
            <el-menu-item index="2-7">供应商考察列表</el-menu-item>
            <el-menu-item index="2-8">供应商问答</el-menu-item>
            <el-menu-item index="2-9">供应商短信发送</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <img class="sidebar-imgJ" src="../assets/img/v-sidebar/menu-vendorJ2.png">
          <img class="sidebar-imgK" src="../assets/img/v-sidebar/menu-vendorK2.png">
          <span slot="title" class="sidebar_text">物料管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <img class="sidebar-imgJ" src="../assets/img/v-sidebar/menu-vendorJ3.png">
          <img class="sidebar-imgK" src="../assets/img/v-sidebar/menu-vendorK3.png">
          <span slot="title" class="sidebar_text">采购部位管理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <img class="sidebar-imgJ" src="../assets/img/v-sidebar/menu-vendorJ4.png">
          <img class="sidebar-imgK" src="../assets/img/v-sidebar/menu-vendorK4.png">
          <span slot="title" class="sidebar_text">需求与计划管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <img class="sidebar-imgJ" src="../assets/img/v-sidebar/menu-vendorJ5.png">
          <img class="sidebar-imgK" src="../assets/img/v-sidebar/menu-vendorK5.png">
          <span slot="title" class="sidebar_text">采购方案与询源</span>
        </el-menu-item>
        <el-menu-item index="7">
          <img class="sidebar-imgJ" src="../assets/img/v-sidebar/menu-vendorJ6.png">
          <img class="sidebar-imgK" src="../assets/img/v-sidebar/menu-vendorK6.png">
          <span slot="title" class="sidebar_text">合同管理</span>
        </el-menu-item>
        <el-menu-item index="8">
          <img class="sidebar-imgJ" src="../assets/img/v-sidebar/menu-vendorJ7.png">
          <img class="sidebar-imgK" src="../assets/img/v-sidebar/menu-vendorK7.png">
          <span slot="title" class="sidebar_text">供应链</span>
        </el-menu-item>
        <el-menu-item index="9">
          <img class="sidebar-imgJ" src="../assets/img/v-sidebar/menu-vendorJ8.png">
          <img class="sidebar-imgK" src="../assets/img/v-sidebar/menu-vendorK8.png">
          <span slot="title" class="sidebar_text">统计分析</span>
        </el-menu-item>
        <el-menu-item index="10">
          <img class="sidebar-imgJ" src="../assets/img/v-sidebar/menu-vendorJ9.png">
          <img class="sidebar-imgK" src="../assets/img/v-sidebar/menu-vendorK9.png">
          <span slot="title" class="sidebar_text">基础管理</span>
        </el-menu-item>
        <el-menu-item index="11">
          <img class="sidebar-imgJ" src="../assets/img/v-sidebar/menu-vendorJ10.png">
          <img class="sidebar-imgK" src="../assets/img/v-sidebar/menu-vendorK10.png">
          <span slot="title" class="sidebar_text">系统设置</span>
        </el-menu-item>
        <el-menu-item index="12">
          <img class="sidebar-imgJ" src="../assets/img/v-sidebar/menu-vendorJ11.png">
          <img class="sidebar-imgK" src="../assets/img/v-sidebar/menu-vendorK11.png">
          <span slot="title" class="sidebar_text">站内信管理</span>
        </el-menu-item>
      </el-scrollbar>
    </el-menu>
    <div class="sidebar-footer">
      <div class="aside-footer">
        <span>
          <a>
            <img src="../assets/img/v-sidebar/10.1.png" class="settingJ">
            <img src="../assets/img/v-sidebar/10.2.png" class="_settingJ">
          </a>
        </span>
        <span>
          <a>
            <img src="../assets/img/v-sidebar/11.1.png" class="markJ">
            <img src="../assets/img/v-sidebar/11.2.png" class="_markJ">
          </a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "v-sidebar",
    data() {
        return {
            isCollapse: false,
            IsDisplay: false
        };
    },
    created() {
        console.log(this.$route);
    },
    mounted() {
        this.eventWindowResize(true);

    },
    methods: {
        // changeIsCollapse () {
        //   this.isCollapse = !this.isCollapse;
        //   this.eventWindowResize(true);
        // },
        eventWindowResize(isActive) {
            if (isActive) {
                var currentclientHeight = document.documentElement.clientHeight;
                document.getElementById("scrollbar").style.height =
                    currentclientHeight - 170 + "px";
            }
            window.addEventListener("resize", function() {
                var currentclientHeight = document.documentElement.clientHeight;
                document.getElementById("scrollbar").style.height =
                    currentclientHeight - 170 + "px";
            });
        }
    },
    computed: {
        defaultActive: function() {
            return this.$route.path;
        }
    }
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
}
.el-menu-item:focus,
.el-menu-item:hover {
    outline: 0;
    background-color: none;
}
.el-menu {
    border-right: none;
}
.el-menu-item:focus,
.el-menu-item:hover {
    background: none;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>


