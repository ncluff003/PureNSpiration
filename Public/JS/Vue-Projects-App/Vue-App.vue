<!-- import * as Vue from 'vue'; const app = Vue.createApp({ data() { return { message: 'Hello Vue!', }; }, }).mount('#vueApp'); console.log(app);
 -->
<!-- <template lang="pug"> -->
<template>
  <Slider :projectData="message" />
  <Container :projectData="message" />
</template>

<script>
import Slider from './Vue_Parts/_Project-Slider';
import Container from './Vue_Parts/_Project-Container';

export default {
  // -- These two lines of code are used for components.
  name: `Portfolio`,
  components: { Slider, Container },
  data() {
    return {
      count: 0,
      message: `Hello From Vue!`,
      name: `Nathan Cluff`,
      job: `Web Developer`,
      age: 34,
      showInfo: true,
      showBOOKS: true,
      books: [
        {
          title: 'name of the wind',
          author: 'patrick rothfuss',
        },
        {
          title: 'the way of the kings',
          author: 'brandon sanderson',
        },
        {
          title: 'the final empire',
          author: 'brandon sanderson',
        },
      ],
    };
  },
  methods: {
    decrease() {
      this.age--;
    },
    increase() {
      this.age++;
    },

    show() {
      this.showInfo = !this.showInfo;
    },
    showBooks() {
      this.showBOOKS = !this.showBOOKS;
    },
    handleClick() {
      console.log(this.$refs.name.value);
    },
  },
  // template: `<h2> {{ message }} </h2>`,
  mounted() {
    console.log(`${this.message}, I, Vue, Am Active...`);
  },
  render() {
    h(this);
  },
};
</script>

<style lang="scss">
#vueApp {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  transform: translate(0, 0) rotate(0);
}

/* DAY STYLES */
.day {
}

/* NIGHT STYLES */
.night {
}
</style>
