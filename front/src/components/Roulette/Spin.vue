<template>
  <div class="roulette-spin">
    <div class="scene-wrap">
      <div class="scene-inner">
        <div class="scene">
          <div class="carousel">
            <div class="carousel__cell" v-for="item in this.$store.state.items" :class="'carousel__cell-'+item.color" >
              <span>{{item.id}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-random" id="goRandom" >Играть</button>
  </div>
</template>
<script>
export default {
  name: 'Spin',
  mounted(e){
    const rCarousel = e => {
      const carousel = document.querySelector('.carousel');
      const cells = carousel.querySelectorAll('.carousel__cell');
      const cellCount = 37;
      const sceneIndex = 360;
      let selectedIndex = sceneIndex;
      const cellWidth = carousel.offsetWidth;
      const cellHeight = carousel.offsetHeight;
      let rotateFn = 'rotateX';
      let radius, theta;

      const initCarousel = () => {
        carousel.classList.remove('carousel-anim');
        carousel.style.transform = `translateZ(-${radius}px) rotateX(${sceneIndex}deg)`;
        setTimeout(e => {
          carousel.classList.add('carousel-anim');
        }, 500);
      }

      const rotateCarousel = () => {
        const angle = theta * selectedIndex * -1;
        carousel.style.transform = 'translateZ(' + -radius + 'px) ' + rotateFn + '(' + angle + 'deg)';
      }

      const goRandom = document.getElementById('goRandom');
      goRandom.addEventListener( 'click', () => {
        this.$store.state.bet_items_undo = this.$store.state.bet_items;
        initCarousel();
        setTimeout(e=>{
            selectedIndex = Math.floor(Math.random() * Math.floor(36));
            console.log(selectedIndex);
            this.$store.state.won = selectedIndex;
            console.log(this.$store.state.won);

          setTimeout(()=>{
            let story_arr = this.$store.state.story;
            story_arr.push({
              color: this.$store.state.items[this.$store.state.won].color,
              id: this.$store.state.items[this.$store.state.won].id
            });
            this.$store.state.story = story_arr;
            this.$store.state.bet_items.forEach((el, i) => {
              if( el.item == this.$store.state.won ){
                console.log(`You WIN item: ${el.item} bet: ${el.bet}`);
              } else {
                console.log(`You lose`);
              }
              document.querySelectorAll('.item-bet').forEach(item => {
                item.classList.remove('active');
              });
              this.$store.state.bet_items = [];
            });
          }, 10500);
          rotateCarousel();
        }, 600);
      });

      const changeCarousel = () => {
        theta = 360 / cellCount;
        var cellSize = cellHeight;
        radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
        for ( var i=0; i < cells.length; i++ ) {
          var cell = cells[i];
          if ( i < cellCount ) {
            cell.style.opacity = 1;
            var cellAngle = theta * i;
            cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
          } else {
            cell.style.opacity = 0;
            cell.style.transform = 'none';
          }
        }

        initCarousel();
      }

      changeCarousel();

    }
    rCarousel()
  }
}
</script>
<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  &-anim{
    transition: transform 10s ease-in-out;
  }
  &__cell {
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    font-size: 80px;
    font-weight: bold;
    color: #ddd;
    text-align: center;
    transition: transform 1s, opacity 1s;
    background-size: auto 100%;
    background-position: center center;
    background-repeat: no-repeat;
    font-family: Roboto;
    font-weight: 300;
    text-shadow: 2px 2px 4px #000;
    background-size: 100% auto;
    span{
      position: relative;
      z-index: 2;
    }
    &-green{background-image: url('../../assets/img/green.png');}
    &-red{background-image: url('../../assets/img/red.png');}
    &-black{background-image: url('../../assets/img/black.png');}
  }
}
.scene {
  position: relative;
  width: 184px;
  height: 150px;
  perspective: 300px;
  &-inner{
    overflow: hidden;
    height: 354px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-wrap{
    overflow: hidden;
    position: relative;
    width: 396px;
    height: 404px;
    background: url('../../assets/img/scene.png') no-repeat center center/auto 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.btn-random{
  background: linear-gradient(180deg, #FFFFFF -7.02%, rgba(255, 255, 255, 0) 5.26%), #FF5D54;
  border-radius: 60px;
  height: 57px;
  line-height: 57px;
  width: 336px;
  border: none;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
