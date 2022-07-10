<template>
  <section class="vue-project__description-container r__vue-project__description-container">
    <header class="project-title r__project-title">
      <p class="project-title__title r__project-title__title">{{ projectTitle }}</p>
    </header>
    <Media :project="project" />
  </section>
</template>
<script>
import Media from './_Project-Media.vue';

export default {
  components: { Media },
  props: [`project`],
  data() {
    return {
      projectTitle: '',
    };
  },
  updated() {
    this.projectTitle = this.project.title;
    console.log(this.project);
  },
};
</script>
<style lang="scss" scoped>
.vue-project__description-container {
  position: relative;
  height: 45%;
  width: 75%;
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
    border: 0.3rem solid #ffd700;
  }
}

/* NIGHT STYLES */
.night {
  .vue-project__description-container {
    border: 0.3rem solid #00b358;
  }
}
</style>
