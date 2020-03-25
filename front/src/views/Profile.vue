<template>
  <div class="content content-profile">
    <div class="container">
      <h1>Profile</h1>
      <form @submit="formSubmit" class="form form-profile">
        <ul class="fields">
          <li class="field">
            <span>{{ data.user_email }}</span>
            <label>Email:</label>
          </li>
          <li class="field">
            <span>{{ date }}</span>
            <label>Registration date:</label>
          </li>
          <li class="field">
            <span>{{ data.user_role === 1 ? 'admin' : 'gamer' }}</span>
            <label>User role:</label>
          </li>
          <li class="field">
            <p>You can update this data:</p>
          </li>
          <li class="field">
            <input type="text" :value="data.user_name" name="user_name">
            <label>Name:</label>
          </li>
          <li class="field">
            <input type="text" :value="data.user_login" name="user_login">
            <label>Login:</label>
          </li>
          <li class="field">
            <input type="submit" value="UPDATE">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    beforeMount(){
      const user_data = JSON.parse( sessionStorage.getItem('USER_DATA') );
      if(user_data){
        this.data = user_data;
        const newDate = new Date( Date.parse(user_data.user_registered) );
        this.date = newDate.getDay()+'/'+newDate.getMonth()+'/'+newDate.getFullYear();
      } else {
        this.$router.push('/login');
      }
    },
    data(){
      return {
        data: [],
        date: null,
      }
    },
    methods: {
      formSubmit(e){
        console.log(this);
      }
    },
  }
</script>
