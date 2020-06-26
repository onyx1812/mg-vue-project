<template>
	<div class="content content-contacts">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<img src="@/assets/img/mail-icon.png" alt="" width="70%">
				</div>
				<div class="col-md-6">
					<form @submit="formSubmit" id="login" class="form form-login">
						<h2>Contact Us</h2>
						<ul class="fields">
							<li>
								<ul class="row">
									<li class="col-md-6">
										<input type="text" name="first_name" v-model="first_name" placeholder="First name" >
									</li>
									<li class="col-md-6">
										<input type="text" name="last_name" v-model="last_name" placeholder="Last name" >
									</li>
								</ul>
							</li>
							<li class="field">
								<input type="email" name="email" v-model="email" placeholder="Email" >
							</li>
							<li class="field">
								<textarea name="msg" id="msg" v-model="msg" placeholder="Message"></textarea>
							</li>
							<li class="field">
								<input type="submit" value="SEND">
							</li>
						</ul>
						<div class="error" v-if="error">{{error_msg}}</div>
						<div class="sucess" v-if="sucess">{{sucess_msg}}</div>
						<div class="loader" v-if="loader"></div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contacts',
	beforeMount(){
		const user_data = JSON.parse( sessionStorage.getItem('USER_DATA') );
		if(user_data){
			this.$router.push('/profile');
		}
	},
	data() {
		return {
			error: false,
			error_msg: false,
			sucess: false,
			sucess_msg: null,
			first_name: null,
			last_name: null,
			email: null,
			msg: null,
			loader: false,
		}
	},
	methods: {
		formSubmit(e) {
			e.preventDefault();
			this.loader = true;
			console.log(first_name);
			console.log(last_name);
			console.log(email);
			console.log(msg);
		}
	}
}
</script>
<style lang="scss" scoped>
.row{
	align-items: center;
	img{
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
}
</style>