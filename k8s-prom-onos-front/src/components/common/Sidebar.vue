<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      router
    >
      <template v-for="item in menu">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-menu-item :index="subItem.index" :key="subItem.index"  style="padding-left: 75px">
                <i :class="subItem.icon"></i>
                <span slot="title">{{ subItem.title }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../common/bus';
export default {
  name: "vSidebar",
  data() {
    return {
      collapse: false,
      menu: [
        {
          icon: "el-icon-s-home",
          index: "dashboard",
          title: "系统总览",
        },
        {
          icon: "el-icon-ali-Topology iconfont",
          index: "resource",
          title: "存传算资源感知复用",
          subs: [
            {
              index: "resourceDashboard",
              title: "资源感知概览",
            },
            {
              index: "resourceList",
              title: "资源感知列表",
            },
            {
              index: "deviceList",
              title: "设备感知列表",
            }
          ],
        },
        {
          icon: "el-icon-ali-Topology iconfont",
          index: "virtualNetwork",
          title: "感知数据传输优化",
          subs: [
            {
              index: "virtualNetworkDashboard",
              title: "虚拟网络概览",
            },
            {
              index: "virtualNetworkRequest",
              title: "虚拟网络请求",
            },
            {
              index: "virtualNetworkList",
              title: "虚拟网络列表",
            },
            // {
            //   index: "serviceList",
            //   title: "网络服务列表"
            // }
          ],
        },
        {
          icon: "el-icon-ali-Topology iconfont",
          index: "task",
          title: "边云智能协同计算",
          subs: [
            {
              index: "taskDashboard",
              title: "边云任务概览",
            },
            {
              index: "taskList",
              title: "边云任务列表",
            },
            {
              index: "taskCreate",
              title: "任务协同部署",
            }
          ],
        }
      ],
    };
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", (msg) => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 100px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 300px;
}
.sidebar > ul {
  height: 100%;
}

.el-menu-item{
  font-size: 20px;  
  height: 70px;
  line-height: 70px;
}

.el-menu--collapse{
  width: 75px;
}
</style>