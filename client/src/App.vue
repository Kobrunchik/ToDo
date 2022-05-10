<script setup>
import { RouterView } from 'vue-router'

import NavBar from '@/components/NavBar.vue'
import Header from '@/components/Header.vue';

/*export default {
  components: {RouterView, NavBar, Header}
}*/

</script>

<template>

  <NavBar/>
  <Header/>


  <div class="container-fluid bg-dark bg-gradient bg-opacity-10">
    <RouterView/>
  </div>


</template>

<style>

</style>
