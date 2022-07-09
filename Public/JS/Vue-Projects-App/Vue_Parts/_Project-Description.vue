<template>
  <section class="vue-project__description-container r__vue-project__description-container">
    <header class="project-title r__project-title">
      <p class="project-title__title r__project-title__title">Project Title</p>
    </header>
    <Media projectData="" />
  </section>
</template>
<script>
import Media from './_Project-Media.vue';

export default {
  components: { Media },
  props: [`projectData`],
};
</script>
<style lang="scss" scoped>
.vue-project__description-container {
  position: relative;
  height: 45%;
  width: 85%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  transition: background-color 0.5s, border 0.5s, color 0.5s;
}

.project-title {
  position: absolute;
  height: max-content;
  width: max-content;
  top: 1rem;
  left: 2rem;
  font-family: Roboto Slab, Verdana, sans-serif;
  font-size: 4rem;
  font-weight: bold;
}

/* DAY STYLES */
.day {
  .vue-project__description-container {
    border: 1rem solid #ffd700;
  }
}

/* NIGHT STYLES */
.night {
  .vue-project__description-container {
    border: 1rem solid #00b358;
  }
}
</style>
