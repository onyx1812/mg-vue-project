<template>
  <div class="roulette-menu">
    <button class="set set-undo" @click="undo"></button>
    <button class="set set-clear" @click="clear"></button>
    <button class="set set-double" @click="double"></button>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  methods: {
    clear(e){
      this.$store.state.bet_items = [];
      const items = document.querySelectorAll('.item-bet');
      items.forEach(item => {
        item.classList.remove('active');
      });
      const stds = document.querySelectorAll('.std');
      stds.forEach(std => {
        std.classList.remove('active');
      });
    },
    double(e){
      let double_arr = [];
      this.$store.state.bet_items.forEach(bet_item => {
        double_arr.push({
          item: bet_item.item,
          bet: Number(bet_item.bet) * 2
        });
        document.querySelector(`[data-value="${bet_item.item}"]`).children[1].innerHTML = Number(bet_item.bet) * 2;
      });
      this.$store.state.bet_items = double_arr;
    },
    undo(e){
      this.$store.state.bet_items = this.$store.state.bet_items_undo;
      this.$store.state.bet_items.forEach(bet_item => {
        document.querySelector(`[data-value="${bet_item.item}"]`).classList.add('active');
        document.querySelector(`[data-value="${bet_item.item}"]`).children[1].innerHTML = Number(bet_item.bet);
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.roulette{
  &-menu{
    background: rgba(255,255,255, .3);
    backdrop-filter: blur(4px);
    border-radius: 0 0 12px 12px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    .set{
      font-size: 0;
      width: 69px;
      height: 69px;
      border:none;
      box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.45);
      border-radius: 50%;
      transition: opacity .25s ease;
      &:not(:first-child){
        margin-left: 15px;
      }
      &-undo{
        background: url('../../assets/img/icon-undo.png') no-repeat 0 0;
      }
      &-clear{
        background: url('../../assets/img/icon-clear.png') no-repeat 0 0;
      }
      &-double{
        background: url('../../assets/img/icon-double.png') no-repeat 0 0;
      }
      &:hover{
        opacity: .75;
      }
    }
  }
}
</style>
