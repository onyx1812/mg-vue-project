<template>
	<div class="content content-faq">
		<div class="container">
			<h1>Frequently Asked Questions</h1>
			<div class="faq" @click="showAnswer">
				<div class="question">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, maxime!?</div>
				<div class="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus delectus, provident hic perferendis alias quia assumenda cum beatae quod quasi.</div>
			</div>
			<div class="faq active" @click="showAnswer">
				<div class="question">Lorem ipsum consectetur adipisicing elit. Expedita, maxime!?</div>
				<div class="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dignissimos ea nisi neque ipsum consequuntur aspernatur voluptate, harum. Natus, earum, fuga! Voluptates quos aspernatur, velit? Provident deleniti odio eum vitae magnam, dolorum officiis dolorem nemo voluptates sequi esse, fugiat velit!</div>
			</div>
			<div class="faq" @click="showAnswer">
				<div class="question">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, maxime!?</div>
				<div class="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus delectus, provident hic perferendis alias quia assumenda cum beatae quod quasi.</div>
			</div>
			<div class="faq" @click="showAnswer">
				<div class="question">Lorem ipsum consectetur adipisicing elit. Expedita, maxime!?</div>
				<div class="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dignissimos ea nisi neque ipsum consequuntur aspernatur voluptate, harum. Natus, earum, fuga! Voluptates quos aspernatur, velit? Provident deleniti odio eum vitae magnam, dolorum officiis dolorem nemo voluptates sequi esse, fugiat velit!</div>
			</div>
			<div class="faq" @click="showAnswer">
				<div class="question">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, maxime!?</div>
				<div class="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus delectus, provident hic perferendis alias quia assumenda cum beatae quod quasi.</div>
			</div>
			<div class="faq" @click="showAnswer">
				<div class="question">Lorem ipsum consectetur adipisicing elit. Expedita, maxime!?</div>
				<div class="answer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dignissimos ea nisi neque ipsum consequuntur aspernatur voluptate, harum. Natus, earum, fuga! Voluptates quos aspernatur, velit? Provident deleniti odio eum vitae magnam, dolorum officiis dolorem nemo voluptates sequi esse, fugiat velit!</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'FAQ',
  methods: {
    showAnswer(e) {
    	e.target.parentNode.classList.toggle('active');
    }
  }
};
</script>
<style lang="scss" scoped>
.content-faq{
	padding-top: 60px;
	padding-bottom: 60px;
}
.faq{
	background: #fff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
	color: #1E3277;
	border-radius: 4px;
	margin-bottom: 30px;
	max-width: 800px;
	margin-left: auto;
	margin-right: auto;
	&.active{
		.answer{
			max-height: 1000px;
			opacity: 1;
			visibility: visible;
			padding-bottom: 15px;
		}
		.question{
			&:before{
				transform: translate(0, -50%) rotate(45deg);
			}
		}
	}
}
.question{
	font-size: 18px;
	font-weight: 600;
	position: relative;
	padding-left: 15px;
	padding-right: 30px;
	padding-top: 15px;
	padding-bottom: 15px;
	cursor: pointer;
	&:before{
		content: "+";
		font-size: 50px;
		font-weight: 400;
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translate(0, -50%);
		transition: .5s ease;
	}
}
.answer{
	font-size: 16px;
	line-height: 1.5;
	padding-left: 30px;
	padding-right: 30px;
	max-height: 0px;
	opacity: 0;
	visibility: hidden;
	overflow: hidden;
	transition: 1s ease;
}
</style>