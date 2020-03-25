<template>
  <div id="app">
    <MainHeader/>
    <main class="main">
      <router-view/>
    </main>
    <MainFooter/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>

<style lang="scss" src="./assets/scss/style.scss"></style>
