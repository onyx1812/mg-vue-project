<template>
  <div class="container">
    <ul class="nav-top">
      <li><router-link class="link link-faq" to="faq">FAQ's</router-link></li>
      <li v-if="!this.$store.state.logined"><router-link class="link link-user" to="/login">Login</router-link></li>
      <li v-if="this.$store.state.logined"><router-link class="link link-user" to="/profile">Profile</router-link></li>
      <li v-if="this.$store.state.logined"><a class="link link-out" @click="logout">Logout</a></li>
    </ul>
    <div class="row">
      <div class="col"><Logo /></div>
      <div class="col">
        <ul class="nav-main">
          <li><router-link class="link" to="/">Главная</router-link></li>
          <li><router-link class="link" to="/about-us">О&nbsp;нас</router-link></li>
          <li><router-link class="link" to="/games">Игры</router-link></li>
          <li><router-link class="link" to="/bonus">Бонусы</router-link></li>
          <li><router-link class="link" to="/news">Новости</router-link></li>
          <li><router-link class="link" to="/contacts">Контакты</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from './Logo.vue';
import {mapState} from 'vuex'
export default {
  name: 'NavList',
  components: {
    Logo,
  },
  beforeMount(){
    const user_data = JSON.parse( sessionStorage.getItem('USER_DATA') );
    if(user_data){
      this.$store.state.logined = true
    }
  },
  methods: {
    logout(e){
      this.$store.state.logined = false;
      sessionStorage.clear();
      this.$router.push('/login');
    }
  },
};
</script>
<style lang="scss" scoped>
.nav{
  &-main{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    margin-right: -10px;
    li{
      display: block;
      &:not(:first-child){
        @media(min-width:768px){
          margin-left: 5px;
        }
      }
    }
    a{
      min-width: 65px;
      color: #fff;
      position: relative;
      padding: 15px 10px;
      text-decoration: none;
      display: block;
      font-family: Montserrat;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      &:before{
        content: "";
        height: 1px;
        width: 0;
        background: #fff;
        position: absolute;
        left: 0;
        top: 100%;
        opacity: 0;
        transition: width .5s ease;
      }
      &.router-link-exact-active, &:hover{
        &:before{
          opacity: 1;
          width: 100%;
        }
      }
    }
  }
  &-top{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #A1A1A1;
    padding-top: 15px;
    padding-bottom: 15px;
    li{
      &:not(:first-child){
        @media(min-width:768px){
          margin-left: 30px;
        }
      }
    }
    a{
      font-family: Montserrat;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: #9571AB;
      padding: 2px 0;
      text-decoration: none;
      &.link-faq{
        background: url('../../assets/img/icon-faq.png') no-repeat center left;
        padding-left: 30px;
      }
      &.link-user{
        background: url('../../assets/img/icon-user.png') no-repeat center left;
        padding-left: 30px;
      }
      &-out{}
      &:before{
        display: none;
      }
      &.router-link-exact-active, &:hover{
        opacity: .7;
      }
    }
  }
}
</style>
