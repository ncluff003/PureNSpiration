<template>
  <section class="vue-project__cover-photo-display r__vue-project__cover-photo-display">
    <img :src="image" :alt="alt" class="project-cover-photo r__project-cover-photo" />
  </section>
</template>
<script>
export default {
  props: [`project`],
  data() {
    return {
      image: '',
      alt: '',
    };
  },
  updated() {
    this.image = this.project.coverPhoto;
    this.alt = this.project.photoAltText;
  },
};
</script>
<style lang="scss" scoped>
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

/* DAY STYLES */
.day {
  .vue-project__cover-photo-display {
    // border: 0.3rem solid #ffd700;
  }
}

/* NIGHT STYLES */
.night {
  .vue-project__cover-photo-display {
    // border: 0.3rem solid #00b358;
  }
}
</style>
