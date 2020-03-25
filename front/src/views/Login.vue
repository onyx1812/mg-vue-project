<template>
  <div class="content content-login">
    <div class="container">
      <h1>Login page</h1>
      <form @submit="formSubmit" id="login" class="form form-login">
        <ul class="fields">
          <li class="field">
            <input type="email" name="user_email" v-model="user_email" placeholder="Email" >
          </li>
          <li class="field">
            <input type="password" name="user_pass" v-model="user_pass" placeholder="Password" >
          </li>
          <li class="field">
            <input type="submit" value="LOGIN">
          </li>
        </ul>
        <p>Don't have an account yet? <router-link to="/register">Register now</router-link></p>
        <p class="error" v-if="error">Please check your data and try again</p>
        <p class="sucess" v-if="sucess">{{sucess}}</p>
    </form>
    </div>
  </div>
</template>

<script>
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
      user_email: null,
      user_pass: null,
    };
  },
  methods: {
    formSubmit(e) {
      if(this.user_email && this.user_pass) {
        const url = '/api/user';
        const data = {
          'user_email': this.user_email,
          'user_pass': this.user_pass
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
            } else {
              sessionStorage.setItem('USER_DATA', JSON.stringify(data[0]));
              this.sucess = data[0].user_name+', welcome back!'
              setTimeout(()=>{
                this.$router.push('/profile')
              }, 3000);
            }
          })
          .catch(err => {
            console.error(err);
          });
      }

      if (!this.user_email || !this.user_pass) {
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
