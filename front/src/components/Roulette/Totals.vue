<template>
  <div class="totals">
    <div class="totals-board">
      Total
      <span class="before-dollar">{{total}}</span>
    </div>
    <div class="totals-bets">
      <span>MIN: $0.05</span>
      <span>MAX: $5.00</span>
      <span></span>
    </div>
    <button class="btn btn-orange" id="replenish">replenish</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Totals',
  computed: mapState({
    total: state => {
      let result = 0;
      if(state.bet_items.length === 0) result;
      state.bet_items.forEach(bet_item => {
        result = result + Number(bet_item.bet);
      })
      return result.toFixed(2);
    }
  })
}
</script>
<style lang="scss" scoped>
.totals{
  width: 396px;
  height: 111px;
  background: #D1D2D9;
  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.75);
  border-radius: 12px;
  position: absolute;
  bottom: 15px;
  z-index: 5;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  justify-content: center;
  &-board{
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #3B3B3B;
    span{
      display: block;
      font-size: 23px;
      line-height: 27px;
    }
  }
  &-bets{
    font-size: 14px;
    line-height: 16px;
    color: #3B3B3B;
    border-left: 1px solid #3B3B3B;
    margin-left: 15px;
    padding-left: 15px;
    width: 120px;
    padding-top: 7.5px;
    padding-bottom: 7.5px;
    span{
      padding-top: 7.5px;
      padding-bottom: 7.5px;
      display: block;
    }
  }
  .btn{
    margin-left: 15px;
    width: 92px;
    height: 43px;
    line-height: 43px;
    font-size: 20px;
    color: #FFFFFF;
    background: #FF5D54;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.74);
    border-radius: 11px;
    border: none;
    font-weight: 400;
    font-family: 'Roboto';
  }
}
.before{
  &-dollar{
    &:before{
      content:"$";
    }
  }
}
</style>
