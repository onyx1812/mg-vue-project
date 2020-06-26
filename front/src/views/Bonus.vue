<template>
	<div class="content content-bonus" data-slide="one">
		<div class="container">
			<button @click="nextSlide" class="btn btn-next">NEXT SLIDE</button>
			<button @click="prevSlide" class="btn btn-prev">PREV SLIDE</button>
			<div class="slider">
				<div class="slide slide_one" data-slide="one">
					<div class="chance">your<br>chance</div>
					<div class="special">Special for you</div>
					<div class="red">
						<h3>Бонус на <br> первый депозит</h3>
						<div class="white">При внесении первого депозита на сумму от 50 до 500 долларов, на ваш игровой счет моментально будет зачислен бонус в размер депозита (от 50 до 500 долларов).</div>
						<div class="transparent">Обращаем Ваше внимание на то, что «бонус на первый депозит» действует исключительно для новых, ранее не регистрировавшихся клиентов нашего веб-сайта.</div>
						<button class="btn btn-white">Пополнить счёт</button>
					</div>
				</div>
				<div class="slide slide_two" data-slide="two">
					<div class="chance">your<br>chance</div>
					<div class="red red-one">
						Бонус сегодняшнего дня представляет собой увеличение вашего выигрыша в два (2) раза в случае выпадения на барабане числа, соответствующего сегодняшней дате. Пересчет выигрыша будет произведен автоматически, и средства поступят на Ваш игровой счёт
						<div class="special">let’s do it!</div>
						<h3>Бонус <br> сегодняшнего <span>дня</span></h3>
					</div>
					<div class="red red-two">
						Например, сегодня 31 декабря 2019 года, и Вы ставите ставку, которая включает в себя 31-й номер (31 черное), в случае выпадения на барабане 31-го номера, Ваш выигрыш удваивается. В случае если ставка будет включать в себе любой другой выигрышный номер, на ваш счет будет зачислена сумма в соответствии с таблицей ставок и выплат.
						<button class="btn btn-white">Пополнить счёт</button>
					</div>
				</div>
				<div class="slide slide_three" data-slide="three">
					<div class="chance">your<br>chance</div>
					<div class="red red-one">Best proposition</div>
					<div class="red red-two">
						<div class="special">ipsum dolor sit amet</div>
						<h3>Бонус</h3>
						<p>При выпадении бонуса бесплатные ставки, игрок может распорядится бесплатными ставками на своё усмотрение (сделать ставку возможно на любое поле игры), в случае выигрыша, на счёт игрока будет зачислена сумма в соответствии с таблицей ставок и выплат.</p>
						<span>бесплатные <br> ставки</span>
						<button class="btn btn-white">Поставить</button>
					</div>
					<div class="red red-three">
						Обращаем Ваше внимание на то, что в случае выигрыша игроком с бонуса бесплатные ставки, средства, которые поступают на игровой счёт, необходимо «переиграть» и они не подлежат к мгновенной выплате. <br><br> «Переиграть» - означает, общее количество ставок на игровом поле за один сеанс, должно превышать сумму выигрыша с бонуса бесплатные ставки в двести (200) раз.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Bonus',
	methods: {
		nextSlide(e){
			const slide_active = document.querySelector('.slide-active');
			setTimeout( ()=>{
				if( slide_active.nextElementSibling ){
					slide_active.nextElementSibling.classList.add('slide-active');
					document.querySelector('.content-bonus').dataset.slide = slide_active.nextElementSibling.dataset.slide;
				} else {
					document.querySelector('.slide:first-child').classList.add('slide-active');
					document.querySelector('.content-bonus').dataset.slide = 'one';
				}
			}, 0);
			slide_active.classList.remove('slide-active');
		},
		prevSlide(e){
			const slide_active = document.querySelector('.slide-active');
			setTimeout( ()=>{
				if( slide_active.previousElementSibling ){
					slide_active.previousElementSibling.classList.add('slide-active');
					document.querySelector('.content-bonus').dataset.slide = slide_active.previousElementSibling.dataset.slide;
				} else {
					document.querySelector('.slide:last-child').classList.add('slide-active');
					document.querySelector('.content-bonus').dataset.slide = document.querySelector('.slide:last-child').dataset.slide;
				}
			}, 0);
			slide_active.classList.remove('slide-active');
		}
	},
	mounted(){
		document.querySelector('.slide:first-child').classList.add('slide-active');
	},
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
.content-bonus{
	padding: 30px 0;
	height: calc(100vh - 127px);
	position: relative;
	background: url('../assets/img/page-bonus-bg.png') no-repeat center center/cover;
	display: flex;
	align-items: center;
	justify-content: center;
	&[data-slide="one"]{
		background-image: url('../assets/img/page-bonus-bg.png');
	}
	&[data-slide="two"]{
		background-image: url('../assets/img/page-bonus-bg-2.png');
	}
	&[data-slide="three"]{
		background-image: url('../assets/img/page-bonus-bg-3.png');
	}
}
.container{
	position: relative;
	// padding: 30px 0 230px;
}
.slider{
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
}
.slide{
	opacity: 0;
	visibility: hidden;
	z-index: 1;
	max-height: 0px;
	color: #fff;
	width: 100%;
	overflow: hidden;
	&-active{
		opacity: 1;
		visibility: visible;
		max-height: 3000px;
		height: calc(100vh - 200px);
	}
	&_one{
		.chance{
			font-size: 34px;
			line-height: 42px;
			text-align: center;
			color: #FFFFFF;
			font-family: Staatliches;
			width: 150px;
			margin-bottom: 60px;
		}
		.red{
			background: rgba(255, 0, 0, 0.2);
			box-shadow: 0px 0px 4px rgba(139, 19, 19, 0.25);
			backdrop-filter: blur(20px);
			border-radius: 0px 20px 0px 0px;
			position: relative;
			width: 653px;
			height: 315px;
			overflow: hidden;
		}
		.special{
			// margin-top: 250px;
			margin-bottom: 15px;
			margin-left: 350px;
			font-size: 24px;
			line-height: 30px;
			color: #FFFFFF;
			text-transform: uppercase;
			font-family: Staatliches;
			transition: .5s ease;
			transform: translateX(50%);
			opacity: 0;
			&:before{
				content:"";
				height: 4px;
				width: 97px;
				background: #fff;
				margin-right: 10px;
				display: inline-block;
				vertical-align: middle;
			}
		}
		.white{
			width: 300px;
			height: 115px;
			font-weight: 500;
			font-size: 14px;
			line-height: 17px;
			text-align: right;
			color: #000000;
			padding: 15px 15px 15px 5px;
			background: #fff;
			display: inline-block;
			vertical-align: top;
			transition: .5s ease;
			transform: translateX(-100%);
			opacity: 0;
		}
		.transparent{
			width: 300px;
			height: 115px;
			display: inline-block;
			padding: 5px 5px 15px 15px;
			transition: .5s ease;
			transform: translateX(100%);
			opacity: 0;
		}
		h3{
			font-weight: 900;
			font-size: 48px;
			line-height: 1;
			color: #FFFFFF;
			padding-left: 30px;
			margin-bottom: 30px;
			transition: 1s ease;
			transform: translateX(-50%);
			opacity: 0;
		}
		.btn{
			display: inline-block;
			font-weight: 500;
			font-size: 18px;
			line-height: 22px;
			color: #000000;
			background: #FFFFFF;
			border-radius: 10px 0px 0px 10px;
			height: 46px;
			width: 190px;
			position: absolute;
			right: 0;
			bottom: 20px;
			transition: .5s ease;
			transform: translateX(100%);
			opacity: 0;
		}
		&.slide-active{
			.special, h3, .btn, .white, .transparent{
				transform: translateX(0%);
				opacity: 1;
			}
		}
	}
	&_two{
		.special{
			font-size: 24px;
			line-height: 30px;
			text-align: right;
			color: #FFFFFF;
			text-transform: uppercase;
			font-family: Staatliches;
			position: absolute;
			top: 0;
			left: 100%;
			width: 220px;
			transition: 1s ease;
			transform: translateX(100%);
			opacity: 0;
			&:before{
				content:"";
				height: 4px;
				width: 97px;
				background: #fff;
				margin-right: 10px;
				display: inline-block;
				vertical-align: middle;
			}
		}
		.chance{
			font-size: 34px;
			line-height: 42px;
			text-align: center;
			color: #FFFFFF;
			font-family: Staatliches;
			width: 150px;
			margin-bottom: 100px;
		}
		.btn{
			display: inline-block;
			font-weight: 500;
			font-size: 18px;
			line-height: 22px;
			color: #000000;
			background: #FFFFFF;
			border-radius: 10px 0px 0px 10px;
			height: 46px;
			width: 190px;
			position: absolute;
			right: 0;
			bottom: 20px;
			transition: .5s ease;
			transform: translateX(100%);
			opacity: 0;
		}
		.red{
			font-size: 14px;
			line-height: 17px;
			color: #FFFFFF;
			background: rgba(255, 0, 0, 0.1);
			backdrop-filter: blur(15px);
			position: relative;
			&-one{
				width: 360px;
				padding: 60px 30px 0 60px;
				// margin-top: 250px;
				z-index: 1;
				color: transparent;
				transition: color 2s ease;
			}
			&-two{
				max-width: 1000px;
				padding: 45px 300px 30px 60px;
				overflow: hidden;
				color: transparent;
				transition: color 2s ease;
			}
		}
		h3{
			font-weight: 600;
			font-size: 72px;
			line-height: 72px;
			color: #FFFFFF;
			display: block;
			position: absolute;
			left: calc(100% + 15px);
			top: 60px;
			transition: 1s ease;
			transform: translateX(100%);
			opacity: 0;
			span{
				display: block;
				position: absolute;
				right: 0;
				top: 100%;
			}
		}
		&.slide-active{
			.special, h3, .btn, .white, .transparent{
				transform: translateX(0%);
				opacity: 1;
			}
			.red{
				color: #fff;
			}
		}
	}
	&_three{
		.chance{
			font-size: 34px;
			line-height: 42px;
			text-align: center;
			color: #FFFFFF;
			font-family: Staatliches;
			width: 150px;
			margin-bottom: 30px;
		}
		.special{
			font-size: 24px;
			line-height: 30px;
			text-align: right;
			color: #FFFFFF;
			text-transform: uppercase;
			font-family: Staatliches;
			position: absolute;
			top: 15px;
			left: 25%;
			width: 290px;
			transition: .5s ease .5s;
			transform: translateX(100%);
			opacity: 0;
			&:before{
				content:"";
				height: 4px;
				width: 97px;
				background: #fff;
				margin-right: 10px;
				display: inline-block;
				vertical-align: middle;
			}
		}
		.red{
			color: #FFFFFF;
			background: rgba(255, 0, 0, 0.2);
			box-shadow: 0px 0px 4px rgba(139, 19, 19, 0.25);
			backdrop-filter: blur(20px);
			position: relative;
			font-size: 14px;
			line-height: 17px;
			text-align: center;
			color: #FFFFFF;
			p{
				font-size: 12px;
				padding-left: 15px;
				padding-right: 15px;
			}
			&-one{
				// margin-top: 150px;
				font-size: 48px;
				line-height: 60px;
				color: #FFFFFF;
				padding: 10px 0;
				font-family: Staatliches;
				width: 330px;
				text-align: center;
				margin-bottom: 30px;
				transition: 1s ease;
				transform: translateX(100%);
				opacity: 0;
			}
			&-two{
				text-align: center;
				width: 360px;
				margin-left: 150px;
				padding-top: 30px;
				padding-bottom: 30px;
				margin-bottom: 30px;
				transition: 1s ease .25s;
				transform: translateX(100%);
				opacity: 0;
				h3{
					font-weight: 600;
					font-size: 80px;
					line-height: 90px;
					text-align: center;
					color: #FFFFFF;
					transition: 1s ease .5s;
					transform: translateX(100%);
					opacity: 0;
				}
				.btn{
					display: inline-block;
					font-weight: 500;
					font-size: 18px;
					line-height: 22px;
					color: #000000;
					background: #FFFFFF;
					border-radius: 10px 0px;
					height: 46px;
					width: 190px;
					position: absolute;
					left: calc(100% + 200px);
					top: 0px;
					transition: .5s ease .75s;
					transform: translateX(100%);
					opacity: 0;
				}
				span{
					font-weight: bold;
					font-size: 40px;
					line-height: 50px;
					color: #FFFFFF;
					text-align: left;
					display: block;
					position: absolute;
					left: calc(100% + 30px);
					top: 60px;
					transition: 1s ease .5s;
					transform: translateX(100%);
					opacity: 0;
				}
			}
			&-three{
				width: 400px;
				margin-left: 500px;
				padding: 15px;
				transition: 1s ease .5s;
				transform: translateX(100%);
				opacity: 0;
				font-size: 12px;
			}
		}
		&.slide-active{
			.red{
				transform: translateX(0%);
				opacity: 1;
				&-two{
					.special, h3, .btn, span{
						transform: translateX(0%);
						opacity: 1;
					}
				}
			}
		}
	}
}
.btn{
	background: none;
	border: none;
	box-shadow: none;
	font-size: 24px;
	line-height: 30px;
	text-align: center;
	color: #FFFFFF;
	position: absolute;
	width: auto;
	height: auto;
	z-index: 10;
	&-next{
		right: 15px;
		top: 15px;
		&:after{
			content:"❯";
			margin-left: 30px;
		}
	}
	&-prev{
		left: 15px;
		bottom: 15px;
		&:before{
			content:"❮";
			margin-right: 30px;
		}
	}
}
</style>