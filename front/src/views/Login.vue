<template>
  <div class="content content-login">
    <div class="container">
      <form @submit="formSubmit" id="login" class="form form-login">
        <h2>Log In</h2>
        <ul class="fields">
          <li class="field">
            <input type="email" name="email" v-model="email" placeholder="Email" >
          </li>
          <li class="field">
            <input type="password" name="password" v-model="password" placeholder="Password" >
          </li>
          <li class="field">
            <input type="submit" value="LOGIN">
          </li>
        </ul>
        <p>У вас еще нет аккаунта? <router-link to="/register">Регистрация</router-link></p>
        <p><router-link to="/lost-password">Забыли пароль?</router-link></p>
        <p class="error" v-if="error">Please check your data and try again</p>
        <div class="sucess" v-if="sucess">{{sucess_msg}}</div>
        <div class="loader" v-if="loader"></div>
    </form>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  beforeMount(){
    const user_data = JSON.parse( sessionStorage.getItem('USER_DATA') );
    if(user_data){
      this.$router.push('/profile');
    }
  },
  data() {
    return {
      error: false,
      sucess: false,
      sucess_msg: null,
      email: null,
      password: null,
      loader: false,
    };
  },
  methods: {
    formSubmit(e) {
      this.loader = true;
      if(this.email && this.password) {
        const url = '/api/user';
        const data = {
          'email': this.email,
          'password': this.password
        };
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            if(data == false){
              this.error = true;
              this.loader = false;
            } else {
              sessionStorage.setItem('USER_DATA', JSON.stringify(data[0]));
              this.sucess = true;
              this.sucess_msg = data[0].first_name+' '+data[0].last_name+', welcome to LaPlus!'
              setTimeout(()=>{
                this.$store.state.logined = true;
                this.$router.push('/profile');
              }, 1500);
            }
          })
          .catch(err => {
            this.loader = false;
            console.error(err);
          });
      }

      if (!this.email || !this.password) {
        this.error = true;
      }
      setTimeout(() => {
        this.error = false;
        this.sucess = false;
      }, 3000);

      e.preventDefault();
    }
  }
};
</script>
