<template>
  <div id="app">
    <v-sidebar></v-sidebar>
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from './components/v-header.vue'
import vSidebar from './components/v-sidebar.vue'
export default {
    components : {
        vHeader,
        vSidebar
    }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  min-width: 1450px;
}
</style>
