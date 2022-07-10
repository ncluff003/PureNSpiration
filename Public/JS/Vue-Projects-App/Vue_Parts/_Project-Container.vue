<template>
  <section class="vue-projects-container r__vue-projects-container">
    <Display :project="project" />
    <Description :project="project" />
  </section>
</template>
<script>
import Display from './_Project-Display';
import Description from './_Project-Description';

export default {
  components: { Display, Description },
  props: ['projectData', 'project'],
  data() {
    return {
      projects: '',
      selectedProject: this.project,
    };
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.vue-projects-container {
  position: relative;
  height: 100%;
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  transform: translate(0, 0) rotate(0);
  transition: background-color 0.5s, border 0.5s, color 0.5s;
}

// DAY STYLES
.day {
  .vue-projects-container {
    background-color: #cccccc;
  }
}

// NIGHT STYLES
.night {
  .vue-projects-container {
    background-color: #0047ab;
  }
}
</style>
