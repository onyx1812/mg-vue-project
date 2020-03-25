<template>
  <nav class="nav" :class="className">
    <ul>
      <li><router-link class="link" to="/">Home</router-link></li>
      <li><router-link class="link" to="/game">Game</router-link></li>
      <li v-if="login==false"><router-link class="link" to="/login">Login</router-link></li>
      <li v-if="login"><router-link class="link" to="/profile">Profile</router-link></li>
      <li v-if="login"><a class="link" @click="logout">Logout</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'NavList',
  props: {
    className: String,
  },
  beforeMount(){
    const user_data = JSON.parse( sessionStorage.getItem('USER_DATA') );
    if(user_data){
      this.login = true
    }
  },
  data() {
    return {
      login: false,
    };
  },
  methods: {
    logout(e){
      this.login = false;
      sessionStorage.clear();
      this.$router.push('/login');
    }
  },
};
</script>
<style lang="scss" scoped>
.nav{
  display: flex;
  justify-content: flex-end;
  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    li{
      &:not(:first-child){
        @media(min-width:768px){
          margin-left: 15px;
        }
      }
    }
  }
  &__footer{
    a{
      color: gray;
      &:hover, &.router-link-exact-active{
        background: none;
        color: #fff;
      }
    }
  }
}
</style>
