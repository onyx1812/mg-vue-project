<template>
	<div class="content content-about">
		<div class="container">
			<div class="box box-one">
				<h1>О КОМПАНИИ</h1>
				<div class="num">1</div>
				<p>LaPlus - это международная компания, которая представлена в сфере разработки и внедрения новых технологий и активно развивается на рынках Западной и Восточной Европы, Азии и США. Постоянное совершенствование технологий предоставления услуг гарантирует:</p>
				<div class="num">2</div>
				<p>На сегодняшний день бренду LaPlus доверяют тысячи клиентов по всему миру. Ежедневно мы предлагаем собственную линию игр собственной разработки с применением новейших технологий на основе artificial intelligence.</p>
			</div>
			<ul class="box box-two">
				<li>
					<img src="@/assets/img/icon-a1.png" alt="">
					надежность и безопасность
				</li>
				<li>
					<img src="@/assets/img/icon-a2.png" alt="">
					быстрые выплаты
				</li>
				<li>
					<img src="@/assets/img/icon-a3.png" alt="">
					поддержку клиентов 24/7
				</li>
				<li>
					<img src="@/assets/img/icon-a4.png" alt="">
					видео общение игроков онлайн
				</li>
				<li>
					<img src="@/assets/img/icon-a5.png" alt="">
					широкий спектр акций и бонусов
				</li>
			</ul>
			<div class="box box-three">
				<div class="row">
					<div class="col-md-9 text-right">Одна из наших главных целей – постоянное развитие и приумножение наших возможностей и услуг, которые мы можем Вам предложить.</div>
					<div class="col-md-3">
						<img src="@/assets/img/bx_bx-target-lock.png" alt="">
					</div>
				</div>
				<p>БЕЗОПАСНОСТЬ И КОНФИДЕНЦИАЛЬНОСТЬ <br> Мы дорожим нашим именем и лояльностью клиентов, которые доверяют нам своё свободное время и средства. Уважая право своих клиентов на конфиденциальность, LaPlus использует самые современные технологии для защиты информации и безопасности данных. Наш сайт надежно защищен от несанкционированного проникновения с внешней стороны. Компания LaPlus использует Вашу личную информацию исключительно для наших с Вами общих интересов. Например, для обработки Ваших ставок, безопасности средств на игровом счету, а также информирования о наших новых возможностях и продуктах. Ваш электронный адрес, который Вы указываете при регистрации, будет использоваться только для получения Вами необходимой информации, сообщений и забытых паролей. Личные данные не предоставляются третьим лицам! Вы, в свою очередь, не должны сообщать кому-либо номер Вашего игрового счета в сети на LaPlus, пароль или любые другие данные. Вместе мы сделаем наше сотрудничество приятным и безопасным. Для того чтобы полностью обезопасить Вас, просим не нарушать указанные правила: • для легальной игры на нашем портале Вам должно быть, как минимум 18 лет; • все клиенты играют только на законных основаниях; • храните свои данные о логине и пароле в безопасном месте, оградите от них несовершеннолетних. Мы в свою очередь придерживаемся таких правил: • наше программное обеспечение безопасно, честно и надежно настроено; • мы выполняем все правила безопасности при администрировании наших игр; • осуществляем регулярный контроль в режиме онлайн, чтобы защитить клиентов от мошеннических действий; • предоставляем техническую поддержку 24/7.</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'About',
};
</script>
<style lang="scss" scoped>
.content-about{
	padding: 0 0 60px;
}
.container{
	display: flex;
	flex-wrap: wrap;
}
h1{
	font-weight: bold;
	font-size: 36px;
	line-height: 53px;
	text-align: center;
	color: #1E3277;
	margin-bottom: 15px;
}
.text-right{
	font-weight: 500;
	font-size: 24px;
	line-height: 158.47%;
	text-align: right;
	color: #1E3277;
}
.num{
	display: block;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 4px solid #1F347D;
	box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.45);
	margin-bottom: 15px;
	font-weight: bold;
	font-size: 48px;
	text-align: center;
	color: #1E3277;
	line-height: 96px;
	margin-left: auto;
	margin-right: auto;
}
p{
	font-size: 18px;
	line-height: 158.47%;
	color: #1E3277;
	margin-bottom: 15px;
}
.box{
	&-one{
		background: #fff;
		flex: 1 50%;
		max-width: 50%;
		padding: 30px;
	}
	&-two{
		flex: 1 50%;
		max-width: 50%;
		padding: 30px 30px 0 30px;
		li{
			font-weight: 500;
			font-size: 24px;
			line-height: 146.28%;
			color: #FFFFFF;
			padding-left: 160px;
			height: 120px;
			position: relative;
			display: flex;
			align-items: center;
			img{
				display: block;
				position: absolute;
				left: 0; top: 50%;
				transform: translate(0, -50%);
			}
		}
	}
	&-three{
		background: #fff;
		flex: 1 100%;
		max-width: 100%;
		padding: 30px;
		border-radius: 0px 30px 30px 30px;
		.row{
			align-items: center;
			justify-content: center;
		}
	}
}
</style>