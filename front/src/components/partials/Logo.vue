<template>
  <img src="@/assets/img/logo.png" class="logo">
</template>
<script>
export default {
  name: 'Logo',
  props: {
    className: String,
  },
};
</script>
<style lang="scss" scoped>
.logo{
  display: block;
  width: 165px;
  margin-top: 15px;
}
</style>
