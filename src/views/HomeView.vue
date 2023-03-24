<template>
     <div class="w-full h-full relative flex flex-col">
          <Navbar @lang="handleReadData"/>
          <main class="w-full h-[calc(100vh-40px)] flex flex-col lg:flex-row justify-center absolute">
               <div class="w-3/5 hidden lg:flex flex-col justify-center items-center">
                    <div>
                         <h1 class="text-6xl text-color-101B61 font-light animate__animated animate__fadeInDown">
                              {{ dataHome.hi }} <br />
                              {{ dataHome.title }}
                              <span class="font-normal">{{ dataHome.name }}</span>
                         </h1>
                         <p style="animation-delay: 1.5s" class="text-2xl text-color-101B61 mt-8 font-extralight animate__animated animate__fadeIn max-w-[400px]">
                              {{ dataHome.subtitle }}
                         </p>
                    </div>
               </div>
               <div class="w-full lg:w-2/5 flex items-center lg:justify-start justify-center animate__animated animate__rotateIn">
                    <img class="w-3/5" src="../assets/img/me.png" alt="me" />
               </div>
               <div class="w-full text-center mt-[-20px] lg:hidden">
                    <h1 class="text-4xl text-color-101B61 font-light animate__animated animate__fadeInDown">
                         {{ dataHome.hi }}
                         {{ dataHome.title }}
                         <span class="font-normal">{{ dataHome.name }}</span>
                    </h1>
                    <p class="w-4/5 m-auto text-xl text-color-101B61 mt-8 font-extralight animate__animated animate__fadeInDown">
                         {{ dataHome.subtitle }}
                    </p>
               </div>
          </main>
     </div>
</template>

<script>
import { ref } from "vue";
import readData from "../firebase/readData.js";
import checkLang from "../composable/checkLang.js";

import Navbar from "../components/Navbar.vue";

export default {
     components: {
          Navbar,
     },

     setup() {
          const dataHome = ref({});

          const handleReadData = async () => {
               const { lang } = checkLang();
               const { data } = await readData(lang, "home");
               dataHome.value = data;
          };

          handleReadData();

          return { dataHome, handleReadData };
     },
};
</script>

<style lang="scss" scoped></style>
