<template>
     <div class="w-full h-full relative flex flex-col items-center">
          <Navbar @lang="handleReadData"/>
          <div class="w-4/5 sm:w-3/5 mt-24 sm:mt-48 relative overflow-hidden">
               <h1 style="animation-duration: 0.5s" class="text-5xl sm:text-6xl max-w-[260px] font-bold text-color-101B61 animate__animated animate__fadeInRightBig">{{ dataProjects.title }} <span class="w-3 h-3 ml-[-7px] mb-[-1px] rounded-full bg-color-8002E0 inline-block"></span></h1>
               <hr style="animation-duration: 0.2s" class="text-color-8002E0 bg-color-8002E0 p-[1px] w-28 mt-5 mb-5 animate__animated animate__fadeInRightBig" />
               <p style="animation-delay: 0.5s" class="font-light text-color-101B61 text-xl sm:text-2xl animate__animated animate__fadeIn max-w-50px">
                    {{ dataProjects.subtitle }}
               </p>
          </div>
          <div class="relative mt-10 sm:mt-24 flex flex-col items-center">
               <span style="animation-delay: 1s" class="text-color-9AA09E tracking-[5px] text-xs animate__animated animate__fadeIn">SCROLL</span>
               <span style="animation-delay: 1.5s" class="bg-color-9AA09E w-[1px] h-64 block text-color mt-5 animate__animated animate__fadeInUp"></span>
          </div>
          <div class="w-4/5 sm:w-3/5 mt-10 flex flex-col mb-[100px]">
               <h1 style="animation-duration: 0.5s" class="text-4xl sm:text-5xl font-bold text-color-101B61 animate__animated animate__fadeInRightBig mt-10">{{ dataProjects.header_commercial }}</h1>
               <Project v-for="project in dataProjects.projects_commercial" :key="project.name" :data="project" />
               <h1 style="animation-duration: 0.5s" class="text-4xl sm:text-5xl font-bold text-color-101B61 animate__animated animate__fadeInRightBig mt-10">{{ dataProjects.header_private }}</h1>
               <Project v-for="project in dataProjects.projects_private" :key="project.name" :data="project" />
          </div>
     </div>
</template>

<script>
import { ref } from "vue";
import readData from "../firebase/readData.js";
import checkLang from "../composable/checkLang.js";

import Navbar from "../components/Navbar.vue";
import Project from "../components/Project.vue";

export default {
     components: {
          Navbar,
          Project,
     },
     setup() {
          const dataProjects = ref({});

          const handleReadData = async () => {
               const { lang } = checkLang();
               const { data } = await readData(lang, "projects");
               dataProjects.value = data;
          };

          handleReadData();

          return { dataProjects, handleReadData };
     },
};
</script>

<style lang="scss" scoped></style>
