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
// MEDIA QUERY MANAGER
@mixin max-responsive($max-width) {
  @media (max-width: $max-width) {
    @content;
  }
}

@mixin min-responsive($min-width) {
  @media (min-width: $min-width) {
    @content;
  }
}

@mixin combo-max-responsive($max-width, $max-height) {
  @media (max-width: $max-width) and (max-height: $max-height) {
    @content;
  }
}

@mixin combo-min-responsive($min-width, $min-height) {
  @media (min-width: $min-width) and (min-height: $min-height) {
    @content;
  }
}

@mixin combo-maxMin-responsive($max-width, $min-height) {
  @media (max-width: $max-width) and (min-height: $min-height) {
    @content;
  }
}

@mixin combo-minMax-responsive($min-width, $max-height) {
  @media (min-width: $min-width) and (min-height: $max-height) {
    @content;
  }
}

@mixin responsiveBreakPoint($breakpoint) {
  @if ($breakpoint == 'smallMobilePort') {
    @include combo-max-responsive(375px, 800px) {
      @content;
    }
  } @else if ($breakpoint == 'smallMobileLand') {
    @include combo-max-responsive(800px, 375px) {
      @content;
    }
  }
  @if ($breakpoint == 'largeMobilePort') {
    @include combo-max-responsive(425px, 930px) {
      @content;
    }
  } @else if ($breakpoint == 'largeMobileLand') {
    @include combo-max-responsive(930px, 425px) {
      @content;
    }
  }
  @if ($breakpoint == 'smallTabPort') {
    @include combo-max-responsive(800px, 1050px) {
      @content;
    }
  } @else if ($breakpoint == 'smallTabLand') {
    @include combo-max-responsive(1050px, 800px) {
      @content;
    }
  }
  @if ($breakpoint == 'largeTabPort') {
    @include combo-max-responsive(1050px, 1400px) {
      @content;
    }
  } @else if ($breakpoint == 'largeTabLand') {
    @include combo-max-responsive(1400px, 1050px) {
      @content;
    }
  }
  @if ($breakpoint == 'desktop') {
    @include combo-min-responsive(1401px, 1051px) {
      @content;
    }
  } @else if ($breakpoint == 'tv') {
    @include min-responsive(2500px) {
      @content;
    }
  }
}

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

@include responsiveBreakPoint('tv') {
  .vue-project-option {
    &__title {
      font-size: 3rem;
      transform: translate(-3rem, 1rem);
    }
  }
}

@include responsiveBreakPoint('largeTabLand') {
  .vue-project-option {
    width: 100%;
    &__cover-photo-container {
      border: 0.5rem solid transparent;
    }

    &__title {
      transform: translate(-1rem, -0.5rem);
    }
  }
}

@include responsiveBreakPoint('largeTabPort') {
  .r__vue-projects-slider {
    flex-flow: row nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    height: 20%;
    width: 100%;
    max-width: 87.5rem;
    padding: 0 0 0 3rem;
  }

  .r__vue-project-option {
    height: 90%;
    width: auto;
    min-width: 20rem;
    flex-direction: row;
    margin-right: 5rem;
    margin-bottom: 0;
    &__title {
      transform: translate(0rem, -2.5rem);
    }
  }
}

/* DAY STYLES */
.day {
  .vue-projects-slider {
    border-left: 0.3rem groove #ffd700;
    border-right: 0.3rem groove #ffd700;
    background-image: linear-gradient(to bottom, #ffd700 0%, transparent 5%, transparent 95%, #ffd700 100%);

    @include responsiveBreakPoint('largeTabPort') {
      border-top: 0.3rem groove #ffd700;
      border-bottom: 0.3rem groove #ffd700;
      background-image: linear-gradient(to right, #ffd700 0%, transparent 5%, transparent 95%, #ffd700 100%);
    }
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

      @include responsiveBreakPoint('largeTabLand') {
        .vue-project-option__cover-photo-container {
          border: 0.5rem solid #00b358;
        }
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
    @include responsiveBreakPoint('largeTabPort') {
      border-top: 0.3rem groove #00b358;
      border-bottom: 0.3rem groove #00b358;
      background-image: linear-gradient(to right, #00b358 0%, transparent 5%, transparent 95%, #00b358 100%);
    }
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

        @include responsiveBreakPoint('largeTabLand') {
          .vue-project-option__cover-photo-container {
            border: 0.5rem solid #00b358;
          }
        }
      }
    }
  }
}
</style>
