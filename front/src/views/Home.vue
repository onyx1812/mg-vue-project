<template>
  <div class="content content-home">
    <section class="banner">
    	<div class="container">
    		<h2>laPlus у нас збываются мечты</h2>
    		<router-link class="btn" to="/game">Играть</router-link>
    	</div>
    </section>
    <section class="bonus">
    	<div class="container">
    		<h2>Бонусы LaPlus</h2>
    		<div class="row">
    			<div class="col-sm-4">
    				<img src="@/assets/img/bonus01.png" alt="">
    				<h3>Бонус на первый депозит</h3>
    				<p>При внесении первого депозита на сумму от 50 до 500 долларов, на ваш игровой счет моментально будет зачислен бонус в размер депозита (от 50 до 500 долларов).</p>
    				<a href="#" class="more">подробней</a>
    			</div>
    			<div class="col-sm-4">
    				<img src="@/assets/img/bonus02.png" alt="">
    				<h3>Бонус сегодняшнего дня</h3>
    				<p>Бонус сегодняшнего дня представляет собой увеличение вашего выигрыша в два (2) раза в случае выпадения на барабане числа, соответствующего сегодняшней дате.</p>
    				<a href="#" class="more">подробней</a>
    			</div>
    			<div class="col-sm-4">
    				<img src="@/assets/img/bonus03.png" alt="">
    				<h3>Бонус бесплатные ставки</h3>
    				<p>При выпадении бонуса бесплатные ставки, игрок может распорядится бесплатными ставками на своё усмотрение (сделать ставку возможно на любое поле игры)...</p>
    				<a href="#" class="more">подробней</a>
    			</div>
    		</div>
    	</div>
    </section>
    <section class="packeges">
    	<div class="container">
    		<h2>Наши премиум пакеты</h2>
    		<div class="row">
    			<div class="col-md-3">
    				<h3>Базовый</h3>
    				<div class="price"><sup>₴</sup>500<sub>/месяц</sub></div>
    				<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur odio, exercitationem rerum, earum aperiam minima.</div>
    				<ul class="list">
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    				</ul>
    				<button class="btn btn-purple btn-purple">Купить</button>
    			</div>
    			<div class="col-md-3">
    				<h3>Новичок</h3>
    				<div class="price"><sup>₴</sup>700<sub>/месяц</sub></div>
    				<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur odio, exercitationem rerum, earum aperiam minima.</div>
    				<ul class="list">
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    				</ul>
    				<button class="btn btn-purple btn-purple">Купить</button>
    			</div>
    			<div class="col-md-3">
    				<h3>Составной</h3>
    				<div class="price"><sup>₴</sup>1000<sub>/месяц</sub></div>
    				<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur odio, exercitationem rerum, earum aperiam minima.</div>
    				<ul class="list">
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    				</ul>
    				<button class="btn btn-purple btn-purple">Купить</button>
    			</div>
    			<div class="col-md-3">
    				<h3>Профессионал</h3>
    				<div class="price"><sup>₴</sup>1500<sub>/месяц</sub></div>
    				<div class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur odio, exercitationem rerum, earum aperiam minima.</div>
    				<ul class="list">
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    					<li>Lorem ipsum dolor.</li>
    				</ul>
    				<button class="btn btn-purple btn-purple">Купить</button>
    			</div>
    		</div>
    	</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted(){
  	document.getElementById('app').classList = 'Home';
  }
};
</script>
<style lang="scss" scoped>
	#main_header{
		background: #000;
	}
	.banner{
		background: url('../assets/img/main-bg.png') no-repeat center/cover;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding-top: 100px;
		padding-bottom: 100px;
		text-align: center;
		h2{
			font-weight: 800;
			font-size: 48px;
			line-height: 64px;
			text-align: center;
			color: #FFFFFF;
			margin-bottom: 60px;
		}
	}
	.bonus{
		padding: 60px 0;
		background: url('../assets/img/bonus-bg.png') no-repeat center/cover;
		img{
			display: block;
			width: 100%;
			margin-bottom: 30px;
			box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.85);
			border-radius: 10px;
		}
		h2{
			font-weight: bold;
			font-size: 36px;
			line-height: 53px;
			text-align: center;
			color: #FFFFFF;
			margin-bottom: 75px;
		}
		h3{
			font-weight: 600;
			font-size: 18px;
			line-height: 22px;
			color: #FF7979;
			margin-bottom: 30px;
		}
		p{
			font-size: 16px;
			line-height: 25px;
			color: #FFFFFF;
			margin-bottom: 70px;
		}
		.more{
			background: #FFFFFF;
			box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
			border-radius: 21px;
			font-weight: 500;
			font-size: 16px;
			color: #1E306D;
			width: 165px;
			height: 50px;
			line-height: 50px;
			text-decoration: none;
			text-align: center;
			display: block;
			margin-left: auto;
			margin-right: auto;

		}
	}
	.packeges{
		background: url('../assets/img/packeges-bg.png') no-repeat center center/cover;
		padding: 60px 0 200px;
		.row{
			position: relative;
			&:before{
				content:"";
				position: absolute;
				z-index: 0;
				left: -2500px;
				right: -2500px;
				top: 50%;
				background: rgba(255, 255, 255, 0.3);
				backdrop-filter: blur(27px);
				height: 70%;
				transform: translate(0, -50%);
			}
		}
		h2{
			width: 420px;
			height: 95px;
			line-height: 95px;
			font-weight: bold;
			font-size: 24px;
			text-align: center;
			color: #FFFFFF;
			background: rgba(196, 196, 196, 0.3);
			backdrop-filter: blur(15px);
			border-radius: 30px;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 65px;
		}
		.col-md-3{
			position: relative;
			z-index: 2;
			padding-top: 20px;
			padding-bottom: 38px;
			&:before{
				content:"";
				display: block;
				background: #FFFFFF;
				border-radius: 10px;
				box-shadow: 0px 4px 54px rgba(0, 0, 0, 0.5);
				position: absolute;
				left: 15px; right: 15px;
				top: 0; height: 100%;
				z-index: -1;
			}
			h3{
				font-weight: 600;
				font-size: 24px;
				line-height: 146.28%;
				text-align: center;
				color: #0B1B45;
				margin-bottom: 8px;
			}
			.price{
				font-weight: 600;
				font-size: 24px;
				line-height: 146.28%;
				text-align: center;
				color: #0B1B45;
				margin-bottom: 25px;
				sup{
					font-size: 55%;
					position: relative;
					top: -5px;
					margin-right: 5px;
				}
				sub{
					font-size: 55%;
					margin-left: 5px;
				}
			}
			.desc{
				padding: 15px;
				box-shadow: inset 0px 8px 14px rgba(0, 0, 0, 0.25);
				font-size: 16px;
				text-align: center;
				letter-spacing: 0.03em;
			}
			.list{
				padding: 0 30px;
				margin-bottom: 40px;
				li{
					font-size: 16px;
					line-height: 50px;
					height: 50px;
					display: block;
					text-align: center;
					letter-spacing: 0.03em;
					border-bottom-width: 1px;
					border-bottom-style: solid;
				}
			}
			.btn{
				width: 128px;
				height: 35px;
				line-height: 35px;
				font-weight: 500;
				font-size: 16px;
				text-align: center;
				letter-spacing: 0.03em;
				border: none;
				margin-left: auto;
				margin-right: auto;
				display: block;
				border-radius: 8px;
			}
			&:nth-child(1){
				.desc, .btn{
					background: #B7AAFF;
					color: #0B1B45;
				}
				.list{
					li{
						border-color: #B7AAFF;
					}
				}
			}
			&:nth-child(2){
				.desc, .btn{
					background: #8C76FF;
					color: #0B1B45;
				}
				.list{
					li{
						border-color: #8C76FF;
					}
				}
			}
			&:nth-child(3){
				.desc, .btn{
					background: #6A4EFF;
					color: #D1DEFF;
				}
				.list{
					li{
						border-color: #6A4EFF;
					}
				}
			}
			&:nth-child(4){
				.desc, .btn{
					background: #4623FF;
					color: #FFFFFF;
				}
				.list{
					li{
						border-color: #4623FF;
					}
				}
			}
		}
	}
</style>