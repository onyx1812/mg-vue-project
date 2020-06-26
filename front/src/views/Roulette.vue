<template>
  <div class="content content-game">
    <div class="roulette-left">
      <Menu />
      <Spin />
      <Totals />
    </div>
    <div class="roulette-right">
      <StadiumNums />
      <Stadium />
      <Table />
      <Chips />
      <Story />
    </div>
    <Bets />
  </div>
</template>
<script>
import Story from '../components/Roulette/Story.vue'
import Bets from '../components/Roulette/Bets.vue'
import Spin from '../components/Roulette/Spin.vue'
import Table from '../components/Roulette/Table.vue'
import Menu from '../components/Roulette/Menu.vue'
import Totals from '../components/Roulette/Totals.vue'
import Chips from '../components/Roulette/Chips.vue'
import StadiumNums from '../components/Roulette/StadiumNums.vue'
import Stadium from '../components/Roulette/Stadium.vue'
import {mapState} from 'vuex'
export default{
  components: {
    Story,
    Bets,
    Table,
    Spin,
    Menu,
    Totals,
    Chips,
    StadiumNums,
    Stadium
  }
}
</script>
<style lang="scss" scoped>
.content-game{
  min-width: 1920px;
  min-height: calc(100vh - 127px);
  overflow-y: auto;
  background: url('../assets/img/table-bg.png') no-repeat center center/100% 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.roulette{
  &-left{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: url('../assets/img/roulette-left-bg.png') no-repeat 0 0/ 100% 100%;
    width: 580px;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 4px 34px rgba(0, 0, 0, 0.55);
    font-family: 'Roboto';
    z-index: 2;
    &:after{
      background: #FFFFFF;
      opacity: 0.3;
      backdrop-filter: blur(4px);
      height: 90px;
      width: 100%;
      content: "";
      position: absolute;
      left: 0; bottom: 0;
      z-index: 1;
    }
  }
  &-right{
    position: relative;
    z-index: 1;
    display: block;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    width: calc(100% - 580px);
    margin-left: 580px;
    max-width: 1190px;
    height: 762px;
  }
}

.std{
  cursor: pointer;
  &.hover{
    opacity: .6;
    &.current{
      opacity: .3;
    }
  }
  &.active{
    opacity: .2;
  }
}

.bet{
  width: 95px;
  height: 95px;
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
    margin-top: 15px;
  }
  &-0_05{background-image: url('../assets/img/icon-0_05.png');}
  &-0_10{background-image: url('../assets/img/icon-0_10.png');}
  &-0_25{background-image: url('../assets/img/icon-0_25.png');}
  &-0_50{background-image: url('../assets/img/icon-0_50.png');}
  &-1{background-image: url('../assets/img/icon-1.png');}
  &-5{background-image: url('../assets/img/icon-5.png');}
  &:hover{
    opacity: 1;
  }
  &.active{
    transform: scale(1.15);
    opacity: 1;
  }
}

.bet-items{
 position: fixed;
 right: 30px;
 bottom: 30px;
 background: rgba(255, 255, 255, 0.8);
 border-radius: 100px;
 z-index: 999;
 font-size: 20px;
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 15px 30px;
 span{
   display: block;
 }
 li{
   display: block;
   background: #fff;
   border-radius: 8px;
   padding: 5px 10px;
   margin-left: 5px;
   margin-right: 5px;
 }
}
</style>
