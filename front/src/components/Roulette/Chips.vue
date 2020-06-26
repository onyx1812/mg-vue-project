<template>
  <div class="roulette-chips">
    <button class="bet" v-for="(bet, index) in bets_el" :name="bet" :class="{active: index === bets_active}" @click="betFun"></button>
  </div>
</template>
<script>
export default {
  name: 'Chips',
  data(){
    return{
      bets_active: 0,
      bets_el: ["0.05", "0.10", "0.25", "0.50", "1", "5"],
      bets_children: [],
    }
  },
  mounted() {
    this.bets_children = this.$el.childNodes;
  },
  methods: {
    betFun(e){
      this.$store.state.bet = Number(e.target.name).toFixed(2);
      this.bets_children.forEach((tab, index) => {
        if(tab.name == e.target.name){
          this.bets_active = index;
        }
      });
    },
  }
}
</script>
<style lang="scss" scoped>
.roulette{
  &-chips{
    position: absolute;
    right: 0; bottom: 30px;
    width: 90px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 100px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
.bet{
  width: 67px;
  height: 67px;
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 100% 100%;
  border-radius: 50%;
  border: none;
  box-shadow: none;
  padding: 0;
  display: block;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: .5;
  transition: .25s ease;
  &:not(:first-child){
    margin-top: 7.5px;
  }
  &[name="0.05"]{background-image: url('../../assets/img/icon-0_05.png');}
  &[name="0.10"]{background-image: url('../../assets/img/icon-0_10.png');}
  &[name="0.25"]{background-image: url('../../assets/img/icon-0_25.png');}
  &[name="0.50"]{background-image: url('../../assets/img/icon-0_50.png');}
  &[name="1"]{background-image: url('../../assets/img/icon-1.png');}
  &[name="5"]{background-image: url('../../assets/img/icon-5.png')}
  &:hover{
    opacity: 1;
  }
  &.active{
    transform: scale(1.1);
    opacity: 1;
  }
}
</style>
