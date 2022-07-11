<template>
  <section class="vue-project__description-container r__vue-project__description-container">
    <header class="project-title r__project-title">
      <p class="project-title__title r__project-title__title">{{ projectTitle }}</p>
    </header>
    <Media :project="project" />
    <p class="vue-project-technologies r__vue-project-technologies">{{ projectTech }}</p>
    <section class="vue-project-description-container r__vue-project-description-container">
      <p class="vue-project-description r__vue-project-description" v-for="text in projectDescription" :key="text">{{ text }}</p>
    </section>
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
      projectTech: '',
      projectDescription: '',
    };
  },
  updated() {
    this.projectTitle = this.project.title;
    this.projectTech = this.project.technologies;
    this.projectDescription = this.project.description;
  },
};
</script>
<style lang="scss" scoped>
.vue-project__description-container {
  position: relative;
  height: 45%;
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 2rem 0;
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

.vue-project-technologies {
  position: absolute;
  height: max-content;
  width: max-content;
  top: 1rem;
  right: 2rem;
  font-family: Roboto Slab, Verdana, sans-serif;
  font-size: 2rem;
  font-weight: bold;
}

.vue-project-description-container {
  position: relative;
  height: 80%;
  width: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6rem 3rem 0 3rem;
  overflow-y: auto;

  p {
    font-size: 1.4rem;
    font-family: Roboto Slab;
    line-height: 1.5;
    text-indent: 2rem;
    margin-bottom: 1rem;
  }
}

/* DAY STYLES */
.day {
  .vue-project__description-container {
    // border: 0.3rem groove #ffd700;
    .project-title {
      color: #333333;
    }
    .vue-project-technologies {
      color: #333333;
    }

    .vue-project-description-container {
      p {
        color: #333333;
      }
    }
  }
}

/* NIGHT STYLES */
.night {
  .vue-project__description-container {
    // border: 0.3rem groove #00b358;
    .project-title {
      color: #00b358;
    }
    .vue-project-technologies {
      color: #00b358;
    }
    .vue-project-description-container {
      p {
        color: #00b358;
      }
    }
  }
}
</style>
