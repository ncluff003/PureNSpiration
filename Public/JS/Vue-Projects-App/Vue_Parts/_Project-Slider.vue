<template>
  <section class="vue-projects-slider r__vue-projects-slider">{{ projectData }}</section>
</template>
<script>
export default {
  props: ['projectData'],
};
</script>
<style lang="scss" scoped>
.vue-projects-slider {
  position: relative;
  height: 100%;
  width: 20%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  transform: translate(0, 0) rotate(0);
  background-color: transparent;
  -webkit-transition: background-color 0.5s, border 0.5s, color 0.5s, background-image 0.5s;
  transition: background-color 0.5s, border 0.5s, color 0.5s, background-image 0.5s;
}

/* DAY STYLES */
.day {
  .vue-projects-slider {
    border-left: 0.3rem solid #ffd700;
    border-right: 0.3rem solid #ffd700;
    background-image: linear-gradient(to bottom, #ffd700 0%, transparent 5%, transparent 95%, #ffd700 100%);
  }
}

/* NIGHT STYLES */
.night {
  .vue-projects-slider {
    border-left: 0.3rem solid #00b358;
    border-right: 0.3rem solid #00b358;
    background-image: linear-gradient(to bottom, #00b358 0%, transparent 5%, transparent 95%, #00b358 100%);
  }
}
</style>
