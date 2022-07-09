<template>
  <section class="vue-project__cover-photo-display r__vue-project__cover-photo-display">{{ projectData }}</section>
</template>
<script>
export default {
  props: [`projectData`],
};
</script>
<style lang="scss" scoped>
.vue-project__cover-photo-display {
  position: relative;
  height: 55%;
  width: 85%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s, border 0.5s, color 0.5s;
}

/* DAY STYLES */
.day {
  .vue-project__cover-photo-display {
    border: 1rem solid #ffd700;
  }
}

/* NIGHT STYLES */
.night {
  .vue-project__cover-photo-display {
    border: 1rem solid #00b358;
  }
}
</style>
