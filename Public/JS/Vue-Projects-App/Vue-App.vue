<!-- import * as Vue from 'vue'; const app = Vue.createApp({ data() { return { message: 'Hello Vue!', }; }, }).mount('#vueApp'); console.log(app);
 -->
<!-- <template lang="pug"> -->
<!-- Vue.config.devtools = true; -->

<template>
  <Slider :projectData="data" @projectSelected="storeProject" />
  <Container :projectData="data" :project="projectSelected" />
</template>

<script>
import Slider from './Vue_Parts/_Project-Slider';
import Container from './Vue_Parts/_Project-Container';
import axios from 'axios';
import API from './../API-Calls';

export default {
  // -- These two lines of code are used for components.
  name: `Portfolio`,
  components: { Slider, Container },
  data() {
    return {
      data: null,
      projectSelected: null,
      tempSkill: '',
      skills: [],
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
    addSkill(e) {
      e.preventDefault();
      if (e.key === `Enter` && this.tempSkill) {
        this.skills.push(this.tempSkill);
        this.tempSkill = '';
      }
    },
    storeProject(project) {
      this.projectSelected = project;
    },
  },

  // async beforeCreate() {
  //   const options = {
  //     method: `GET`,
  //     url: `/data`,
  //   };
  //   try {
  //     const response = await axios(options);
  //     console.log(response.data, response.data.data.title);
  //     this.data = response.data.data.projects;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },

  async beforeMount() {
    const options = {
      method: `GET`,
      url: `/data`,
    };
    try {
      const response = await axios(options);
      console.log(response.data.data, response.data.data.title);
      this.data = response.data.data.projects;
    } catch (error) {
      console.error(error);
    }
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
  justify-content: center;
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
