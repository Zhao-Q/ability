<template>
  <div class="body">
    <div class="stars">
      <div class="star"
           v-for="(item, index) in starsCount"
           :ref="setItemRef"
           :key="index">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainIndex",
  data() {
    return {
      starsCount: 800, //星星数量
      distance: 900, //间距
      itemRefs: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.itemRefs.forEach((item) => {
        let speed = 0.2 + Math.random() * 1;
        let thisDistance = this.distance + Math.random() * 300;
        item.style.transformOrigin = `0 0 ${thisDistance}px`;
        item.style.transform = `
        translate3d(0,0,-${thisDistance}px)
        rotateY(${Math.random() * 360}deg)
        rotateX(${Math.random() * -50}deg)
        scale(${speed},${speed})`;
      });
    }, 1000);
  },
  methods: {
    setItemRef(el) {
      this.itemRefs.push(el);
    },
  },
};
</script>

<style lang="css" scoped>
.body {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: radial-gradient(
    200% 100% at bottom center,
    #f7f7b6,
    #e96f92,
    #1b2947
  );
  background: radial-gradient(
    200% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    #e96f92 65%,
    #f7f7b6
  );
  background-attachment: fixed;
  overflow: hidden;
}
@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}
@-webkit-keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}
.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 45%;
  -webkit-animation: rotate 90s infinite linear;
  bottom: 0;
}
.star {
  width: 2px;
  height: 2px;
  background: #f7f7b6;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
}
</style>

