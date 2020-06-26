<template>
  <div class="content content-login">
    <div class="container">
      <form @submit="formSubmit" id="login" class="form form-balance">
        <h2>Update Balance</h2>
        <ul class="fields">
          <li>
            <ul class="row">
              <li class="col">
                <span class="field">
                  <label for="amount">Amount:</label>
                  <input type="number" inputmode="numeric" name="amount" id="amount" v-model="amount" placeholder="100" minlength="1" required>
                </span>
              </li>
              <li class="col">
                <span class="field">
                  <label for="currency">Currency:</label>
                  <select name="currency" id="currency" v-model="currency" required>
                    <option value="USD">United States (US)</option>
                    <option value="UAH" selected>Ukraine (UA)</option>
                    <option value="RUB">Russian (RU)</option>
                    <option value="EUR">EUROPEAN UNION</option>
                    <option value="GBP">United Kingdom (GB)</option>
                  </select>
                </span>
              </li>
            </ul>
          </li>
          <li class="field">
            <label for="card_number">Card number:</label>
            <input type="text" @input="cnValid" inputmode="numeric" name="card_number" id="card_number" v-model="card_number" placeholder="4111 1111 1111 1111" minlength="19" maxlength="19" required>
          </li>
          <li>
            <ul class="row">
              <li class="col">
                <span class="field">
                  <label for="expiry_month">Month:</label>
                  <input type="text" @input="numValid" inputmode="numeric" name="expiry_month" id="expiry_month" v-model="expiry_month" placeholder="10" minlength="2" maxlength="2" required>
                </span>
              </li>
              <li class="col">
                <span class="field">
                  <label for="expiry_year">Year:</label>
                  <input type="text" @input="numValid" inputmode="numeric" name="expiry_year" id="expiry_year" v-model="expiry_year" placeholder="25" minlength="2" maxlength="2" required>
                </span>
              </li>
              <li class="col">
                <span class="field">
                  <label for="card_code">CVV:</label>
                  <input type="text" @input="numValid" inputmode="numeric" name="card_code" id="card_code" v-model="card_code" placeholder="123" minlength="3" maxlength="4" required>
                </span>
              </li>
            </ul>
          </li>
          <li class="field">
            <input type="submit" value="SUBMIT">
          </li>
        </ul>
        <div class="error" v-if="error">{{error_msg}}</div>
        <div class="sucess" v-if="sucess">{{sucess_msg}}</div>
        <div class="loader" v-if="loader"></div>
    </form>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
const user_data = JSON.parse( sessionStorage.getItem('USER_DATA') );
export default {
  beforeMount(){
    if(!user_data){
      // this.$router.push('/login');
    }
  },
  data() {
    return {
      error: false,
      error_msg: null,
      sucess: false,
      sucess_msg: null,
      loader: false,
      card_number: null,
      expiry_month: null,
      expiry_year: null,
      card_code: null,
      amount: 100,
      currency: 'UAH',
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      const date = new Date();
      const time = date.getTime();
      const orderID = user_data.ID + time;
      this.loader = true;
      if( this.card_number && this.expiry_month && this.expiry_year && this.card_code ) {
        const url = '/api/payment/stripe';
        const data = {
          card_number: this.card_number,
          expiry_month: this.expiry_month,
          expiry_year: this.expiry_year,
          card_code: this.card_code,
          address: user_data.address,
          city: user_data.city,
          country: user_data.country,
          state: user_data.country,
          email: user_data.email,
          first_name: user_data.first_name,
          last_name: user_data.last_name,
          phone: user_data.phone,
          postal_code: '54058',
          amount: this.amount,
          currency: this.currency,
          order_id: 'Order #'+orderID,
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
            this.loader = false;
            console.log(data);
            // const user_data = JSON.parse( sessionStorage.getItem('USER_DATA') );
          })
          .catch(err => {
            this.loader = false;
            console.error(err);
            alert(err);
          });
      }

      if (!this.email || !this.password) {
        this.error = true;
      }
      setTimeout(() => {
        this.error = false;
        this.sucess = false;
      }, 3000);

    },
    cnValid(e){
      const arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      if(arr.length > 4) arr.splice(4, 0, ' ');
      if(arr.length > 9) arr.splice(9, 0, ' ');
      if(arr.length > 14) arr.splice(14, 0, ' ');
      this.card_number = arr.toString().replace(/[,]/g, '');
    },
    numValid(e){
      this.expiry_month = e.target.value.replace(/[^\dA-Z]/g, '');
    }
  }
};
</script>
