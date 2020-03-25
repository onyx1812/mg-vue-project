<template>
  <header class="main-header" id="main_header">
    <div class="container">
      <div class="row">
        <div class="col">
          <Logo className="logo__header" />
        </div>
        <div class="col">
          <NavList className="nav__header" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './partials/Logo.vue';
import NavList from './partials/NavList.vue';

export default {
  name: 'MainHeader',
  components: {
    NavList,
    Logo,
  },
};
</script>
