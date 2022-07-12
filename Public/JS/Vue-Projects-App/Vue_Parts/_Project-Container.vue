<template>
  <section class="vue-projects-container r__vue-projects-container">
    <section class="vue-project__cover-photo-display r__vue-project__cover-photo-display">
      <img :src="project.media[0].file" :alt="project.media[0].altText" class="project-cover-photo r__project-cover-photo" />
    </section>
    <section class="vue-project__description-container r__vue-project__description-container">
      <header class="project-title r__project-title">
        <p class="project-title__title r__project-title__title">{{ project.title }}</p>
      </header>
      <section class="vue-project-media r__vue-project-media">
        <button class="vue-media-left r__vue-media-left" @click="mediaScrollLeft">
          <i class="fas fa-arrow-left left-icon"></i>
        </button>
        <section class="vue-media-slider r__vue-media-slider">
          <section class="vue-media-option r__vue-media-option" v-for="media in project.media" :key="media">
            <video
              class="vue-media-option__video r__vue-media-option__video"
              :src="media.file"
              :alt="media.altText"
              controls="true"
              v-if="media.type === 'video'"
              @click="setDisplay"
            ></video>
            <img
              :src="media.file"
              :alt="media.altText"
              class="vue-media-option__image r__vue-media-optoin__image"
              v-if="media.type === 'photo'"
              @click="setDisplay"
            />
          </section>
        </section>
        <button class="vue-media-right r__vue-media-right" @click="mediaScrollRight">
          <i class="fas fa-arrow-right right-icon"></i>
        </button>
      </section>
      <p class="vue-project-technologies r__vue-project-technologies">{{ project.technologies }}</p>
      <section class="vue-project-description-container r__vue-project-description-container">
        <p class="vue-project-description r__vue-project-description" v-for="text in project.description" :key="text">{{ text }}</p>
      </section>
    </section>
    <!-- <Display :project="project" />
    <Description :project="project" /> -->
  </section>
</template>
<script>
import Display from './_Project-Display';
import Description from './_Project-Description';
import * as Utility from './../../Utility';

export default {
  components: { Display, Description },
  props: ['projectData', 'project'],
  data() {
    return {
      projects: '',
      selectedProject: this.project,
      mediaOptionIndex: 0,
    };
  },
  methods: {
    mediaScrollLeft(e) {
      const mediaOptions = [...document.querySelectorAll('.vue-media-option')];
      const mediaSlider = e.target.closest('.vue-media-left').nextSibling;
      this.mediaOptionIndex--;
      if (this.mediaOptionIndex < 0) this.mediaOptionIndex = 0;
      mediaSlider.scrollTo({ top: 0, left: mediaOptions[this.mediaOptionIndex].offsetLeft });
    },
    mediaScrollRight(e) {
      const mediaOptions = [...document.querySelectorAll('.vue-media-option')];
      const mediaSlider = e.target.closest('.vue-media-right').previousElementSibling;
      this.mediaOptionIndex++;
      if (this.mediaOptionIndex > mediaOptions.length - 1) this.mediaOptionIndex = mediaOptions.length - 1;
      mediaSlider.scrollTo({ top: 0, left: mediaOptions[this.mediaOptionIndex].offsetLeft });
    },
    setDisplay(e) {
      e.preventDefault();
      console.log([...document.querySelectorAll('.vue-media-option')]);
      console.log(e);
    },
  },
  computed: {
    selectedProjectMedia() {
      let mediaContainer = document.createElement('section');
      Utility.addClasses(mediaContainer, [`vue-media-container`, `r__vue-media-container`]);
      let media = this.project.media;
      return media;
    },
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

// PROJECT DISPLAY

.vue-project__cover-photo-display {
  position: relative;
  height: 55%;
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s, border 0.5s, color 0.5s;
}

.project-cover-photo {
  position: relative;
  height: 100%;
  width: auto;
}

// PROJECT DESCRIPTION
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
  font-size: 1.6rem;
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

// PROJECT MEDIA

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
    transition: background-color 0.5s;

    .left-icon,
    .right-icon {
      font-size: 3rem;
      font-weight: bold;
      transition: color 0.5s;
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

  .vue-media-slider {
    position: relative;
    height: 100%;
    width: 70%;
    display: flex;
    padding: 0.5rem;
    justify-content: flex-start;
    align-content: center;
    overflow-x: auto;
    scroll-behavior: smooth;

    .vue-media-option {
      position: relative;
      height: 100%;
      width: max-content;
      opacity: 0.5;
      &__video,
      &__image {
        position: relative;
        height: 100%;
        width: 19rem;
        margin-right: 0.5rem;
      }

      &:hover {
        cursor: pointer;
        opacity: 1;
        transition: opacity 0.5s;
      }
    }
    .vue-project-video {
      position: absoulte;
      top: 50%;
      left: 50%;
      height: 100%;
      width: auto;
      transform: translateY(-50%);
      &:hover {
        cursor: pointer;
      }
    }
  }
}

// DAY STYLES
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
