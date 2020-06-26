<template>
  <div class="roulette-table">
    <ul class="items-special items-special--top row">
      <li class="item col-3">
        <button @click="itemsArr" data-arr="1,2,3,4,5,6,7,8,9">1 to 9</button>
      </li>
      <li class="item col-3">
        <button @click="itemsArr" data-arr="10,11,12,13,14,15,16,17,18">10 to 18</button>
      </li>
      <li class="item col-3">
        <button @click="itemsArr" data-arr="19,20,21,22,23,24,25,26,27">19 to 27</button>
      </li>
      <li class="item col-3">
        <button @click="itemsArr" data-arr="28,29,30,31,32,33,34,35,36">28 to 36</button>
      </li>
    </ul>
    <ul class="list-items">
      <li v-for="item in this.$store.state.items" :class="'item item-'+item.color">
        <button class="item-bet" :data-color="item.color" :data-value="item.id" @click="itemBet" :class="{}">
          <span>{{item.id}}</span>
          <i></i>
        </button>
      </li>
      <li class="item item-btn"><button @click="itemsArr" data-arr="1,4,7,10,13,16,19,22,25,28,31,34"><span>2to1</span></button></li>
      <li class="item item-btn"><button @click="itemsArr" data-arr="2,5,8,11,14,17,20,23,26,29,32,35"><span>2to1</span></button></li>
      <li class="item item-btn"><button @click="itemsArr" data-arr="3,6,9,12,15,18,21,24,27,30,33,36"><span>2to1</span></button></li>
    </ul>
    <ul class="items-special row">
      <li class="item col-4">
        <button @click="itemsArr" data-arr="1,2,3,4,5,6,7,8,9,10,11,12">1st 12</button>
      </li>
      <li class="item col-4">
        <button @click="itemsArr" data-arr="13,14,15,16,17,18,19,20,21,22,23,24">2nd 12</button>
      </li>
      <li class="item col-4">
        <button @click="itemsArr" data-arr="25,26,27,28,29,30,31,32,33,34,35,36">3rd 12</button>
      </li>
      <li class="item col-2">
        <button @click="itemsArr" data-arr="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18">1 to 18</button>
      </li>
      <li class="item col-2">
        <button @click="itemsArr" data-arr="2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36">Even</button>
      </li>
      <li class="item col-2">
        <button @click="itemsArr" data-arr="1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36">Red</button>
      </li>
      <li class="item col-2">
        <button @click="itemsArr" data-arr="2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35">Black</button>
      </li>
      <li class="item col-2">
        <button @click="itemsArr" data-arr="1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35">Odd</button>
      </li>
      <li class="item col-2">
        <button @click="itemsArr" data-arr="19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36">19 to 36</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Table',
  methods: {
    itemBet(e){
      if( e.target.classList.contains('active') ){
        this.$store.state.bet_items.forEach( (el, i) => {
          if( el.item == e.target.dataset.value ){
            this.$store.state.bet_items[i].bet = (Number(el.bet) + Number(this.$store.state.bet)).toFixed(2);
            e.target.childNodes[1].innerHTML = this.$store.state.bet_items[i].bet;
          }
        });
      } else {
        e.target.classList.add('active');
        e.target.childNodes[1].innerHTML = this.$store.state.bet;
        this.$store.state.bet_items.push({
          item: e.target.dataset.value,
          bet: this.$store.state.bet
        });
      }
    },
    itemsArr(e){
      let items_bet = document.querySelectorAll('.item-bet');
      items_bet.forEach(item => {
        item.classList.remove('active');
      });

      let items = e.target.dataset.arr.split(',');
      let arr = [];
      for(let i = 0; i < items.length; i++){
        arr.push({
          item: items[i],
          bet: this.$store.state.bet
        });
        document.querySelector(`.item-bet[data-value="${items[i]}"]`).classList.add('active');
        document.querySelector(`.item-bet[data-value="${items[i]}"]`).childNodes[1].innerHTML = this.$store.state.bet;
      }
      this.$store.state.bet_items = arr;
    },
  }
}
</script>
<style lang="scss" scoped>
.roulette{
  &-table{
    width: 100%;
  }
}
.items-special{
  border-left: 2.5px solid #fff;
  border-right: 2.5px solid #fff;
  border-bottom: 2.5px solid #fff;
  width: 100%;
  margin-left: 75px;
  max-width: 906px;
  li{
    border: 2.5px solid #fff;
    border-top: none;
    padding: 5px;
    &.col-4{
      label{
        font-weight: 900;
        font-size: 26px;
      }
    }
    &.col-2{
      label{font-size: 14px;}
    }
    button{
      height: 100%;
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      font-weight: 400;
      font-family: 'Roboto';
      font-size: 30px;
      border:none;
      background: none;
      color: #F2F2F2;
      text-transform: uppercase;
      &:hover{
        opacity: .75;
      }
      &#items_red{
        position: relative;
        font-size: 0;
        &:before {
          content: "";
          width: 0;
          height: 0;
          position: absolute;
          left: 50%;
          top: 0;
          border: 19px solid transparent;
          border-right: 50px solid #B04341;
          transform: translateX(-100%);
        }
        &:after {
          content: "";
          width: 0;
          height: 0;
          position: absolute;
          left: 50%;
          top: 0;
          border: 19px solid transparent;
          border-left: 50px solid #B04341;
        }
      }
      &#items_black{
        font-size: 0;
        position: relative;
        &:before {
          content: "";
          width: 0;
          height: 0;
          position: absolute;
          left: 50%;
          top: 0;
          border: 19px solid transparent;
          border-right: 50px solid #313130;
          transform: translateX(-100%);
        }
        &:after {
          content: "";
          width: 0;
          height: 0;
          position: absolute;
          left: 50%;
          top: 0;
          border: 19px solid transparent;
          border-left: 50px solid #313130;
        }
      }
    }
  }
  &--top{
    border-top: 2.5px solid #fff;
    border-bottom: none;
    li{
      border-top: 2.5px solid #fff;
      border-bottom: none;
    }
  }
}

.list-items{
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  border: 2.5px solid #fff;
  height: 310px;
  overflow: hidden;
  border-radius: 20px 0 0 20px;
  width: 100%;
  max-width: 1055px;
  .item{
    border: 2.5px solid #fff;
    flex: 1;
    padding: 0;
    flex-grow: 1;
    height: 100px;
    width: calc(100% / 14);
    &-green{
      flex: 1 1 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 20px 0 0 20px;
      button{
        background: #30AA30;
      }
    }
    &-red{
      button{
        background: #B04341;
      }
    }
    &-black{
      button{
        background: #313130;
      }
    }
    &-btn{
      button{
        height: 100%;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
        font-weight: 400;
        font-family: 'Roboto';
        font-size: 36px;
        border:none;
        background: none;
        color: #F2F2F2;
        span{
          transform: rotate(-90deg);
          pointer-events: none
        }
        &:hover{
          opacity: .75;
        }
      }
    }
    &-bet{
      border:none;
      height: 100%;
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      font-size: 48px;
      color: #f2f2f2;
      font-family: 'Roboto';
      &:hover{
        opacity: .8;
      }
      span{
        transform: rotate(-90deg);
        pointer-events: none;
      }
      i{
        position: absolute;
        width: 50px;
        height: 50px;
        left: 50%; top: 50%;
        transform: scale(0) translate(-50%, -50%);
        z-index: 9;
        box-shadow: 4px 4px 8px black;
        border-radius: 50%;
        background: url('../../assets/img/icon-bet.png') no-repeat 0 0/100% 100%;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        transition: .25s ease-in;
        transform-origin: 0 0;
        text-align: center;
        line-height: 50px;
        letter-spacing: -1px;
        font-size: 11px;
        font-weight: 700;
        color: #000;
      }
      &.active{
        i{
          visibility: visible;
          opacity: 1;
          transform: scale(1) translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
