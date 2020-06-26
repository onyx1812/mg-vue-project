<template>
	<div class="content content-games">
		<div class="game game-one">
			<div class="container">
				<h2>Рулетка</h2>
				<p>Бонус сегодняшнего дня представляет собой увеличение вашего выигрыша в два (2) раза в случае выпадения на барабане числа, соответствующего сегодняшней дате. Пересчет выигрыша будет произведен автоматически, и средства поступят на Ваш игровой счёт</p>
				<router-link class="btn btn-blue" to="/game">Играть</router-link>
			</div>
		</div>
		<div class="game game-two">
			<div class="container">
				<h2>Рулетка</h2>
				<p>Бонус сегодняшнего дня представляет собой увеличение вашего выигрыша в два (2) раза в случае выпадения на барабане числа, соответствующего сегодняшней дате. Пересчет выигрыша будет произведен автоматически, и средства поступят на Ваш игровой счёт</p>
				<router-link class="btn btn-blue" to="/game">Играть</router-link>
			</div>
		</div>
		<div class="game game-three">
			<div class="container">
				<h2>Рулетка</h2>
				<p>Бонус сегодняшнего дня представляет собой увеличение вашего выигрыша в два (2) раза в случае выпадения на барабане числа, соответствующего сегодняшней дате. Пересчет выигрыша будет произведен автоматически, и средства поступят на Ваш игровой счёт</p>
				<router-link class="btn btn-blue" to="/game">Играть</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Games',
};
</script>
<style lang="scss" scoped>
.content-games{
	background: url('../assets/img/games-bg.png') no-repeat center center/cover;
	padding: 100px 0;
}
.game{
	background-repeat: no-repeat;
	background-position: center center;
	background-size: auto 100%;
	min-height: 600px;
	display: flex;
	align-items: center;
	&:not(:first-child){
		margin-top: 50px;
	}
	&-one{
		background-image: url('../assets/img/game1.png');
	}
	&-two{
		background-image: url('../assets/img/game2.png');
	}
	&-three{
		background-image: url('../assets/img/game3.png');
	}
	h2{
		margin-bottom: 30px;
		font-size: 30px;
		font-weight: 700;
		color: #fff;
	}
	p{
		font-size: 14px;
		line-height: 17px;
		color: #FFFFFF;
		width: 360px;
		margin-bottom: 30px;
	}
	.btn{
		background: #4985FF;
		box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);
		border-radius: 30px;
		font-weight: 600;
		font-size: 24px;
		height: 80px;
		line-height: 80px;
		color: #FFFFFF;
		width: 360px;
	}
}
</style>