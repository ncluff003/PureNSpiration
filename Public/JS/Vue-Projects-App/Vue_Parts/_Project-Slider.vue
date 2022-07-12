<template>
  <section class="vue-projects-slider r__vue-projects-slider">
    <section class="vue-project-option r__vue-project-option" v-for="project in projectData" :key="project.index" @click="selectProject(project)">
      <section class="vue-project-option__cover-photo-container r__vue-project-option__cover-photo-container">
        <img :src="project.coverPhoto" :alt="project.title" />
      </section>
      <p class="vue-project-option__title r__vue-project-option__title">{{ project.title }}</p>
    </section>
  </section>
</template>
<script>
export default {
  props: ['projectData'],
  data() {
    return {
      projects: this.projectData,
      project: null,
    };
  },
  methods: {
    selectProject(project) {
      this.project = project;
      this.$emit('projectSelected', this.project);
    },
  },
};
</script>
<style lang="scss" scoped>
.vue-projects-slider {
  position: relative;
  height: 100%;
  width: 20%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  transform: translate(0, 0) rotate(0);
  background-color: transparent;
  -webkit-transition: background-color 0.5s, border 0.5s, color 0.5s, background-image 0.5s;
  transition: background-color 0.5s, border 0.5s, color 0.5s, background-image 0.5s;
  overflow-y: auto;
  padding-top: 3rem;
}

.vue-project-option {
  position: relative;
  height: auto;
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 5rem;

  &__cover-photo-container {
    position: relative;
    height: auto;
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border: 1rem solid transparent;
    padding: 1.5rem;

    img {
      position: relative;
      height: auto;
      width: 90%;
      justify-self: center;
    }
  }

  &__title {
    position: absolute;
    right: 4rem;
    bottom: -3rem;

    font-family: Roboto Condensed;
    // font-family: Roboto Slab, Roboto Condensed;
    font-size: 2rem;
    font-weight: bold;
    transition: color 0.5s;
  }

  &:hover {
    cursor: pointer;
    .vue-project-option__cover-photo-container {
      transition: width 0.5s, border 0.5s;

      img {
        width: 100%;
        transition: width 0.5s;
      }
    }
  }
}

/* DAY STYLES */
.day {
  .vue-projects-slider {
    border-left: 0.3rem groove #ffd700;
    border-right: 0.3rem groove #ffd700;
    background-image: linear-gradient(to bottom, #ffd700 0%, transparent 5%, transparent 95%, #ffd700 100%);
  }
  .vue-project-option {
    &__title {
      color: rgba(#333, 0.5);
    }
    &:hover {
      .vue-project-option__cover-photo-container {
        border: 1rem solid #ffd700;
      }
      .vue-project-option__title {
        color: #333;
      }
    }
  }
}

/* NIGHT STYLES */
.night {
  .vue-projects-slider {
    border-left: 0.3rem groove #00b358;
    border-right: 0.3rem groove #00b358;
    background-image: linear-gradient(to bottom, #333333 0%, rgba(#fefefe, 0.25) 5%, rgba(#fefefe, 0.25) 95%, #333333 100%);
    .vue-project-option {
      &__title {
        color: rgba(#00b358, 0.5);
      }
      &:hover {
        .vue-project-option__cover-photo-container {
          border: 1rem solid #00b358;
        }
        .vue-project-option__title {
          color: #00b358;
        }
      }
    }
  }
}
</style>
