<template>
  <section class="vue-project-media r__vue-project-media">
    <button class="vue-media-left r__vue-media-left">
      <i class="fas fa-arrow-left left-icon"></i>
    </button>
    <section class="vue-media-slider r__vue-media-slider" v-if="projectSelected"></section>
    <button class="vue-media-right r__vue-media-right">
      <i class="fas fa-arrow-right right-icon"></i>
    </button>
  </section>
</template>
<script>
export default {
  props: [`project`],
  data() {
    return {
      projectMedia: '',
      projectSelected: false,
    };
  },
  updated() {
    this.projectMedia = this.project.media;
    this.projectSelected = true;
  },
};
</script>
<style lang="scss" scoped>
.vue-project-media {
  position: relative;
  height: 40%;
  width: 50%;
  border-radius: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  transition: background-color 0.5s, border 0.5s, color 0.5s;

  .vue-media-left,
  .vue-media-right {
    position: relative;
    height: 100%;
    width: 15%;
    border: none;

    .left-icon,
    .right-icon {
      font-size: 3rem;
      font-weight: bold;
    }

    &:hover {
      cursor: pointer;
      transition: background-color 0.5s, border 0.5s, color 0.5s;
      .left-icon,
      .right-icon {
        transition: color 0.5s;
      }
    }
  }
}
.day {
  .vue-project__description-container {
    .vue-project-media {
      border: 0.5rem solid #ffd700;
      .vue-media-left,
      .vue-media-right {
        background-color: rgba(#ffd700, 0.7);
        .left-icon,
        .right-icon {
          color: rgba(#fefefe, 0.7);
        }

        &:hover {
          background-color: #ffd700;

          .left-icon,
          .right-icon {
            color: #fefefe;
          }
        }
      }
    }
  }
}

.night {
  .vue-project__description-container {
    .vue-project-media {
      border: 0.5rem solid #00b358;
      .vue-media-left,
      .vue-media-right {
        background-color: rgba(#00b358, 0.7);
        .left-icon,
        .right-icon {
          color: rgba(#fefefe, 0.7);
        }
        &:hover {
          background-color: #00b358;
          .left-icon,
          .right-icon {
            color: #fefefe;
          }
        }
      }
    }
  }
}
</style>
