<template>
  <footer class="main-footer" id="main_footer">
    <div class="container">
    	<div class="row">
    		<div class="col-md-3 col-6">
    			<h4>Контактная информация</h4>
    			<ul>
    				<li><a href="mailto:test@test.ru">test@test.ru</a></li>
    				<li><a href="callto:+87775556699">+8 777 555 66 99</a></li>
    				<li>Указать местоположение</li>
    			</ul>
    		</div>
    		<div class="col-md-3 col-6">
    			<h4>Основные ссылки</h4>
    			<ul>
    				<li><router-link class="link" to="/">Главная</router-link></li>
    				<li><router-link class="link" to="/bonus">Бонусы</router-link></li>
    				<li><router-link class="link" to="/news">Новости</router-link></li>
    				<li><router-link class="link" to="/contacs">Контакты</router-link></li>
    			</ul>
    		</div>
    		<div class="col-md-3 col-6">
    			<h4>Наши игры</h4>
    			<ul>
    				<li>
    					<a href="#">Рулетка</a>
    				</li>
    				<li>
    					<a href="#">Барабан</a>
    				</li>
    				<li>
    					<a href="#">Кости</a>
    				</li>
    				<li>
    					<a href="#">Покер</a>
    				</li>
    			</ul>
    		</div>
    		<div class="col-md-3 col-6">
    			<h4>Социальные сети</h4>
    			<ul>
    				<li>
    					<a href="#">VK.com</a>
    				</li>
    				<li>
    					<a href="#">Instagram</a>
    				</li>
    				<li>
    					<a href="#">Facebook</a>
    				</li>
    				<li>
    					<a href="#">Twitter</a>
    				</li>
    			</ul>
    		</div>
    	</div>
      <p class="copy">(с) 2020. Все права защищены.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
};
</script>
<style lang="scss" scoped>
.main-footer{
	background: #1C2A5F;
	padding-top: 70px;
}
h4{
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: #FFFFFF;
}
ul{
	li{
		margin-top: 30px;
		font-size: 14px;
		line-height: 22px;
		color: #FFFFFF;
	}
}
a{
	font-size: 14px;
	line-height: 22px;
	color: #FFFFFF;
	text-decoration: none;
	position: relative;
	display: block;
	padding-left: 20px;
	&:before{
		content: "❯";
		color: #999999;
		font-size: 12px;
		transition: transform .5s ease;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(0, -50%);
	}
	&:hover{
		&:before{
			transform: translate(10px, -50%);
		}
	}
}
.copy{
	margin-top: 70px;
	border-top: 1px solid #E0E0E0;
	padding: 30px 0;
	font-family: Montserrat;
	font-size: 13px;
	line-height: 21px;
	text-align: center;
	color: #999999;
	text-align: center;
}
</style>