<template>
  <div class="roulette-stadium_num">
    <button @click="stdnumFun" class="active stdnum_btn" data-num="1">1</button>
    <button @click="stdnumFun" class="stdnum_btn" data-num="2">2</button>
    <button @click="stdnumFun" class="stdnum_btn" data-num="3">3</button>
    <button @click="stdnumFun" class="stdnum_btn" data-num="4">4</button>
    <button @click="stdnumFun" class="stdnum_btn" data-num="5">5</button>
  </div>
</template>
<script>
export default {
  name: 'StadiumNums',
  methods: {
    stdnumFun(e){
      const bets = document.querySelectorAll('.stdnum_btn');
      bets.forEach(bet => {
        bet.classList.remove('active');
      });
      e.target.classList.add('active');
      this.$store.state.std_num = Number(e.target.dataset.num);
    },
  }
}
</script>
<style lang="scss" scoped>
.roulette{
  &-stadium_num{
    margin-bottom: 15px;
    max-width: 1055px;
    text-align: center;
    button{
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background: #f2f2f2;
      color: #313130;
      font-size: 24px;
      opacity: .75;
      transition: .25s ease;
      &:not(:first-child){
        margin-left: 15px;
      }
      &:hover{
        opacity: 1;
      }
      &.active{
        transform: scale(1.15);
        opacity: 1;
      }
    }
  }
}
</style>
