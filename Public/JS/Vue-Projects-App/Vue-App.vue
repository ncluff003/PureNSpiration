<!-- import * as Vue from 'vue'; const app = Vue.createApp({ data() { return { message: 'Hello Vue!', }; }, }).mount('#vueApp'); console.log(app);
 -->
<!-- <template lang="pug"> -->
<!-- Vue.config.devtools = true; -->

<template>
  <Slider :projectData="data" @projectSelected="storeProject" />
  <Container :projectData="data" :project="projectSelected" v-if="projectSelected !== null" />
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

@include responsiveBreakPoint('largeTabLand') {
  #vueApp {
    height: 100%;
    width: 85%;
    justify-content: flex-start;
  }
}
@include responsiveBreakPoint('largeTabPort') {
  #vueApp {
    height: 85%;
    width: 100%;
    flex-flow: column-reverse nowrap;
    align-items: flex-start;
  }
}

/* DAY STYLES */
.day {
}

/* NIGHT STYLES */
.night {
}
</style>
