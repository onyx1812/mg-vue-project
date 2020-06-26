<template>
  <header class="main-header" id="main_header">
    <NavList />
  </header>
</template>

<script>
import NavList from './partials/NavList.vue';
export default {
  name: 'MainHeader',
  components: {
    NavList,
  },
};
</script>
