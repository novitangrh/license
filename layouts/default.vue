<template>
  <div class="layout">
    <Sidebar />
    <div class="main-content">
      <Header />
      <div class="page-content">
        <nuxt-page />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Sidebar from '~/components/Sidebar.vue';
</script>

<style>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 100px;
}

.page-content {
  padding: 20px;
  flex: 1;
  overflow-y: auto;
}
</style>
