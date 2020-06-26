<template>
  <ul class="roulette-bets">
    <li v-for="bet_item in this.$store.state.bet_items">
      <span>item: {{bet_item.item}}</span>
      <span>bet: {{bet_item.bet}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Bets',
}
</script>
<style lang="scss" scoped>
.roulette{
  &-bets{
    position: fixed;
    right: 15px;
    bottom: 15px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 100px;
    z-index: 999;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    span{
      display: block;
    }
    li{
      display: block;
      background: #fff;
      border-radius: 8px;
      padding: 5px 10px;
      margin-left: 2.5px;
      margin-right: 2.5px;
      font-size: 12px;
    }
  }
}
</style>
