<template>
  <div class="app">
    <h2>app</h2>
    <router-link to="/login">login</router-link>
    <router-link to="/main">main</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  background-color: antiquewhite;
}
</style>
