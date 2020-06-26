<template>
  <div class="roulette-story">
    <ul>
      <li v-for="item in this.$store.state.story" class="item" :class="'item-'+item.color">
        {{item.id}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Story',
}
</script>
<style lang="scss" scoped>
.roulette{
  &-story{
    position: absolute;
    width: 90px;
    height: 215px;
    background: rgba(255, 255, 255, 0.5);
    border: 3px solid #FFFFFF;
    box-shadow: inset 0px 0px 24px #000000;
    backdrop-filter: blur(18px);
    border-radius: 10px;
    top: 30px;
    right: 0;
    padding: 5px 10px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    ul{
      padding: 0;
      width: 100%;
    }
    .item{
      font-size: 30px;
      line-height: 1.1;
      text-align: center;
      display: block;
      text-align: left;
      &:nth-child(even){
        text-align: right;
      }
      &-red{
        color: #B04341;
      }
      &-black{
        color: #313130;
      }
      &-green{
        color: #30AA30;
      }
    }
  }
}
</style>
